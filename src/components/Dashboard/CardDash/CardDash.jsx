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

// import PropTypes from 'prop-types';

const CardDash = () => {
  //contexts
  const { userData, role, token } = useContext(AuthContext);
  const { psyData } = useContext(PsychologistsContext);
  const { showModal, setShowModal } = useSessions();

  //selectedProfile is used to send the profile to the explore page to display it
  const [selectedProfile, setSelectedProfile] = useState(null);
  const navigate = useNavigate();

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
          <div
            className={` ${role === "user" ? "w-full" : "pb-5"}  `}
            key={id}
            onClick={() => handleCardClick(id)}
          >
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
