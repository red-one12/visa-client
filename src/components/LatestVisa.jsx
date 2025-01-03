import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const LatestVisa = ({ visaData }) => {
  const {user} = useContext(AuthContext);

  const latestVisas = visaData.slice(-6);


  return (
    <div className="p-6 bg-gray-100 mt-16">
      <h2 className="text-5xl font-bold mb-6 text-center text-blue-900">Latest Visas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestVisas.map((visa, index) => (
          <div key={index} className="card bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={visa.countryImage} alt={visa.country} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{visa.country}</h3>
              <p><strong>Visa Type:</strong> {visa.visaType}</p>
              <p><strong>Processing Time:</strong> {visa.processingTime}</p>
              <p><strong>Fee:</strong> {visa.fee}</p>
              <p><strong>Validity:</strong> {visa.validity}</p>
              <p><strong>Application Method:</strong> {visa.applicationMethod}</p>
              <Link to={user ? `/viewDetails/${visa._id}` : `/login`}>
              <button className="mt-4 btn bg-[#080221] w-full text-white">See Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="btn bg-[#080221] text-white">
          <Link to="/allVisa">See All Visas</Link>
        </button>
      </div>
    </div>
  );
};

export default LatestVisa;
