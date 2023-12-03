import React,{useContext} from 'react'
import UserContext from "../context/UserContext";

export default function Cards() {
    const {comp,setComp} = useContext(UserContext);
  return (
    <div>
      {comp?.map((item, index) => (
        <div key={index}>
        <img src={item?.photos_sample[0]?.photo_url} alt="" />
        {console.log(item?.photos_sample[0].photo_url)}
          <h1>{item.name}</h1>
        </div>
      ))}
    </div>
  )
}
