import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CaptainSignup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [color, setColor] = useState("");
  const [plate, setPlate] = useState("");
  const [capacity, setCapacity] = useState("");
  const [type, setType] = useState("");

  const navigate = useNavigate();

  const submitHandler = async(e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
      vehicle: {
        color: color,
        plate: plate,
        capacity: capacity,
        vehicleType: type,
      },
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

    if (response.status === 201) {
      localStorage.setItem("captain", response.data.token);
      navigate("/captain-login");
    } else {
      alert("Captain registration failed");
    }


    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setColor("");
    setPlate("");
    setCapacity("");
    setType("");
  };

  return (
    <div>
      <div className="h-screen flex flex-col justify-between">
        <div className="px-5">
          <img
            className="w-28"
            src="https://www.svgrepo.com/show/505031/uber-driver.svg"
            alt=""
          />
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h3 className="text-lg font-medium mb-2">
              What's our Captain's name?
            </h3>

            <div className="flex gap-3">
              <input
                type="text"
                required
                className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                placeholder="firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              <input
                type="text"
                required
                className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                placeholder="lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>

            <h3 className="text-lg font-medium mb-2">
              What's our Captain's email?
            </h3>
            <input
              required
              className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h3 className="text-lg font-medium mb-2">Enter password</h3>
            <input
              required
              className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <h3 className="text-lg font-medium mb-2">Vehicle's Information</h3>

            <div className="flex gap-4">
              <input
                type="text"
                required
                className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
                placeholder="Vehicle Color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
              <input
                type="text"
                required
                className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
                placeholder="Vehicle Plate"
                value={plate}
                onChange={(e) => setPlate(e.target.value)}
              />
            </div>
            <div className='flex gap-4 mb-2'>
              <input
                type="text"
                required
                className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
                placeholder="Vehicle Capacity"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
              />
              <select
                required
                className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="" disabled>
                  Vehicle Type
                </option>
                <option value="bike">Bike</option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
              </select>
            </div>

            <button className="bg-black text-white rounded px-4 py-2 border w-full">
              Create Captain Account
            </button>
          </form>
          <p className="mx-5 text-center mt-2">
            Already have an account?
            <Link to="/captain-login" className="text-blue-600">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CaptainSignup