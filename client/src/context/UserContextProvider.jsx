import React from 'react'
import UserContext from './UserContext'

const UserContextProvider=({children})=>{
    const [scrapping,setScrapping]=React.useState(null)
    const [summary,setSummary]=React.useState(null)
    const [sentiment,setSentiment]=React.useState(null)
    const [business,setBusiness]=React.useState(null)
    const [place,setPlace]=React.useState(null)
    const [comp,setComp]=React.useState(null)
    return(
        <UserContext.Provider value={{scrapping,setScrapping,summary,setSummary,sentiment,setSentiment,business,setBusiness,place,setPlace,comp,setComp}}>
            {children}
        </UserContext.Provider>
    )
}


export default UserContextProvider;
