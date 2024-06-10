import React, { useContext, useState, useEffect } from "react";
import CardDash from "../CardDash/CardDash";
import CalenderDash from "../CalenderDash/CalenderDash";
import { AuthContext } from "../../../context/AuthContext";
import { db, auth } from "../../../firebase";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
const ContentDash = () => {
  const { userData } = useContext(AuthContext);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (userData[0] && userData[0]?.status !== "client") {
        try {
          const userDocRef = doc(db, "appointments", userData[0]?.id);
          const userDocSnap = await getDoc(userDocRef);
          if (userDocSnap.exists()) {
            const userEvents = userDocSnap.data().appointments.map((event) => ({
              ...event,
              start: event.start.toDate(), 
            }));
            setEvents(userEvents);
          }
        } catch (error) {
          console.error("Error fetching user events:", error);
        }
      } else if (userData[0] && userData[0]?.status === "client") {
        try {
          let allEvents = [];
          const appointmentsSnapshot = await getDocs(collection(db, "appointments"));
          console.log(appointmentsSnapshot);
          appointmentsSnapshot.forEach((doc) => {
            if (doc.data().appointments !== undefined) {
              allEvents.push(
                ...doc.data().appointments.map((event) => ({
                  ...event,
                  start: event.start.toDate(),
                }))
              );
            }
          });
          setEvents(allEvents);
        } catch (error) {
          console.error("Error fetching user events:", error);
        }
      }
    };

    fetchData();
  }, [userData[0]]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  console.log(events);

  const handleConfirmation = () => {
    if (selectedEvent) {
      const updatedEvents = events.map((event) =>
        event === selectedEvent
          ? { ...event, status: event.status === "chosen" ? "free" : "chosen" }
          : event
      );
      setSelectedEvent(null);
      setEvents(updatedEvents);
    }
  };

  const handleDelete = (event) => {
    const updatedEvents = events.filter((e) => e !== event);
    setEvents(updatedEvents);
  };

  return (
    <div className="grid xl:grid-cols-4  md:gap-4 py-20 w-full h-full">
      <div className="rounded-lg shadow-md md:p-4 p-1 w-full col-span-3 order-2 xl:order-1">
        <CalenderDash
          events={events}
          handleConfirmation={handleConfirmation}
          selectedEvent={selectedEvent}
          setSelectedEvent={setSelectedEvent}
          handleDelete={handleDelete}
        />
      </div>
      <div className="w-full h-full xl:px-4 px-2 col-span-1  order-1 xl:order-2">
        <CardDash addEvent={addEvent} />
      </div>
    </div>
  );
};

export default ContentDash;
