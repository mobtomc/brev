import React, { useContext ,useEffect} from 'react'
import UserContext from '../context/UserContext'
import axios from 'axios';

export default function Summarize() {
    const { scrapping ,summary,setSummary} = useContext(UserContext);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const text="In the bustling cityscape, where skyscrapers touch the clouds and neon lights paint the night, a sense of constant movement engulfs the urban dwellers. Amidst the chaos, a quaint café emerges as an oasis. Its walls adorned with local art, the aroma of freshly ground coffee permeates the air. Patrons engage in animated conversations, exchanging stories and laughter. The barista, a wizard of the espresso machine, crafts intricate latte art. Outside, a gentle rain begins to fall, creating a soothing melody. In this haven, time seems to slow, allowing a respite from the relentless pace of city life."
                const response = await axios.post(process.env.REACT_APP_BACKENDURI+"/api/summary", {
                    scrapping
                });
                console.log("effect called")

                // Handle the response data
                console.log(response.data);
                setSummary(response.data)
            } catch (error) {
                // Handle errors
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [scrapping]);

    return (
        <div>
            {console.log("scrapping?.summary")}
            {console.log(summary?.summary)}
            {summary?.summary}
        </div>
    )
}
