import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";

export default function Summarize() {

    const [isOpen, setIsOpen] = useState(false);

  const { scrapping, summary, setSummary } = useContext(UserContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const text =
          "In the bustling cityscape, where skyscrapers touch the clouds and neon lights paint the night, a sense of constant movement engulfs the urban dwellers. Amidst the chaos, a quaint café emerges as an oasis. Its walls adorned with local art, the aroma of freshly ground coffee permeates the air. Patrons engage in animated conversations, exchanging stories and laughter. The barista, a wizard of the espresso machine, crafts intricate latte art. Outside, a gentle rain begins to fall, creating a soothing melody. In this haven, time seems to slow, allowing a respite from the relentless pace of city life.";
        const response = await axios.post(
          process.env.REACT_APP_BACKENDURI + "/api/summary",
          {
            scrapping,
          }
        );
        console.log("effect called");

        // Handle the response data
        console.log(response.data);
        setSummary(response.data);
      } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [scrapping]);

  return (
    <div className=" w-full flex flex-col justify-center items-center mb-10 ">
      <div class="w-[90%] p-2  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="p-5 flex flex-col justify-center items-center">
            <h5 class="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Site Summary
            </h5>
          <p class={`w-[90%] text-justify mb-3 font-normal text-gray-700 dark:text-gray-400 ${isOpen ? "line-clamp-none" : "line-clamp-5"}`}>
            {summary?.summary}
          </p>
          <div className="flex justify-center">
            <button
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
