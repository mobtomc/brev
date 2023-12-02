import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";


export default function Sentiment() {
    const { summary, setSentiment,sentiment } = useContext(UserContext);
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
  return (
    <div>
      {/* <DoughnutChart /> */}
      hello buddy   
      {console.log("sentiment")}
      {/* GIves sentiment overall */}
      {console.log(sentiment?.documents[0]?.sentiment)}

      {console.log(sentiment?.documents[0]?.confidenceScores?.positive)}
      {console.log(sentiment?.documents[0]?.confidenceScores?.negative)}
      {console.log(sentiment?.documents[0]?.confidenceScores?.neutral)}

    <h1>{sentiment?.documents[0]?.sentiment}</h1>
    </div>
  )
}
