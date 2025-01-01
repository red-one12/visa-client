import FeaturedVisas from "../components/FeaturedVisas";
import LatestVisa from "../components/LatestVisa";
import VisaApplicationProcess from "../components/VisaApplicationProcess";

const Home = () => {
  return (
    <div>
      <div className="relative w-full h-[600px] overflow-hidden">
  <img className="w-full h-full object-cover" src="https://i.ibb.co/hFZg9rk/Untitled-design-8.png" alt="" />
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="absolute inset-0 flex flex-col items-center justify-center">
    <h1 className="text-white text-6xl font-bold">VISA Center</h1>
    <p className="text-[#ffffffc2] w-2/3 text-center">Visa Center is your go-to source for all visa-related information and services. We provide up-to-date information and guidance to help you navigate the visa application process.</p>
  </div>
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
