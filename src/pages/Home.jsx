import React, { useState, useEffect } from "react";
import FeaturedVisas from "../components/FeaturedVisas";
import LatestVisa from "../components/LatestVisa";
import VisaApplicationProcess from "../components/VisaApplicationProcess";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const handleType = (count) => {
    console.log(`Typing word index: ${count}`);
  };

  const handleDone = () => {
    console.log(`Typewriter animation completed.`);
  };

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none"
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>

      <div className="carousel w-full">
        {/* First Carousel Item */}
        <div id="item1" className="carousel-item w-full h-[500px] relative">
          <img
            src="https://i.ibb.co/hFZg9rk/Untitled-design-8.png"
            alt="Visa Hub"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              style={{
                paddingTop: "5rem",
                margin: "auto 0",
                fontWeight: "bold",
              }}
              className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-shadow-md"
            >
              VISA{" "}
              <span style={{ color: "white", fontWeight: "bold" }}>
                <Typewriter
                  words={["Secure", "Quick", "Hassle-Free"]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  onLoopDone={handleDone}
                  onType={handleType}
                />
              </span>
            </h1>
          </div>
        </div>






        <div id="item2" className="carousel-item w-full h-[500px] relative">
          <img
            src="https://i.ibb.co/7CW8FhG/Untitled-design-9.png"
            alt="Visa Hub"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-shadow-md">
              GET YOUR VISA
            </h1>
          </div>
        </div>
        <div id="item3" className="carousel-item w-full h-[500px] relative">
          <img
            src="https://i.ibb.co/THdX1hf/Untitled-design-10.png"
            alt="Visa Hub"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-shadow-md">
              READY FOR TAKE OFF
            </h1>
          </div>
        </div>
        <div id="item4" className="carousel-item w-full h-[500px] relative">
          <img
            src="https://i.ibb.co/LkGLJvt/Untitled-design-11.png"
            alt="Visa Hub"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-shadow-md">
              24/7 Available
            </h1>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>

      



      <div>
        <LatestVisa />
      </div>
      <div>
        <FeaturedVisas />
      </div>
      <div>
        <VisaApplicationProcess />
      </div>
    </div>
  );
};

export default Home;
