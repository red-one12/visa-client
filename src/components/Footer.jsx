import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Footer = () => {
  const {user} = useContext(AuthContext);
  return (
    <footer className="bg-[#080221] text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300">
              Visa Hub is your go-to source for all visa-related information and services. We provide up-to-date information and guidance to help you navigate the visa application process.
            </p>
          </div>
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-300">
              <li className="mb-2"><NavLink to="/" className="hover:underline">Home</NavLink></li>
              <li className="mb-2"><NavLink to="/allVisa" className="hover:underline">All Visas</NavLink></li>
              {user && <li className="mb-2"><NavLink to="/addVisa" className="hover:underline">Add Visa</NavLink></li>}
              {user && <li className="mb-2"><NavLink to="/myAddedVisa" className="hover:underline">My Added Visa</NavLink></li>}
              {user && <li className="mb-2"><NavLink to="/myVisaApplication" className="hover:underline">My Visa Applications</NavLink></li>}
            </ul>
          </div>
          <div className="w-full sm:w-1/3">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300">
              Email: red1@visacenter.com<br />
              Phone: 01703344405
            </p>
            <div className="mt-4">
              <a href="#" className="text-gray-300 hover:text-white mr-4"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-300 hover:text-white mr-4"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-300">
          &copy; 2025 Visa Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;