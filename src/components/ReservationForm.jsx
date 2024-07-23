import React, { useContext } from 'react'
import { ToggleComponent } from '../context/ToggleComponent'

export const ReservationForm = () => {
    const {showReservation, setShowReservation} = useContext(ToggleComponent);
    if(!showReservation){
        return null;
    }
  return (
    <div>
            <div className='fixed flex flex-col items-center z-50 bg-[#ffffff] bg-opacity-75 backdrop-blur-md border border-[#202020] rounded-2xl mx-[37.5%] my-[20vh] px-4'>
                <h1 className='p-5 text-5xl text-[#202020] unna-bold'>
                    Reservation
                </h1>
                <div className='flex flex-col'>
                    <input type="text" placeholder='Name' className='my-2 py-2 bg-[#ffffff] border border-[#202020] rounded-lg px-4 w-96'/>
                    <input type="text" placeholder='Phone Number' className='my-2 py-2 bg-[#ffffff] border border-[#202020] rounded-lg px-4 w-96'/>
                    <select className='my-2 py-2 bg-[#ffffff] border border-[#202020] rounded-lg px-4 w-96'>
                        <option selected="Select Branch" disabled="true">Select Branch</option>
                    </select>
                    <select className='my-2 py-2 bg-[#ffffff] border border-[#202020] rounded-lg px-4 w-96'>
                    <option selected="Services" disabled="true">Services</option>
                    <option value="Haircut">Haircut</option>
                    <option value="Styling">Styling</option>
                    <option value="Manicure">Manicure</option>
                    <option value="Pedicure">Pedicure</option>
                    <option value="Face Treatments">Face Treatments</option>
                  </select>
                  <input type="datetime-local" className='my-2 py-2 bg-[#ffffff] border border-[#202020] rounded-lg px-4 w-96'/>
                  <button className='border-[#202020] bg-[#202020] text-white px-20 py-2 rounded-md font-semibold mt-4 mb-4'>
                        Submit
                    </button>
                </div>
                
                <button className="absolute top-4 right-4 text-gray-800" onClick={()=>{setShowReservation(false)}}>
                &times;
                </button>
            </div>

            </div>
  )
}
