import React from 'react'
import UserContext from './UserContext'

const UserContextProvider=({children})=>{
    const [scrapping,setScrapping]=React.useState(null)
    const [summary,setSummary]=React.useState(null)
    const [sentiment,setSentiment]=React.useState(null)
    return(
        <UserContext.Provider value={{scrapping,setScrapping,summary,setSummary,sentiment,setSentiment}}>
            {children}
        </UserContext.Provider>
    )
}


export default UserContextProvider;
