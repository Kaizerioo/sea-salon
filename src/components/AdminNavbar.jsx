import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import loginIcon from "../assets/login.png"
import { useContext } from "react";
import { ToggleComponent } from "../context/ToggleComponent";
import { RegisForm } from "./RegisForm";

export const AdminNavbar = () => {
    const {showRegister, setShowRegister} = useContext(ToggleComponent);
    const {showAdmin, setShowAdmin} = useContext(ToggleComponent);
    const {showLogged, setShowLogged} = useContext(ToggleComponent);
  return (
    <>
    <nav className="bg-gradient-to-b from-[#050505] to-transparent w-[100%] flex flex-row justify-between items-center fixed z-10">
        <div className="hover:opacity-50">
          <button className="m-8 mx-10 text-[#ffffff] mb-16">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="flex flex-row items-center gap-4 text-2xl hover:text-[#B6BBC4]"
            >
              <img src={logo} className="w-12  unna-bold" />
              SEA SALON
            </Link>
          </button>
        </div>
        <div className="gap-20 flex flex-row items-center m-4 mb-16">
          <button className=" text-white hover:text-[#B6BBC4]  p-2 px-8 ">
            <Link to="home" smooth={true} duration={500} >
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
          <button className="text-white hover:text-[#B6BBC4] p-2 px-8">
            ADMIN
          </button>
          <button className=" p-2 px-8">
            <img src={loginIcon} className="w-8 bg-white rounded-full hover:bg-[#B6BBC4]" onClick={()=> {setShowLogged(!showLogged)}}/>
          </button>
        </div>
      </nav>
    </>
  )
}
