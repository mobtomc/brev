import React from 'react'
import UserContext from './UserContext'

const UserContextProvider=({children})=>{
    const [scrapping,setScrapping]=React.useState(null)
    const [summary,setSummary]=React.useState(null)
    return(
        <UserContext.Provider value={{scrapping,setScrapping,summary,setSummary}}>
            {children}
        </UserContext.Provider>
    )
}


export default UserContextProvider;
