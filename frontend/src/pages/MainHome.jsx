import { gsap } from "gsap";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedVehicle from "../components/ConfirmedVehicle";
import WaitForDriver from "../components/WaitForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const MainHome = () => {
  const [show, setShow] = useState(false);
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const panelRef = useRef(null);
  const arrowRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmedVehicle, setConfirmedVehicle] = useState(false);
  const [wait, setWait] = useState(false);
  const [waiting, setWaiting] = useState(false);

  const vehiclePanelRef = useRef(null);
  const confirmedVehicleRef = useRef(null);
  const waitRef = useRef(null);
  const waitingRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (show) {
      gsap.to(panelRef.current, {
        duration: 1,
        ease: "power1.inOut",
        height: "70%",
        padding: 20,
        opacity: 1,
      });
      gsap.to(arrowRef.current, {
        duration: 1,
        ease: "power1.inOut",
        rotate: 180,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        duration: 1,
        ease: "power1.inOut",
        padding: 0,
        opacity: 0,
      });
      gsap.to(arrowRef.current, {
        duration: 1,
        ease: "power1.inOut",
        rotate: 0,
      });
    }
  }, [show]);

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        duration: 1,
        ease: "power1.inOut",
        transform: 'translateY(0)'
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        duration: 1,
        ease: "power1.inOut",
        transform: 'translateY(100%)'
      });
    }
  }, [vehiclePanel])

  useGSAP(() => {
    if (confirmedVehicle) {
      gsap.to(confirmedVehicleRef.current, {
        duration: 1,
        ease: "power1.inOut",
        transform: 'translateY(0)'
      });
    } else {
      gsap.to(confirmedVehicleRef.current, {
        duration: 1,
        ease: "power1.inOut",
        transform: 'translateY(100%)'
      });
    }
  }, [confirmedVehicle])

  useGSAP(() => {
    if (wait) {
      gsap.to(waitRef.current, {
        duration: 1,
        ease: "power1.inOut",
        transform: 'translateY(0)'
      });
    } else {
      gsap.to(waitRef.current, {
        duration: 1,
        ease: "power1.inOut",
        transform: 'translateY(100%)'
      });
    }
  }, [wait])

  useGSAP(() => {
    if (waiting) {
      gsap.to(waitingRef.current, {
        duration: 1,
        ease: "power1.inOut",
        transform: 'translateY(0)'
      });
    } else {
      gsap.to(waitingRef.current, {
        duration: 1,
        ease: "power1.inOut",
        transform: 'translateY(100%)'
      });
    }
  }, [waiting])

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-28 absolute left-5"
        src="https://icons-for-free.com/iff/png/512/uber-1324440247504689178.png"
        alt=""
      />

      <div 
      className="h-screen w-screen">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1730317195704-c4666cc830a6?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFwfGVufDB8fDB8fHww"
          alt=""
        />
      </div>

      <div 
      className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] bg-white w-full px-5 relative">
          <h5
            ref={arrowRef}
            className="w-full flex justify-center"
            onClick={() => {
              setShow(!show);
            }}
          >
            <i className="ri-arrow-up-wide-fill text-2xl"></i>
          </h5>
          <h4 className="text-3xl font-semibold">Find a trip</h4>
          <form
            onSubmit={submitHandler}
            onClick={() => {
              setShow(true);
            }}
          >
            <input
              required
              className="bg-[#eeeeee] my-4 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="text"
              placeholder="Add a pickup location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
            <input
              required
              className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="text"
              placeholder="Add a destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </form>
        </div>

        <div ref={panelRef} className="h-[0%] bg-white">
          <LocationSearchPanel
            setShow={setShow}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>

      <div
        ref={vehiclePanelRef}
        className="bg-white fixed w-full z-10 bottom-0 px-2 py-5 translate-y-full"
      >
        <VehiclePanel setVehiclePanel={setVehiclePanel} setConfirmedVehicle={setConfirmedVehicle}/>
      </div>

      <div
        ref={confirmedVehicleRef}
        className="bg-white fixed w-full z-10 bottom-0 px-2 py-5 translate-y-full"
      >
        <ConfirmedVehicle setConfirmedVehicle={setConfirmedVehicle} setVehiclePanel={setVehiclePanel}
        setWait={setWait}
        />
      </div>

      <div
        ref={waitRef}
        className="bg-white fixed w-full z-10 bottom-0 px-2 py-5 translate-y-full"
      >
        <WaitForDriver setConfirmedVehicle={setConfirmedVehicle} setWait={setWait}/>
      </div>

      <div
        ref={waitingRef}
        className="bg-white fixed w-full z-10 bottom-0 px-2 py-5 translate-y-full"
      >
        <WaitingForDriver setWaiting={setWaiting} setConfirmedVehicle={setConfirmedVehicle}/>
      </div>
    </div>
  );
};

export default MainHome;
