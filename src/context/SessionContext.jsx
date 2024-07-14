import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const { userData, role, token } = useContext(AuthContext);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  //psycologist delete session side
  const [deletingEvent, setDeletingEvent] = useState(null);

  //function

  const handleEventSelect = (event) => {
    if (userData && role !== "user") {
      setDeletingEvent(event);
      
    } else if (
      (userData && role === "user" && event.status === "free") ||
      event.status === "chosen"
    ) {
      setSelectedEvent(event);
    }
  };

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const handleDelete = (event) => {
    const updatedEvents = events.filter((e) => e !== event);
    setEvents(updatedEvents);
  };

  //fetch
  useEffect(() => {
    const fetchData = async () => {
      if (userData) {
        try {
          const endpoint =
            role !== "user"
              ? "/api/api/sessions/psychologist"
              : "/api/api/sessions/user";
          const response = await axios.get(endpoint, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          const formattedEvents = response.data.map((session) => ({
            id: session.id,
            start: new Date(`${session.date} ${session.time}`),
            title:
              role !== "user"
                ? "Dr." + userData.username
                : "Dr." + session.psychologist,
            status: session.status || session.is_taken,
          }));
          
          setEvents(formattedEvents);
        } catch (error) {
          console.error("Error fetching sessions:", error);
        }
      }
    };

    fetchData();
  }, [userData, role, token,selectedEvent]);

  const handleConfirmation = async (selectedEvent) => {
    if (!selectedEvent) {
      console.error("No event selected");
      return;
    }
    
    const currentStatus = selectedEvent.status;
    const apiUrl =
      currentStatus === "free"
        ? "/api/api/appointments/add"
        : "/api/api/appointments/cancel";
    const payload = { session_id: selectedEvent.id };

    try {
      const response = await axios.post(apiUrl, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (
        response.data.message === "delete successfully" ||
        response.status === 200
      ) {
        const updatedEvents = events.map((event) =>
          event.id === selectedEvent.id
            ? { ...event, status: currentStatus === "free" ? "chosen" : "free" }
            : event
        );
        setEvents(updatedEvents);
      } else {
        console.error("Unexpected response from server:", response.data);
      }
    } catch (error) {
      console.error("Error updating appointment status:", error);
    }
    setSelectedEvent(null);
  };

  return (
    <SessionContext.Provider
      value={{
        events,
        addEvent,
        handleConfirmation,
        handleDelete,
        handleEventSelect,
        selectedEvent,
        setSelectedEvent,
        deletingEvent,
        setDeletingEvent,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSessions = () => {
  return useContext(SessionContext);
};
