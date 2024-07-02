import React from 'react'

export const RegisForm = () => {
  return (
    <div className='fixed inset-0 flex flex-col items-center z-50 bg-black bg-opacity-50 backdrop-blur-md border border-black rounded-2xl my-52 mx-[70vh]'>
        <h1 className='p-5 text-5xl text-white'>
            Register
        </h1>
        <div className='flex flex-col'>
            <input type="text" placeholder='Full Name' className='my-2 py-1'/>
            <input type="email" placeholder='E-mail' className='my-2 py-1'/>
            <input type="text" placeholder='Phone Number' className='my-2 py-1'/>
            <input type="password" placeholder='Password' className='my-2 py-1'/>
            <input type="password" placeholder='Confirm Password' className='my-2 py-1'/>
        </div>
        <div>
            <sub>already have account?</sub>
        </div>
        <div>
            <button>Register</button>
        </div>
    </div>
  )
}
