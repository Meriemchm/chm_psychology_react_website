import React from "react";

function CardItem({ icon, title, description, img,id }) {
  return (
    <div
      className={`cursor-pointer p-5 2xl:p-5 rounded-lg shadow-md flex flex-col justify-center items-center w-48 xl:w-auto ${
        id === 2 ? "mt-auto" : "mb-10"
      }  `}
    >
      <div className="flex flex-row gap-2">
        {icon}
        <h2 className="font-bold 2xl:text-lg text-sm">{title}</h2>
      </div>
      <p className="py-10 text-six 2xl:text-lg text-sm xl:flex hidden">{description}</p>
      {img}
    </div>
  );
}

export default CardItem;
