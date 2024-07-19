import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";

export default function OpenAi() {
  const { business, setBusiness, place, setPlace,comp,setComp} = useContext(UserContext);

  const handleClick = async () => {
    try {
      // Send the data to the backend
      const response = await axios.post(process.env.REACT_APP_BACKENDURI + "/api/competitors", {
        business,
        place,
      });



      // Handle the response as needed
      console.log(response?.data?.data);
      setComp(response?.data?.data)
    } catch (error) {
      console.error('Error sending data to the backend', error);
    }
  };

  return (
    <div className=" w-full flex flex-col justify-center items-center mb-10">
      <div className="w-full flex justify-end">
        <div className="grad3 w-full h-[400px] blur-[220px] absolute flex justify-end items-end"></div>
      </div>
      <div className="w-[90%] p-2 box-background">
        <div className="p-5 flex flex-col justify-center">
          <h5 className="text-center mb-10 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Your Business Solutions.
          </h5>
          <label className="flex flex-col text-white font-semibold sm:text-xl gap-2">
            Enter Your Business:
            <input
              type="text"
              placeholder="Your Business ex:Hospital, TShirt Brand, "
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
              className="text-white h-[40px] border-white sm:w-[60%] bg-[#070708] rounded-full px-4"
            />
          </label>
          <label className="flex flex-col mt-10 text-white font-semibold sm:text-xl gap-2">
            Enter Your Place:
            <input
              type="text"
              placeholder="Your location...."
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              className="text-white h-[40px] border-white sm:w-[60%] bg-[#070708] rounded-full px-4"
            />
            {console.log(place, business)}
          </label>
          <div className="flex justify-center mt-5">
            <button className="rounded-xl inline-flex items-center px-3 py-2 font-semibold text-center text-white bg-blue-700 hover:bg-blue-800" onClick={handleClick}> Submit!</button>
          </div>
        </div>
      </div>
    </div>
  );
}
