import React, { useState, useContext } from "react";
import { DashData } from "../../Data/Data";
import { NavLink, useNavigate } from "react-router-dom";
import CardItem from "./CardItem/CardItem";
import CalenderForm from "../CalenderDash/CalenderForm/CalenderForm";
import { PsychologistsContext } from "../../../context/PsychologistsContext";
import axios from "axios";
import ProfileDrCard from "../../Utilities/ProfileDrCard/ProfileDrCard";
import { AuthContext } from "../../../context/AuthContext";
// import { db } from "../../../firebase";
// import firebase from "firebase/compat/app";
// import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";

// import PropTypes from 'prop-types';

const CardDash = ({ addEvent }) => {
  //
  const { userData, role, token } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const title = userData ? "Dr." + userData.username : "";
  const [start, setStart] = useState("");
  const [selectedProfile, setSelectedProfile] = useState(null);
  const navigate = useNavigate();
  const { psyData } = useContext(PsychologistsContext);

  const handleAddEvent = async (e) => {
    e.preventDefault();
    if (title && start) {
      const newEvent = { title, start };
      addEvent(newEvent);
      const eventDate = new Date(newEvent.start);
      const date = eventDate.toISOString().split("T")[0];
      const time = eventDate.toTimeString().split(" ")[0];

      setShowModal(false);
      setStart("");

      try {
        // const userId = userData[0]?.id;
        // if (userId) {
        //   const userDoc = await getDoc(doc(db, "appointments", userId));
        //   if (userDoc.exists()) {

        //     const existingAppointments = userDoc.data().appointments || [];
        //     await updateDoc(doc(db, "appointments", userId), {
        //       appointments: [...existingAppointments, newEvent]
        //     });
        //   } else {

        //     await setDoc(doc(db, "appointments", userId), {
        //       appointments: [newEvent]
        //     });
        //   }
        //   console.log("Appointment added successfully");
        // } else {
        //   console.error("User ID is not available");
        // }

        const response = await axios.post(
          "/api/api/sessions/add",
          {
            date,
            time,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Session added successfully:", response.data);
        setShowModal(false);
        setStart("");
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };

  const handleCardClick = (id) => {
    if (id === 1 && userData && role !== "user") {
      setShowModal(true);
    }
  };

  // psycologue profile in the user side
  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
    navigate("/main", { state: { selectedProfile: profile } });
  };

  return (
    <div
      className={`h-full flex xl:flex-col gap-2 ${
        userData && role === "user"
          ? "flex-col md:my-0 my-10 xl:items-stretch items-start"
          : ""
      } xl:gap-5 2xl:gap-0 `}
    >
      {DashData.map(({ id, img, icon, description, title, src }, index) => {
        const side =
          userData && role === "user" ? (
            <ProfileDrCard data={psyData} onCardClick={handleProfileClick} />
          ) : (
            <CardItem
              icon={icon}
              title={title}
              description={description}
              img={img}
              id={id}
            />
          );
        return (
          <div className="w-auto " key={id} onClick={() => handleCardClick(id)}>
            {id === 1 ? (
              side
            ) : (
              <NavLink to={src}>
                <CardItem
                  icon={icon}
                  title={title}
                  description={description}
                  img={img}
                  id={id}
                />
              </NavLink>
            )}
          </div>
        );
      })}
      {/*calenderform is to add the date and time for the appointment */}
      {showModal && (
        <CalenderForm
          start={start}
          setStart={setStart}
          handleAddEvent={handleAddEvent}
          setShowModal={setShowModal}
          showModal={showModal}
        />
      )}
    </div>
  );
};
/* CardDash.propTypes = {
  setEvents: PropTypes.func.isRequired,
};
 */
export default CardDash;
