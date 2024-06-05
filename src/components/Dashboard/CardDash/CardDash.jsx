import React, { useState } from "react";
import { DashData } from "../../Data/Data";
import { NavLink } from "react-router-dom";
import CardItem from "./CardItem/CardItem";
import CalenderForm from "../CalenderDash/CalenderForm/CalenderForm";
import PropTypes from 'prop-types';

const CardDash = ({ setEvent }) => {
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });

  const handleAddEvent = () => {
    setEvent((prevEvents) => [...prevEvents, newEvent]);
    setShowModal(false);
  };

  const handleCardClick = (id) => {
    if (id === 2) {
      setShowModal(true);
    }
  };

  return (
    <div className="h-full flex flex-col ">
      {DashData.map(({ id, img, icon, description, title, src }, index) => {
        return (
          <div key={id} onClick={() => handleCardClick(id)}>
            {id === 2 ? (
              <CardItem
                icon={icon}
                title={title}
                description={description}
                img={img}
                id={id}
              />
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
          showModal={showModal}
          newEvent={newEvent}
          setNewEvent={setNewEvent}
          handleAddEvent={handleAddEvent}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};
CardDash.propTypes = {
  setEvents: PropTypes.func.isRequired,
};

export default CardDash;
