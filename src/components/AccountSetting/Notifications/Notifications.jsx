import React from "react";
import NotificationsForm from "./NotificationsForm/NotificationsForm";

const Notifications = () => {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-2xl pb-2">Notifications</h1>

      <div className="flex justify-between">
        <p className="text-lg pb-10 pt-2">Enable Notifications</p>
        <p>0</p>
      </div>

      <div>
        <NotificationsForm />
      </div>
    </div>
  );
};

export default Notifications;
