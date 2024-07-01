import { Navbar } from "./components/Navbar";
import { Element, Link } from "react-scroll";
import backgroundImage from "./assets/background1.jpeg";
import haircut from "./assets/haircut.jpg";
import facial from "./assets/facial.jpg";
import pedi from "./assets/pedicure.jpg";
import { useState } from "react";

function App() {

  const backgroundStyle = {
    backgroundImage: `linear-gradient(to top, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 75%),url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "120vh",
  };

  const [star, setStar] = useState(0);
  return (
    <>
      <Navbar />
      <Element
        name="home"
        style={backgroundStyle}
        className="montserrat h-[150vh] text-[#ffffff]"
      >
        <div className="pt-72 left-text flex flex-col justify-center items-center text-9xl ">
          SEA SALON
        </div>
        <hr className="border-b-4 border-white mx-[65vh] my-3"></hr>
        <div className="left-text flex flex-col justify-center items-center text-3xl">
          “Beauty and Elegance Redefined”
        </div>
        <div className="left-text flex flex-col justify-center items-center pt-6">
          <button className="bg-white hover:bg-[#B6BBC4] border rounded-full px-6 py-4 text-xl text-black font-semibold">
            BOOK NOW
          </button>
        </div>
      </Element>
      <Element
        name="services"
        className="montserrat h-[100vh] pt-[10vh] bg-[#000000] text-[#ffffff] bg-gradient-to-b from-black to-[#646464]"
      >
        <h1 className="left-text flex flex-col justify-center items-center text-5xl mt-32">
          OUR SERVICES
        </h1>
        <div className="flex flex-row justify-between items-centers px-52 py-10">
          <div className="bg-white text-black font-semibold border rounded-md">
            <img src={haircut} className=" w-96 rounded-md pb-5" />
            <p className="items-center justify-center flex pb-5 text-3xl">Haircuts and Styling</p>
          </div>
          <div className=" bg-white text-black font-semibold border rounded-md">
            <img src={pedi} className=" w-96 rounded-lg pb-5" />
            <p className="items-center justify-center flex text-3xl">Manicure and Pedicure</p>
          </div>
          <div className="bg-white text-black font-semibold border rounded-md">
            <img src={facial} className=" w-96 rounded-lg pb-5" />
            <p className="items-center justify-center flex text-3xl">Facial Treatment</p>
          </div>
        </div>
      </Element>
      <Element
        name="reviews"
        className="montserrat h-[100vh] pt-[10vh] bg-[#646464] text-[#ffffff] bg-gradient-to-b from-[#646464] to-white"
      >
        <div className="flex flex-col pt-48">
          <div className="flex justify-center items-center text-3xl py-5">
            Review !
          </div>
          <div className="flex justify-center">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
          </div>
          <div className="flex justify-center pt-5">
            <textarea name="comments" id="comments" placeholder="Comments"></textarea>
          </div>
          <div className="flex justify-center py-5">
            <button className="border rounded-lg  bg-white text-black py-1 px-5">Submit</button>
          </div>
        </div>
      </Element>
    </>
  );
}

export default App;
