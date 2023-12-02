import React, { useState } from "react";
import axios from "axios";

export default function OpenAi() {

    const [business,setBusiness] = useState('');
    const [profession,setProfession] = useState('');

    const handleClick = async () => {
        try{
            // Send the data to the backend
            const response = await axios.post("https://yourbackend-url/analyze",{
                business,
                profession,
            });

            // Handle the response as needed
            console.log(response.data);
        }catch (error) {
            console.error('Error sending data to the backend', error);
        }
    };

  return (
    <div className=" w-full flex flex-col justify-center items-center mb-10">
        <div className="w-full flex justify-end">
            <div className="grad3 w-full h-[400px] blur-[80px] absolute flex justify-end items-end"></div>
          </div>
      <div className="w-[90%] p-2 box-background">
        <div className="p-5 flex flex-col justify-center">
          <h5 className="text-center mb-10 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Your Business Solutions
          </h5>
          <label className="flex flex-col text-white font-semibold text-xl gap-2">
            Enter Your Business:
            <input
              type="text"
              placeholder="Your Business...."
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
              className="text-white h-[40px] border-white w-[60%] bg-[#070708] rounded-full px-4"
            />
          </label>
          <label className="flex flex-col mt-10 text-white font-semibold text-xl gap-2">
            Enter Your Profession:
            <input
              type="text"
              placeholder="Your Profession...."
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              className="text-white h-[40px] border-white w-[60%] bg-[#070708] rounded-full px-4"
            />
          </label>
          <div className="flex justify-center mt-5">
            <button className="rounded-xl inline-flex items-center px-3 py-2 font-semibold text-center text-white bg-blue-700 hover:bg-blue-800" onClick={handleClick}> Submit!</button>
          </div>
        </div>
      </div>
      {/* {console.log("scrapping?.summary")} */}
      {/* {console.log(summary?.summary)} */}
    </div>
  );
}
