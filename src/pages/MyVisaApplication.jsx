import React, { useContext, useState, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const MyVisaApplication = () => {
  const allVisaApplications = useLoaderData();
  const { user } = useContext(AuthContext);
  const [myVisaApplications, setMyVisaApplications] = useState([]);
  const navigate = useNavigate();

  console.log(allVisaApplications);
  

  useEffect(() => {
    if (user) {
      setMyVisaApplications(allVisaApplications.filter(visa => visa.email === user.email));
    }
  }, [user, allVisaApplications, navigate]);

  const handleCancelApplication = (id) => {
    fetch(`http://localhost:5000/visa/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(() => {
      setMyVisaApplications(myVisaApplications.filter(visa => visa._id !== id));
    })
    .catch(error => console.error('Error cancelling visa application:', error));
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mb-6">
        Total Applications of VISA: {myVisaApplications.length}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {myVisaApplications.map(visa => (
          <div key={visa._id} className="visa-card p-4 border rounded-lg shadow-lg">
            <img src={visa.countryImage} alt={visa.country} className="w-full h-32 object-cover mb-4 rounded-lg" />
            <p className="text-lg font-semibold">Country: <span className="font-bold">{visa.countryName}</span></p>
            <p className="text-lg font-semibold">Visa Type: <span className="font-bold">{visa.visaType}</span></p>
            <p className="text-lg font-semibold">Processing Time: <span className="font-bold">{visa.processingTime}</span></p>
            <p className="text-lg font-semibold">Fee: <span className="font-bold">{visa.fee}</span></p>
            <p className="text-lg font-semibold">Validity: <span className="font-bold">{visa.validity}</span></p>
            <p className="text-lg font-semibold">Application Method: <span className="font-bold">{visa.applicationMethod}</span></p>
            <p className="text-lg font-semibold">Applied Date: <span className="font-bold">{visa.appliedDate}</span></p>
            <p className="text-lg font-semibold">Applicant's Name: <span className="font-bold">{visa.firstName} {visa.lastName}</span></p>
            <p className="text-lg font-semibold">Applicant’s Email: <span className="font-bold">{visa.email}</span></p>
            <button onClick={() => handleCancelApplication(visa._id)} className="btn bg-red-500 text-white mt-4">Cancel</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyVisaApplication;
