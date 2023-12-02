import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

export default function Summarize() {
    const {scrapping}=useContext(UserContext);
  return (
    <div>
      {console.log(scrapping?.text?.fullText)}
      {scrapping?.text?.fullText}
    </div>
  )
}
