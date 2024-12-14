import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className="h-screen">
      <Link to="/home" className='fixed h-10 w-10 bg-white flex items-center justify-center rounded-full right-2 top-2'>
        <i className='text-lg font-medium ri-home-5-line'></i>
      </Link>
      <div className="h-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1730317195704-c4666cc830a6?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFwfGVufDB8fDB8fHww"
          alt=""
        />
      </div>
      <div className="h-1/2 p-5">
        <img
          className="h-24"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png"
          alt=""
        />
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
          <div className="flex items-center gap-3 p-3">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.20</h3>
              <p className="text-base text-gray-600">Cash cash</p>
            </div>
          </div>
        </div>
        <button
          className="w-full bg-green-600 text-white font-semibold p-2 rounded-lg mt-5"
        >
          Make Payment
        </button>
      </div>
    </div>
  );
}

export default Riding