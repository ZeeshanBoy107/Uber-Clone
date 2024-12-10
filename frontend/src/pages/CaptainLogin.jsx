import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/captainContext';

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { setCaptain } = useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      email: email,
      password: password,
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData);

    if(response.status === 200) {
      setCaptain(response.data.captain);
      localStorage.setItem("token", response.data.token);
      navigate("/captain-home");
    } else {
      alert("Captain login failed");
    }



    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <div className="h-screen flex flex-col justify-between">
        <div className='p-5'>
          <img
            className="w-28"
            src="https://www.svgrepo.com/show/505031/uber-driver.svg"
            alt=""
          />
          <form
            className=""
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h3 className="text-lg font-medium mb-2 ">What's your email?</h3>
            <input
              required
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h3 className="text-lg font-medium">Enter password</h3>
            <input
              required
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="bg-black text-white rounded px-4 py-2 border w-full">
              Login
            </button>
          </form>
          <p className="mx-5 text-center">
            Join a fleet?
            <Link to="/captain-signup" className="text-blue-600">
              Register as a Captain
            </Link>
          </p>
        </div>

        <div className="p-5">
          <Link
            to="/login"
            className="bg-[#d5622d] text-white mb-4 rounded px-4 py-2 border w-full flex justify-center items-center"
          >
            Sign in as a User
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CaptainLogin