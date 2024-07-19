import React, { useContext, useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";
import UserContext from "../context/UserContext";
import axios from "axios";

export default function Sentiment() {
  const chartRef = useRef(null);
  const { summary, setSentiment, sentiment } = useContext(UserContext);

  useEffect(() => {
    // Check if a chart instance already exists and destroy it before creating a new one
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById("myChart").getContext("2d");
    chartRef.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: chartData.labels,
        datasets: [
          {
            label: "Language Popularity",
            data: chartData.data,
            
          },
        ],
      },
      options: {
        borderWidth: 2,
        borderRadius: 20,
        hoverBorderWidth: 10,
        plugins: {
          legend: {
            display: true,
          },
        },
      },
    });

    return () => {
      chartRef.current.destroy();
    };
  }, [sentiment]); 


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          process.env.REACT_APP_BACKENDURI + "/api/sentiment",
          {
            summary,
          }
        );
        console.log("effect called");

        // Handle the response data
        console.log("response?.data");
        setSentiment(response?.data);
      } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [summary]);

  const chartData = {
    labels: ["Positive", "Negative", "Neutral"],
    data: [sentiment?.documents[0]?.confidenceScores?.positive*100 , sentiment?.documents[0]?.confidenceScores?.negative*100 , sentiment?.documents[0]?.confidenceScores?.neutral*100 ],
  };

  return (
    <div className="px-5 pb-10 relative z-[5]">
      <div className="flex flex-col justify-center gap-4">
        <h1 className="text-center text-4xl font-bold text-blue-900 sm:text-white">
          Sentiment Analysis
        </h1>
        <p className="text-center text-gray-800 font-semibold sm:text-2xl">
          Overall Sentiment of the website is{" "}
          <span className=" text-xl sm:text-[2rem] font-bold">
            {sentiment?.documents[0]?.sentiment}
          </span>
        </p>
        <div className="flex justify-center items-center">
          <div className="font-rubik text-navy sm:w-[80%]">
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-12 mx-auto w-[90%] bg-gray-800 shadow-lg rounded-2xl p-8 transition-transform duration-400 ease-in-out hover:scale-102">
              <div className="chart relative w-48 sm:w-96 h-48 sm:h-96">
                <canvas id="myChart" className=""></canvas>
              </div>
              <div className="details flex justify-center items-center">
                <ul>
                  {chartData.labels.map((label, i) => (
                    <li key={label} className="text-uppercase text-base my-3 text-white">
                      {label}:{" "}
                      <span className="font-bold text-red-600">
                        {chartData.data[i]}%
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
