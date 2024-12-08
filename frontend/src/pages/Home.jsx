import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover h-screen flex flex-col justify-between w-full pt-4">
        <img
          className="w-28"
          src="https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoicG9zdG1hdGVzXC9hY2NvdW50c1wvODRcLzQwMDA1MTRcL3Byb2plY3RzXC8yN1wvYXNzZXRzXC9lZFwvNTUwOVwvNmNmOGVmM2YzMjFkMTA3YThmZGVjNjY1NjJlMmVmMzctMTYyMDM3Nzc0OC5haSJ9:postmates:9KZWqmYNXpeGs6pQy4UCsx5EL3qq29lhFS6e4ZVfQrs?width=2400"
          alt=""
        />
        <div className="bg-white py-4 px-4 pb-7">
          <h2 className="text-3xl font-bold">Get started with Uber</h2>
          <Link to="/login" className="flex items-center justify-center w-full bg-black text-white py-3 mt-5 rounded">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home