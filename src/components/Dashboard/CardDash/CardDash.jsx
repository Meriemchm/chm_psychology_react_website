import React, { useState, useContext } from "react";
import { DashData } from "../../Data/Data";
import { NavLink, useNavigate } from "react-router-dom";
import CardItem from "./CardItem/CardItem";
import CalenderForm from "../CalenderDash/CalenderForm/CalenderForm";
import { ProfileDrData } from "../../Data/Data";
import ProfileDrCard from "../../Utilities/ProfileDrCard/ProfileDrCard";
import { AuthContext } from "../../../context/AuthContext";
import { db  } from "../../../firebase";
import firebase from "firebase/compat/app";
import { doc, getDoc, updateDoc,setDoc } from "firebase/firestore";

// import PropTypes from 'prop-types';

const CardDash = ({ addEvent }) => {
  const { userData, currentUser } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const title = userData[0] ? "Dr." + userData[0].username : "";
  const [start, setStart] = useState("");
  const [selectedProfile, setSelectedProfile] = useState(null);
  const status = "free";
  const navigate = useNavigate();


  const handleAddEvent = async (e) => {
    e.preventDefault();
    if (title && start && status) {
      const newEvent = { id: Date.now(), title, start, status };
      addEvent(newEvent);
      setShowModal(false);
      setStart("");
  
      try {
        const userId = userData[0]?.id; // Ensure user ID is available
        if (userId) {
          const userDoc = await getDoc(doc(db, "appointments", userId));
          if (userDoc.exists()) {
            // User already has appointments, update the existing appointments array
            const existingAppointments = userDoc.data().appointments || [];
            await updateDoc(doc(db, "appointments", userId), {
              appointments: [...existingAppointments, newEvent]
            });
          } else {
            // User does not have any appointments, create a new document
            await setDoc(doc(db, "appointments", userId), {
              appointments: [newEvent]
            });
          }
          console.log("Appointment added successfully");
        } else {
          console.error("User ID is not available");
        }
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };
  

  const handleCardClick = (id) => {
    if (id === 1 && userData[0] && userData[0].status !== "client") {
      setShowModal(true);
    }
  };

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
    navigate("/dashboard/explore", { state: { selectedProfile: profile } });
  };

  return (
    <div className={`h-full flex xl:flex-col gap-2 ${userData[0] && userData[0].status === "client" ? "flex-col md:my-0 my-10 xl:items-stretch items-start" : ''} xl:gap-0 `}>
      {DashData.map(({ id, img, icon, description, title, src }, index) => {
        const side =
          userData[0] && userData[0].status === "client" ? (
            <ProfileDrCard
              data={ProfileDrData}
              onCardClick={handleProfileClick}
            />
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
