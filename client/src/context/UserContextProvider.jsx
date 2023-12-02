import React from 'react'
import UserContext from './UserContext'

const UserContextProvider=({children})=>{
    const [scrapping,setScrapping]=React.useState(null)
    return(
        <UserContext.Provider value={{scrapping,setScrapping}}>
            {children}
        </UserContext.Provider>
    )
}


export default UserContextProvider;
