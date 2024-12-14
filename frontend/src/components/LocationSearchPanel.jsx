import React from "react";

const LocationSearchPanel = (props) => {

  const handleSuggestionClick = (suggestion) => {
    if (props.activeField === "pickup") {
      props.setPickup(suggestion);
    } else if (props.activeField === "destination") {
      props.setDestination(suggestion);
    }
  };

  return (
    <div>
      {
      props.suggestions.map((location, index) => (
        <div
          key={index}
          className="flex gap-2 my-4 border-2 rounded-lg p-3 border-gray-50 active:border-black"
          onClick={() => {
            handleSuggestionClick(location);
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
