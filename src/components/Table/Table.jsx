import React from "react";


const Table = ({dataItem}) => {
  return (
    <div className="w-full flex flex-cols text-graytabdata">

              <table className="min-w-full leading-normal">
                <tbody>
                  {dataItem.map(({ id, title,itemOne, itemTwo,style,others}) => (
         
                    <tr key={id} className={`${style} `} >
                      <td
                        className=" px-5 py-3 "
                      >
                        {title}
                      </td>
                      <td
                        className="px-5 py-3  text-center"
                      >
                        {itemOne}
                      </td>
                      <td
                        className={`px-24 py-3 ${others} text-center`}
                      >
                        {itemTwo}
                      </td>
                    </tr>
          
                  ))}
                </tbody>
              </table>
            </div>

  );
};

export default Table;
