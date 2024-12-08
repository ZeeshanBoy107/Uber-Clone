import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainSignup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    };

    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <div className="h-screen flex flex-col justify-between">
        <div className="p-5">
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
            <h3 className="text-lg font-medium mb-2">What's our Captain's name?</h3>

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

            <h3 className="text-lg font-medium mb-2">What's our Captain's email?</h3>
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
            <button className="bg-black text-white rounded px-4 py-2 border w-full">
              Login
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