import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const ridePopupRef = useRef(null);

  useGSAP(() => {
    if (ridePopupPanel) {
      gsap.to(ridePopupRef.current, {
        duration: 1,
        ease: "power1.inOut",
        transform: "translateY(0)",
      });
    } else {
      gsap.to(ridePopupRef.current, {
        duration: 1,
        ease: "power1.inOut",
        transform: "translateY(100%)",
      });
    }
  }, [ridePopupPanel]);

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

      <div className="h-1/3 p-8 z-10 fixed bottom-0 bg-white w-screen">
        <CaptainDetails />
      </div>
    
      <div
        ref={ridePopupRef}
        className="p-8 z-10 fixed bottom-0 w-screen bg-white translate-y-full"
      >
        <RidePopUp setRidePopupPanel={setRidePopupPanel}/>
      </div>
    </div>
  );
};

export default CaptainHome;
