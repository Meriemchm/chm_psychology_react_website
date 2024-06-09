import React, { useState, useContext } from "react";
import { DashData } from "../../Data/Data";
import { NavLink, useNavigate } from "react-router-dom";
import CardItem from "./CardItem/CardItem";
import CalenderForm from "../CalenderDash/CalenderForm/CalenderForm";
import { ProfileDrData } from "../../Data/Data";
import ProfileDrCard from "../../Utilities/ProfileDrCard/ProfileDrCard";
import { AuthContext } from "../../../context/AuthContext";

// import PropTypes from 'prop-types';

const CardDash = ({ addEvent }) => {
  const { userData } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const title = userData[0] ? "Dr." + userData[0].username : "";
  const [start, setStart] = useState("");
  const [selectedProfile, setSelectedProfile] = useState(null);
  const status = "free";
  const navigate = useNavigate()

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (title && start && status) {
      const newEvent = { id: Date.now(), title, start, status };
      addEvent(newEvent);
      setShowModal(false);
      setStart("");
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
    <div className="h-full flex xl:flex-col gap-2 xl:gap-0 ">
      {DashData.map(({ id, img, icon, description, title, src }, index) => {
        const side =
          userData[0] && userData[0].status === "client" ? (
            <ProfileDrCard data={ProfileDrData} onCardClick={handleProfileClick} />
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
          <div key={id} onClick={() => handleCardClick(id)}>
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
