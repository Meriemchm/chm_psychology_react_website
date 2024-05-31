
import React from 'react';
import CardDash from '../CardDash/CardDash';
import CalenderDash from '../CalenderDash/CalenderDash';

const ContentDash = () => {
  return (
    <div className="grid grid-cols-4 gap-4 py-20 w-full h-full">

      <div className="rounded-lg shadow-md p-4 w-full col-span-3">
      <CalenderDash/>
      </div>

        <div className="w-full h-full xl:px-4 px-2 col-span-1">
        <CardDash/>
        </div>

    </div>
  );
};

export default ContentDash;

