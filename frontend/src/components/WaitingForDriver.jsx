import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5 className="w-full flex justify-center">
        <i
          onClick={() => {
            props.setConfirmedVehicle(true);
            props.setWaiting(false);
          }}
          className="text-3xl text-gray-300 ri-arrow-down-wide-fill"
        ></i>
      </h5>
      <div className='flex justify-between items-center'>
        <img
          className="h-20"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png"
          alt=""
        />
        <div className='text-right'>
          <h2 className='text-lg font-medium'>Sarthak</h2>
          <h4 className='text-xl font-semibold'>BR059999</h4>
          <p className='text-sm text-gray-600'>Swift Desire</p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center mt-5">
        <div className="w-full">
          <div className="flex items-center gap-3 p-3 border-b-2">
            <i className="ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-base text-gray-600">
                Kankariya Talab, Ahmedabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 border-b-2">
            <i className="ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-base text-gray-600">
                Kankariya Talab, Ahmedabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.20</h3>
              <p className="text-base text-gray-600">Cash cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WaitingForDriver