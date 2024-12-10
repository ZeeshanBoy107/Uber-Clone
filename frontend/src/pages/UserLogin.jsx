import { useContext, useState } from 'react';
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";


const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const {user, setUser} = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userData
    );

    if(response.status === 200){
      setUser(response.data.user);
      localStorage.setItem("token", response.data.token);
      navigate("/home");
    }else{
      alert("Something went wrong");
    }
     
    setEmail("");
    setPassword("");
  }
  return (
    <div>
      <div className="h-screen flex flex-col justify-between">
        <div className='p-5'>
          <img
            className="w-28"
            src="https://icons-for-free.com/iff/png/512/uber-1324440247504689178.png"
            alt=""
          />
          <form
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
            New here?
            <Link to="/signup" className="text-blue-600">
              Create new Account
            </Link>
          </p>
        </div>

        <div className="p-5">
          <Link
            to="/captain-login"
            className="bg-[#10b461] text-white mb-4 rounded px-4 py-2 border w-full flex justify-center items-center"
          >
            Sign in as a Captain
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
