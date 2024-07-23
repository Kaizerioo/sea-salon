import React, { useContext } from 'react'
import { ToggleComponent } from '../context/ToggleComponent'

export const LoginForm = () => {
    const {showRegister, setShowRegister} = useContext(ToggleComponent);
    const {showLogin, setShowLogin} = useContext(ToggleComponent);
    if(!showLogin){
        return null;
    }
  return (
    <div className='fixed flex flex-col items-center z-50 bg-[#ffffff] bg-opacity-75 backdrop-blur-md border border-[#202020] rounded-2xl my-52 mx-[37.5%] px-4'>
        <h1 className='p-5 text-5xl text-[#202020] unna-bold'>
            Login
        </h1>
        <div className='flex flex-col'>
            <input type="text" placeholder='Email' className='my-2 py-2 bg-[#ffffff] border border-[#202020] rounded-lg px-4 w-96'/>
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
                <button className='underline pl-1 pb-6' onClick={()=> {setShowRegister(!showRegister), setShowLogin(!showLogin)}}>Register here</button>
            </sub>
        </div>
        <button className="absolute top-4 right-4 text-gray-800" onClick={()=> {setShowLogin(false)}}>
          &times;
        </button>
    </div>
  )
}
