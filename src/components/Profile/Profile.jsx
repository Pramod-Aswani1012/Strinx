import React from 'react'
import NavBarLeft from "../../components/NavBarLeft/NavBarLeft"
import Main from '../Main/Main'

const Profile = ()=>{
    return(
        <>
            <div className='flex'>
                <NavBarLeft />
                <Main />
            </div>
        </>
    )
}

export default Profile