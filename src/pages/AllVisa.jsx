import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const AllVisa = () => {
  const allVisa = useLoaderData();
  const {user} = useContext(AuthContext);

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-5xl font-bold mb-6 text-center">All Visas</h2>
      <p className="mb-4 text-center">Number of available VISA: {allVisa.length}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allVisa.map((visa, index) => (



          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img src={visa.countryImage} alt={visa.countryName} className="w-full h-32 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{visa.countryName}</h3>
              <p className="text-gray-700 mb-1">Visa Type: {visa.visaType}</p>
              <p className="text-gray-700 mb-1">Processing Time: {visa.processingTime}</p>
              <p className="text-gray-700 mb-1">Fee: {visa.fee}</p>


              <Link to={user? `/viewDetails/${visa._id}`: `/login`}>
              <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">

                
              See Details

              </button>
              
                </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVisa;
