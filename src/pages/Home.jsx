import FeaturedVisas from "../components/FeaturedVisas";
import LatestVisa from "../components/LatestVisa";
import VisaApplicationProcess from "../components/VisaApplicationProcess";

const Home = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full h-[500px] relative">
          <img
            src="https://i.ibb.co/hFZg9rk/Untitled-design-8.png"
            alt="Visa Hub"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-shadow-md">
              VISA CENTER
            </h1>
          </div>
        </div>

        <div id="item2" className="carousel-item w-full h-[500px] relative">
          <img
            src="https://i.ibb.co.com/7CW8FhG/Untitled-design-9.png"
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
            src="https://i.ibb.co.com/THdX1hf/Untitled-design-10.png"
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
            src="https://i.ibb.co.com/LkGLJvt/Untitled-design-11.png"
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
        <LatestVisa></LatestVisa>
      </div>
      <div>
        <FeaturedVisas></FeaturedVisas>
      </div>
      <div>
        <VisaApplicationProcess></VisaApplicationProcess>
      </div>
    </div>
  );
};

export default Home;
