import { gsap } from 'gsap';
import { useRef, useState } from 'react';
import React from 'react'
import { Link } from 'react-router-dom';
import FinishRide from '../components/FinishRide';
import { useGSAP } from '@gsap/react';

const CaptainRiding = () => {

  const [finishRidePanel, setFinishRidePanel] = useState(false)
  const finishRidePopupRef = useRef(null);

  useGSAP(() => {
    if (finishRidePanel) {
      gsap.to(finishRidePopupRef.current, {
        duration: 1,
        ease: "power1.inOut",
        transform: "translateY(0)",
      });
    } else {
      gsap.to(finishRidePopupRef.current, {
        duration: 1,
        ease: "power1.inOut",
        transform: "translateY(100%)",
      });
    }
  }, [finishRidePanel])

  return (
    <div>
      <div className="h-screen relative overflow-hidden">
        <div className="fixed p-3 top-0 flex items-center justify-between w-screen">
          <img
            className="w-20"
            src="https://icons-for-free.com/iff/png/512/uber-1324440247504689178.png"
            alt=""
          />
          <Link to="/captain-login">
            <i className="ri-logout-box-r-line text-3xl"></i>
          </Link>
        </div>

        <div className="h-screen w-screen">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1730317195704-c4666cc830a6?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFwfGVufDB8fDB8fHww"
            alt=""
          />
        </div>
      </div>

      <div
        onClick={() => {
          setFinishRidePanel(true);
        }}
        className="h-1/5 p-8 z-10 fixed bottom-0 bg-yellow-500 w-screen"
      >
        <div className="flex items-center justify-around">
          <h4 className="text-xl font-semibold">4 KM away</h4>
          <button className="w-2/5 bg-green-500 text-white font-semibold p-2 rounded-lg">
            Complete Ride
          </button>
        </div>
      </div>

      <div
        ref={finishRidePopupRef}
        className="p-8 z-10 fixed bottom-0 bg-white w-screen translate-y-full"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel}/>
      </div>
    </div>
  );
}

export default CaptainRiding