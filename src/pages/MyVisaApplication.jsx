import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const MyVisaApplication = () => {
  const userApplications = useLoaderData();
  const { user } = useContext(AuthContext);

  const [applications, setApplications] = useState(
    userApplications.filter((application) => application.email === user.email)
  );
  const [searchQuery, setSearchQuery] = useState("");

  const handleCancel = (_id) => {
    fetch(`https://visa-server-chi.vercel.app/application/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          setApplications(applications.filter((app) => app._id !== _id));

          Swal.fire({
            title: "Application Cancel!!!",
            icon: "Error",
            draggable: true,
          });
        }
      })
      .catch((error) => {
        console.error("Error deleting application:", error);
      });
  };

  const handleSearch = () => {
    const filtered = userApplications.filter(
      (application) =>
        application.email === user.email &&
        application.countryName
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
    );
    setApplications(filtered);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Visa Applications</h1>

      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search by country name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border rounded-l-lg p-2 w-3/4 sm:w-1/2"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white py-2 px-4 rounded-r-lg hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {applications.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((application) => (
            <div
              key={application._id}
              className="border rounded-lg shadow-lg p-4 flex flex-col items-center"
            >
              <img
                src={application.countryImage}
                alt={application.countryName}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold">
                {application.countryName}
              </h2>
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
                <strong>Application Method:</strong>{" "}
                {application.applicationMethod}
              </p>
              <p className="text-sm">
                <strong>Applied Date:</strong> {application.submissionDate}
              </p>
              <p className="text-sm">
                <strong>Applicant:</strong> {application.firstName}{" "}
                {application.lastName}
              </p>
              <p className="text-sm">
                <strong>Email:</strong> {application.email}
              </p>
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
