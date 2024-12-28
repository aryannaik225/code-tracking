import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: 'Edward Vincent',
    image: assets.profile_pic,
    email: 'richardjameswap@gmail.com',
    phone: '+1 123 456 7890',
    address: {
      line1: "57th Cross, Richmond ",
      line2: "Circle, Church Road, London"
    },
    gender: 'Male',
    dob: '2000-01-20',
  })

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>

      <img className='w-36 rounded' src={userData.image} alt="" />

      {/* huge qna below, lol github copilot answers well */}
      {
        isEdit
          ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type="text" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} /> // ...prev is used to copy all the previous values of the object. therefore the whole {...prev, name:e.target.value} basically means that we are copying all the previous values of the object and then updating the name property with the new value. what are we going to do with the new value? we are going to set it to the value of the input field. and why do we copy the previous values? because we don't want to lose the previous values. we just want to update the name property. why dont we want to lose the previous values? because we are updating the name property only. we are not updating the other properties. so we don't want to lose the other properties. we just want to update the name property.
          : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      }

      <hr className='bg-zinc-400 h-[1px] border-none' /> {/* horizontal line */}
      <div>
        <p className='uppercase text-neutral-500 underline mt-3'>Contact Information</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium '>Email id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium '>Phone:</p>
          {
            isEdit
              ? <input className='bg-gray-100 max-w-52' type="text" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
              : <p className='text-blue-400'>{userData.phone}</p>
          }
          <p className='font-medium '>Address:</p>
          {
            isEdit
              ? <p>
                <input className='bg-gray-50' onChange={e => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} type="text" /> {/* nested spread operator */}
                <br />
                <input className='bg-gray-50' onChange={e => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} type="text" />
              </p>
              : <p className='text-gray-500'>
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
          }
        </div>
      </div>
      <div>
        <p className='uppercase text-neutral-500 underline mt-3'>Basic Information</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium '>Gender:</p>
          {
            isEdit
              ? <select className='max-w-20 bg-gray-100' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              : <p className='text-gray-400'>{userData.gender}</p>
          }
          <p className='font-medium '>Birthday:</p>
          {
            isEdit 
            ? <input className='max-w-28 bg-gray-100' type='date' onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob}/>
            : <p className='text-gray-400'>{userData.dob}</p>
          }
        </div>
      </div>

      <div className='mt-10'>
        {
          isEdit
          ? <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={()=>setIsEdit(false)}>Save Information</button>
          : <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={()=>setIsEdit(true)}>Edit</button>
        }
      </div>

    </div>
  )
}

export default MyProfile