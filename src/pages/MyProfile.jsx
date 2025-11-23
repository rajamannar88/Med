import React, { use, useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
  const[userData,setUserData]=useState({
    name:"Edward Vincent",
    image:assets.profile_pic,
    email:"demo@gmail.com",
    phone:'7339553581',
    address:{
      line1:"3/580-b,aathisivan nagar,vilachery",
      line2:"madurai,tamilnadu"
    },
    gender:"Male",
    dob:'2005-02-13'
  })
  const[isEdit,setIsEdit]=useState(false)
  return (
    <div>
      
      <img src={userData.image} alt="" />
      {
        isEdit 
        ? <input type="text" value={userData.name} onChange={e => setUserData(prev => ({...prev,name:e.target.value}))} /> 
        : <p>{userData.name}</p>
      }
      <hr />

      <div>
        <p>CONTACT INFORMATION</p>
        <div>
          <p>Email id:</p>
          <p>{userData.email}</p>
          <p>phone:</p>
             {
        isEdit 
        ? <input type="text" value={userData.phone} onChange={e => setUserData(prev => ({...prev,phone:e.target.value}))} /> 
        : <p>{userData.phone}</p>

      }
      <p>Address:</p>
      {
        isEdit
        ? <p>
          <input onChange={(e)=> setUserData(prev => ({...prev,address:{...prev.address,line1:e.target.value}}))} type="text" />
          <br />
          <input type="text" />
        </p>
        : <p>
          {userData.address.line1}
          <br />
          {userData.address.line2}
        </p>
      }
        </div>
      </div>


    </div>
  )
}

export default MyProfile
