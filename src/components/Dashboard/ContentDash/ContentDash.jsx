
import React from 'react';
import CardDash from '../CardDash/CardDash';
import CalenderDash from '../CalenderDash/CalenderDash';

const ContentDash = () => {
  return (
    <div className="grid grid-cols-2 gap-4 py-20 h-screen">

      <div className="bg-secondvariant p-4">
      <CalenderDash/>
      </div>

        <div className=" p-4">
        <CardDash/>
        </div>

    </div>
  );
};

export default ContentDash;

