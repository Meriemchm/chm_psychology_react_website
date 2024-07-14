import React, { useState, useContext } from "react";
import { DashData } from "../../Data/Data";
import { NavLink, useNavigate } from "react-router-dom";
import CardItem from "./CardItem/CardItem";
import CalenderForm from "../CalenderDash/CalenderForm/CalenderForm";
import { PsychologistsContext } from "../../../context/PsychologistsContext";
import axios from "axios";
import ProfileDrCard from "../../Utilities/ProfileDrCard/ProfileDrCard";
import { AuthContext } from "../../../context/AuthContext";
import { useSessions } from "../../../context/SessionContext";
// import { db } from "../../../firebase";
// import firebase from "firebase/compat/app";
// import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";

// import PropTypes from 'prop-types';

const CardDash = () => {
  //contexts
  const { userData, role, token } = useContext(AuthContext);
  const { psyData } = useContext(PsychologistsContext);
  const { addEvent } = useSessions();

  const [showModal, setShowModal] = useState(false);

  //events body
  const title = userData ? "Dr." + userData.username : "";
  const [start, setStart] = useState("");

  //selectedProfile is used to send the profile to the explore page to display it
  const [selectedProfile, setSelectedProfile] = useState(null);
  const navigate = useNavigate();

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

        // console.log("Session added successfully:", response.data);
        setShowModal(false);
        setStart("");
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };

  // to show the add session card for psycologist side
  const handleCardClick = (id) => {
    if (id === 1 && userData && role !== "user") {
      setShowModal(true);
    }
  };

  // psycologist profile in the user side
  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
    navigate("/main", { state: { selectedProfile: profile } });
  };

  return (
    <div
      className={`h-full flex xl:flex-col gap-2 ${
        userData && role === "user"
          ? "flex-col  md:my-0 my-10 xl:items-stretch items-start"
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
          <div className="w-full " key={id} onClick={() => handleCardClick(id)}>
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
      {/*calenderform is made to craete the date and time for the doctor session */}
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
