import React, { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Cards() {
  const { comp, setComp } = useContext(UserContext);
  return (
    <div className="flex flex-col gap-8 justify-center items-center relative z-[5]">
      <h1 className="text-center text-3xl sm:text-5xl font-bold text-gradient1 mt-10 mb-4">Your Competitions Surrounding You!</h1>
      <div className="flex flex-wrap justify-center gap-6 mb-10 w-[90%] sm:w-full">
        {comp?.map((item, index) => (
          <div
            key={index}
            className="max-w-sm flex flex-col gap-3 box-background pb-4 text-[0.75rem] sm:text-base "
          >
            <img
              src={item?.photos_sample[0]?.photo_url}
              className="w-full h-[200px] rounded-t-2xl"
              alt="No image available for this site due toh copyright issues!! Visit the site instead."
            />
            {console.log(item?.photos_sample[0].photo_url)}
            <p className="font-semibold text-black px-3">
              Name: {item?.name}
            </p>
            <p className="font-semibold text-black px-3">
              Phone: {item?.phone_number}
            </p>
            <p className="text-justify font-semibold text-black px-3">
              Address: {item?.full_address}
            </p>
            <div className="flex justify-center mt-4 gap-4">
              <a
                target="_blank"
                href={item?.place_link}
                className="w-[40] inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <button>Location</button>
              </a>
              <a
                target="_blank"
                href={item?.website}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <button>Visit Website</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
