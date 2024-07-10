import React, { useContext, useState, useEffect } from "react";
import CardDash from "../CardDash/CardDash";
import CalenderDash from "../CalenderDash/CalenderDash";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import { db, auth } from "../../../firebase";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
const ContentDash = () => {
  const { userData, role, token } = useContext(AuthContext);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([]);

  //fetch data to have appoinments
  useEffect(() => {
    const fetchData = async () => {
      if (userData && role !== "user") {
        // psycologist session side
        // try {
        //   const userDocRef = doc(db, "appointments", userData[0]?.id);
        //   const userDocSnap = await getDoc(userDocRef);
        //   if (userDocSnap.exists()) {
        //     const userEvents = userDocSnap.data().appointments.map((event) => ({
        //       ...event,
        //       start: event.start.toDate(),
        //     }));
        //     setEvents(userEvents);
        //   }
        // } catch (error) {
        //   console.error("Error fetching user events:", error);
        // }

        try {
          const response = await axios.get("/api/api/sessions/psychologist", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          console.log(response.data)
          const formattedEvents = response.data.map((session) => ({
            start: new Date(`${session.date} ${session.time}`),
            title: "Dr." + userData.username,
            status: session.is_taken,
          }));

          setEvents(formattedEvents);
        } catch (error) {
          console.error("Error fetching psychologist's sessions:", error);
        }
      } else if (userData && role === "user") {
        //user side appointment
        try {
          // let allEvents = [];
          // const appointmentsSnapshot = await getDocs(collection(db, "appointments"));

          // appointmentsSnapshot.forEach((doc) => {
          //   if (doc.data().appointments !== undefined) {
          //     allEvents.push(
          //       ...doc.data().appointments.map((event) => ({
          //         ...event,
          //         start: event.start.toDate(),
          //       }))
          //     );
          //   }
          // });
          // setEvents(allEvents);

          try {
            const response = await axios.get(
              "/api/api/sessions/user",
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            console.log(response.data)
            const formattedEvents = response.data.map((session) => ({
              start: new Date(`${session.date} ${session.time}`),
              title: 'Dr.'+session.psychologist,
              status: session.status,
            }));
  
            setEvents(formattedEvents);
          } catch (error) {
            console.error("Error fetching psychologists sessions:", error);
          }
        } catch (error) {
          console.error("Error fetching user events:", error);
        }
      }
    };

    fetchData();
  }, [userData]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  // this is for choosing a event
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
    <div className="grid xl:grid-cols-4 grid-cols-1 md:gap-4 py-20 w-full h-full">
      <div className="rounded-lg shadow-md md:p-4 p-1 w-full col-span-3 order-2 xl:order-1">
        {/*calender dash contain the calender */}
        <CalenderDash
          events={events}
          handleConfirmation={handleConfirmation}
          selectedEvent={selectedEvent}
          setSelectedEvent={setSelectedEvent}
          handleDelete={handleDelete}
        />
      </div>
      {/*card dash contain the doctors card and account settings cards*/}
      <div className="w-full h-full xl:px-4 px-2 col-span-1  order-1 xl:order-2">
        <CardDash addEvent={addEvent} /> {/*   */}
      </div>
    </div>
  );
};

export default ContentDash;
