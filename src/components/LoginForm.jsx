import React from 'react'

export const LoginForm = () => {
  return (
    <div className='fixed inset-0 flex flex-col items-center z-50 bg-[#ffffff] bg-opacity-75 backdrop-blur-md border border-[#ffffff] rounded-2xl my-72 mx-[70vh]'>
        <h1 className='p-5 text-5xl text-[#202020] unna-bold'>
            Login
        </h1>
        <div className='flex flex-col'>
            <input type="text" placeholder='Email/Phone Number' className='my-2 py-2 bg-[#ffffff] border border-[#202020] rounded-lg px-4 w-96'/>
            <input type="password" placeholder='Password' className='my-2 py-2 bg-[#ffffff] border border-[#202020] rounded-lg px-4 w-96'/>
        </div>
        <div className='mt-4'>
            <button className='border-[#202020] bg-[#202020] text-white px-20 py-2 rounded-md font-semibold'>
                LOGIN
            </button>
        </div>
        <div>
            
            <sub>
                don't have account? 
                <button className='underline pl-1'>Register here</button>
            </sub>
        </div>
    </div>
  )
}
