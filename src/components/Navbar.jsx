import { Link } from "react-scroll"
import logo from "../assets/logo.png"

export const Navbar = () => {
  return (
    <>
      <nav className="bg-gradient-to-b from-black to-transparent w-full flex flex-row justify-between items-center fixed z-10">
        <div>
          <button className="m-4 mx-10 text-[#ffffff] mb-16">
            <Link to="home" smooth={true} duration={500} className="flex flex-row items-center gap-4 text-2xl hover:text-[#B6BBC4]">
            <img src={logo} className="w-12 hover:opacity-50"/>
            SEA SALON
            </Link>
          </button>
        </div>
        <div className="gap-20 flex flex-row items-center m-4 mb-16">
          <button className=" text-white hover:text-[#B6BBC4]  p-2 px-8 ">
            <Link to="home" smooth={true} duration={500}>
            HOME
            </Link>

          </button>
          <button className=" text-white hover:text-[#B6BBC4] p-2 px-8 ">
            <Link to="services" smooth={true} duration={500}>
            SERVICES
            </Link>
          </button>
          <button className=" text-white hover:text-[#B6BBC4] p-2 px-8 ">
            <Link to="reviews" smooth={true} duration={500}>
            REVIEW
            </Link>
            
          </button>
          <button className=" text-white hover:text-[#B6BBC4] p-2 px-8 ">
            LOGIN INFO
          </button>
        </div>
        
      </nav>
    </>
  )
}
