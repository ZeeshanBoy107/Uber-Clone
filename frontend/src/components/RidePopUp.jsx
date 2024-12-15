import React from 'react'
import { Link } from 'react-router-dom';

const RidePopUp = (props) => {
  return (
    <div>
      <h2 className="text-2xl font-medium mb-2">New Ride Available</h2>

      <div className='flex items-center justify-between p-2 bg-yellow-300 rounded-xl'>
        <div className='flex items-center gap-2'>
          <img
          className='h-12 rounded-full'
            src="https://media.glamour.com/photos/65089a79089594c0b01709e6/4:3/w_4312,h_3234,c_limit/1606732263"
            alt=""
          />
          <h4 className="text-lg font-medium">{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}</h4>
        </div>
        <h5 className='text-xl font-semibold'>2.2km</h5>
      </div>

      <div className="flex flex-col justify-between items-center mt-5">
        <div className="w-full">
          <div className="flex items-center gap-3 p-3 border-b-2">
            <i className="ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-base text-gray-600">
                {props.ride?.pickup}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 border-b-2">
            <i className="ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-base text-gray-600">
                {props.ride?.destination}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">{props.ride?.fare}</h3>
              <p className="text-base text-gray-600">Cash cash</p>
            </div>
          </div>
        </div>
        <div className="flex justify-around w-full">
          <Link
            to="/captain-riding"
            className="w-2/5 bg-green-600 text-white font-semibold p-2 rounded-lg mt-5 flex justify-center"
          >
            Accept
          </Link>
          <button
            onClick={() => {props.setRidePopupPanel(false)}}
            className="w-2/5 bg-gray-300 text-white font-semibold p-2 rounded-lg mt-5"
          >
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
}

export default RidePopUp