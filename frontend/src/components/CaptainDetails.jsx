import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center justify-start gap-2">
          <img
            className="h-10 w-10 rounded-full cover"
            src="https://media.glamour.com/photos/65089a79089594c0b01709e6/4:3/w_4312,h_3234,c_limit/1606732263"
            alt=""
          />
          <h4 className="text-lg font-medium">Vishal Kr. Singh</h4>
        </div>
        <div>
          <h4 className="text-xl font-semibold">969.69</h4>
          <h6 className="text-sm text-gray-600">Earned</h6>
        </div>
      </div>

      <div className="flex justify-center gap-4 items-center p-3 bg-gray-100 rounded-2xl">
        <div className="text-center">
          <i className="text-3xl mb-2 xl font-thin ri-timer-2-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
      </div>
    </div>
  );
}

export default CaptainDetails