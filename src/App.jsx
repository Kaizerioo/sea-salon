import { Navbar } from "./components/Navbar";
import { AdminNavbar } from "./components/AdminNavbar";
import { Element, Link } from "react-scroll";
import backgroundImage from "./assets/background1.jpeg";
import haircut from "./assets/haircut.jpg";
import facial from "./assets/facial.jpg";
import pedi from "./assets/pedicure.jpg";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { RegisForm } from "./components/RegisForm";
import { LoginForm } from "./components/LoginForm";
import { ToggleComponent } from "./context/ToggleComponent";
import { ReservationForm } from "./components/ReservationForm";
function App() {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(to top, rgba(10,10,10,1) 0%,rgba(0,0,0,0) 100%),url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "120vh",
  };

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const { showReservation, setShowReservation } = useContext(ToggleComponent);
  const { isAdmin, setIsAdmin } = useContext(ToggleComponent);

    return (
      <>
        <Navbar />
        <RegisForm />
        <LoginForm />
        <ReservationForm />
        <Element
          name="home"
          style={backgroundStyle}
          className="montserrat h-[150vh] text-[#ffffff]"
        >
          <div className="pt-72 left-text flex flex-col justify-center items-center text-9xl unna-bold">
            SEA SALON
          </div>
          <hr className="border-b-4 border-white mx-[60vh] my-3"></hr>
          <div className="left-text flex flex-col justify-center items-center text-3xl unna-regular">
            “ Beauty and Elegance Redefined ”
          </div>
          <div className="left-text flex flex-col justify-center items-center pt-6">
            <button
              className="bg-[#ffffff] hover:bg-[#B6BBC4] border border-[#202020] rounded-full px-6 py-4 text-xl text-[#202020] pt-serif-bold"
              onClick={() => {
                setShowReservation(!showReservation);
              }}
            >
              BOOK NOW
            </button>
          </div>
        </Element>
        <Element
          name="services"
          className="montserrat h-[120vh] pt-[10vh] bg-[#0a0a0a] text-[#ffffff] bg-gradient-to-b from-[#0a0a0a] via-[#202020] to-white"
        >
          <h1 className="left-text flex flex-col justify-center items-center text-5xl mt-32 pt-serif-bold">
            OUR SERVICES
          </h1>
          <div className="flex flex-row justify-between items-center px-64 py-10">
            {/* Haircuts and Styling */}
            <div className="max-w-xs bg-white border rounded-lg shadow hover:scale-105 transform transition duration-300 ease-in-out">
              <img
                src={haircut}
                className="w-96 rounded-md filter brightness-75"
              />
              <div className="p-5">
                <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 unna-bold">
                  Haircuts and Styling
                </p>
                <p className="mb-3 font-normal text-gray-700 unna-regular">
                  A Modern and stylish haircut, expert styling, and vibrant
                  coloring to enhance your look.
                </p>
              </div>
            </div>

            {/* Manicure and Pedicure */}
            <div className="max-w-xs bg-white border rounded-lg shadow hover:scale-105 transform transition duration-300 ease-in-out">
              <img
                src={pedi}
                className="w-96 rounded-lg filter brightness-75"
              />
              <div className="p-5">
                <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 unna-bold">
                  Manicure and Pedicure
                </p>
                <p className="mb-3 font-normal text-gray-700 unna-regular">
                  Expert nail shaping, cuticle care, and polish for perfectly
                  groomed hands and feet.
                </p>
              </div>
            </div>

            {/* Facial Treatment */}
            <div className="max-w-xs bg-white border rounded-lg shadow hover:scale-105 transform transition duration-300 ease-in-out">
              <img
                src={facial}
                className="w-96 rounded-lg filter brightness-75"
              />
              <div className="p-5">
                <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 unna-bold">
                  Facial Treatment
                </p>
                <p className="mb-3 font-normal text-gray-700 unna-regular">
                  Rejuvenating facials that cleanse, exfoliate, and hydrate for
                  a radiant glow.
                </p>
              </div>
            </div>
          </div>
        </Element>

        <Element
          name="reviews"
          className="montserrat h-[100vh] pt-[10vh] text-[#ffffff]"
        >
          <div className="flex flex-col pt-48">
            <div className="flex justify-center items-center text-5xl py-3 mb-5 pt-serif-bold text-[#333333]">
              Rate your Experience !
            </div>
            <div className="flex justify-center mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <FontAwesomeIcon
                  key={star}
                  icon={faStar}
                  className={`text-6xl px-4 cursor-pointer ${
                    star <= (hover || rating)
                      ? "text-[#333333]"
                      : "text-gray-300"
                  }`}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(rating)}
                />
              ))}
            </div>
            <div className="flex justify-center pt-5">
              <textarea
                className="rounded-md min-w-[60vh] min-h-[20vh] max-h-[32vh] p-3 border-[2px] text-[#333333] font-sans border-[#333333]"
                placeholder="Leave a review . . ."
              ></textarea>
            </div>
            <div className="flex justify-center py-5">
              <button className="border rounded-lg border-[#333333] bg-white text-[#333333] py-2 px-12 pt-serif-bold text-xl hover:bg-[#B6BBC4]">
                Submit
              </button>
            </div>
          </div>
        </Element>
        <div className="bg-black h-[24vh]  justify-center pt-10">
          <div className="flex flex-row justify-center pb-4">
            <div className="bg-transparent flex flex-col self-center gap-2 mx-5">
              <h3 className="bg-transparent text-2xl text-neutral-100 text-center">
                Working Hours
              </h3>
              <p className="bg-transparent text-neutral-100 text-center">
                Monday - Friday: 9:00 AM - 8:00 PM
              </p>
              <p className="bg-transparent text-neutral-100 text-center">
                Saturday - Sunday: 10:00 AM - 6:00 PM
              </p>
            </div>
            <div className="bg-transparent flex flex-col self-center gap-2 mx-5">
              <h3 className="bg-transparent text-2xl text-neutral-100 text-center">
                Contacts
              </h3>
              <p className="bg-transparent text-neutral-100 text-center">
                Thomas - 08123456789
              </p>
              <p className="bg-transparent text-neutral-100  text-center">
                Sekar - 08164829372
              </p>
            </div>
          </div>
          <div>
            <p className="bg-transparent text-gray-300 text-center">
              &copy; 2024 SEA Salon. All rights reserved.
            </p>
          </div>
        </div>
      </>
    );
}
export default App;
