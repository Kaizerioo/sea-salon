import { Navbar } from "./components/Navbar";
import { RegisForm } from "./components/RegisForm";
import { Element, Link } from "react-scroll";
import backgroundImage from "./assets/background1.jpeg";
import haircut from "./assets/haircut.jpg";
import facial from "./assets/facial.jpg";
import pedi from "./assets/pedicure.jpg";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function App() {

  const backgroundStyle = {
    backgroundImage: `linear-gradient(to top, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 75%),url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "120vh",
  };

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <>
      <Navbar />
      <RegisForm/>
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
        <div className="flex flex-row justify-between items-centers px-96 py-10">
          <div className="max-w-xs bg-white border rounded-lg shadow">
            <img src={haircut} className=" w-96 rounded-md" />
            <div className="p-5">
              <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Haircuts and Styling</p>
              <p className="mb-3 font-normal text-gray-700">A Modern and stylish haircut, expert styling, and vibrant coloring to enhance your look.</p>
            </div>
          </div>
          <div className=" max-w-xs bg-white border border-gray-200 rounded-lg shadow">
            <img src={pedi} className=" w-96 rounded-lg" />
            <div className="p-5">
            <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Manicure and Pedicure</p>
            <p  className="mb-3 font-normal text-gray-700">Expert nail shaping, cuticle care, and polish for perfectly groomed hands and feet.</p>
            </div>
            
          </div>
          <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow">
            <img src={facial} className=" w-96 rounded-lg" />
            <div className="p-5">
            <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Facial Treatment</p>
            <p className="mb-3 font-normal text-gray-700">Rejuvenating facials that cleanse, exfoliate, and hydrate for a radiant glow.</p>
            </div>
            
          </div>
        </div>
      </Element>
      <Element
        name="reviews"
        className="montserrat h-[100vh] pt-[10vh] bg-[#646464] text-[#ffffff] bg-gradient-to-b from-[#646464] to-white"
      >
        <div className="flex flex-col pt-48">
          <div className="flex justify-center items-center text-5xl py-3 mb-5">
            Rate your Experience !
          </div>
          <div className="flex justify-center mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <FontAwesomeIcon
              key={star}
              icon={faStar}
              className={`text-6xl px-4 cursor-pointer ${star <= (hover || rating) ? 'text-[#333333]' : 'text-gray-300'}`}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(rating)}
            />
          ))}
        </div>
          <div className="flex justify-center pt-5">
            <textarea className="rounded-md min-w-[60vh] min-h-[20vh] max-h-[32vh] p-3 border-[2px] text-black" placeholder="Leave a review . . ."></textarea>
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
