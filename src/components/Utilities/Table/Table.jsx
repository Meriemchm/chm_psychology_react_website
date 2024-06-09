import React from "react";

const Table = ({ dataItem }) => {
  return (
    <div className="w-full text-graytabdata">
      <table className="min-w-full md:text-base text-xs">
        <tbody>
          {dataItem.map(({ id, title, itemOne, itemTwo, style, others }) => (
            <tr key={id} className={`${style} `}>
              <td className=" pl-2 md:px-5 py-6 ">{title}</td>
              <td className={`md:px-5  ${ itemOne === "Anywhere (Internet required)" ? "md:text-center" : 'text-center '  } `}>{itemOne}</td>
              <td className={`  ${others} text-center`}>{itemTwo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
