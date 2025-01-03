import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const MyVisaApplication = () => {
  const userApplications = useLoaderData();
  const { user } = useContext(AuthContext);

  // State for managing the filtered applications
  const [applications, setApplications] = useState(
    userApplications.filter((application) => application.email === user.email)
  );

  const handleCancel = (_id) => {
    fetch(`http://localhost:5000/application/${_id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert('Application Deleted!');
          // Remove the application from the state
          setApplications(applications.filter((app) => app._id !== _id));
        }
      })
      .catch((error) => {
        console.error('Error deleting application:', error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Visa Applications</h1>
      {applications.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((application) => (
            <div
              key={application._id}
              className="border rounded-lg shadow-lg p-4 flex flex-col items-center"
            >
              {/* Country Image */}
              <img
                src={application.countryImage}
                alt={application.countryName}
                className="w-full h-40 object-cover rounded-md mb-4"
              />

              {/* Country Name */}
              <h2 className="text-xl font-semibold">{application.countryName}</h2>

              {/* Visa Details */}
              <p className="text-sm">
                <strong>Visa Type:</strong> {application.visaType}
              </p>
              <p className="text-sm">
                <strong>Processing Time:</strong> {application.processingTime}
              </p>
              <p className="text-sm">
                <strong>Fee:</strong> {application.fee} USD
              </p>
              <p className="text-sm">
                <strong>Validity:</strong> {application.validity}
              </p>
              <p className="text-sm">
                <strong>Application Method:</strong> {application.applicationMethod}
              </p>
              <p className="text-sm">
                <strong>Applied Date:</strong> {application.submissionDate}
              </p>

              {/* Applicant Details */}
              <p className="text-sm">
                <strong>Applicant:</strong> {application.firstName} {application.lastName}
              </p>
              <p className="text-sm">
                <strong>Email:</strong> {application.email}
              </p>

              {/* Cancel Button */}
              <button
                className="bg-red-500 text-white py-2 px-4 mt-4 rounded-lg hover:bg-red-600"
                onClick={() => handleCancel(application._id)}
              >
                Cancel
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No applications found for your email.</p>
      )}
    </div>
  );
};

export default MyVisaApplication;
