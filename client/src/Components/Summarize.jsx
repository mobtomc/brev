import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";

export default function Summarize() {

    const [isOpen, setIsOpen] = useState(false);

  const { scrapping, summary, setSummary } = useContext(UserContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          process.env.REACT_APP_BACKENDURI + "/api/summary",
          {
            scrapping,
          }
        );
        console.log("effect called");

        // Handle the response data
        console.log(response?.data?.summary);
        setSummary(response?.data?.summary);
      } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [scrapping]);

  return (
    <div className=" w-full flex flex-col justify-center items-center mb-10">
      <div className="w-[90%] p-2  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="p-5 flex flex-col justify-center items-center">
            <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Site Summary
            </h5>
          <p className={`sm:w-[90%] text-[0.75rem] sm:text-base text-justify mb-3 font-normal text-gray-700 dark:text-gray-400 ${isOpen ? "line-clamp-none" : "line-clamp-5"}`}>
            {summary}
          </p>
          <div className="flex justify-center">
            <button
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={()=>setIsOpen(!isOpen)}
            >
              {isOpen ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
      {/* {console.log("scrapping?.summary")} */}
      {/* {console.log(summary?.summary)} */}
    </div>
  );
}