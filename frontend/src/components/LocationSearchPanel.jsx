import React from "react";

const LocationSearchPanel = (props) => {
  // sample array for loacation
  const locations = [
    "122, Near RB Industries, RB's Mansion, Los Angelos",
    "123, Near RB Industries, RB's Mansion, NYC",
    "124, Near RB Industries, RB's Mansion, London",
  ];

  return (
    <div>
      {locations.map((location, index) => (
        <div
          key={index}
          className="flex gap-2 my-4 border-2 rounded-lg p-3 border-gray-50 active:border-black"
          onClick={() => {
            props.setVehiclePanel(true);
            props.setShow(false);
          }}
        >
          <div className="w-6 h-6 bg-[#eeeeee] rounded-full flex items-center justify-center">
            <i className="ri-map-pin-fill text-md"></i>
          </div>
          <h4 className="font-medium">{location}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
