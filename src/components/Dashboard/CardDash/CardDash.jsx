import React, { useState } from "react";
import { DashData } from "../../Data/Data";
import { NavLink } from "react-router-dom";
import CardItem from "./CardItem/CardItem";
import CalenderForm from "../CalenderDash/CalenderForm/CalenderForm";
import { ProfileDrData } from "../../Data/Data";
import ProfileDrCard from "../../Utilities/ProfileDrCard/ProfileDrCard";
// import PropTypes from 'prop-types';

const CardDash = ({ addEvent }) => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (title && start) {
      const newEvent = { id: Date.now(), title, start };
      addEvent(newEvent);
      setShowModal(false);
      setTitle("");
      setStart("");
    }
  };
  const handleCardClick = (id) => {
    if (id === 1) {
      setShowModal(true);
    }
  };

  return (
    <div className="h-full flex flex-col ">
      {DashData.map(({ id, img, icon, description, title, src }, index) => {
        return (
          <div key={id} onClick={() => handleCardClick(id)}>
            {id === 1 ? (
              <CardItem
              icon={icon}
              title={title}
              description={description}
              img={img}
              id={id}
            />
              // <ProfileDrCard data={ProfileDrData} />
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
        title={title}
        setTitle={setTitle}
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
