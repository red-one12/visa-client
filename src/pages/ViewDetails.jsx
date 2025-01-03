import React, { useContext, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const ViewDetails = () => {
  const singleVisa = useLoaderData();
  const { user } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    countryName,
    countryImage,
    visaType,
    processingTime,
    requiredDocuments,
    description,
    ageRestriction,
    fee,
    validity,
    applicationMethod,
  } = singleVisa;


  console.log(visaType);
  

  const currentDate = new Date().toISOString().split("T")[0];

  const handleApplyForm = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    const email = form.email.value;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const fee = form.fee.value;
    const date = form.date.value;

    const newApplication = { email, firstName, lastName, fee, date, countryName, countryImage, visaType,
      processingTime,
      requiredDocuments,
      description,
      ageRestriction,
      validity,
      applicationMethod };

    fetch("http://localhost:5000/application", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          
          setIsModalOpen(false);

          Swal.fire({
                    title: "Successfully Applied!!!",
                    icon: "success",
                    draggable: true
                  });
        }
      })
      .catch((err) => {
        alert("Something went wrong. Please try again.");
        console.error(err);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">{countryName} Visa Details</h2>
        <img
          src={countryImage}
          alt={countryName}
          className="w-full h-60 object-cover rounded-lg mb-4"
        />
        <p className="text-gray-700 mb-2">
          <strong>Visa Type:</strong> {visaType}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Processing Time:</strong> {processingTime}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Fee:</strong> {fee}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Validity:</strong> {validity}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Application Method:</strong> {applicationMethod}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Description:</strong> {description}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Age Restriction:</strong> {ageRestriction}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Required Documents:</strong>{" "}
          {requiredDocuments && Array.isArray(requiredDocuments)
            ? requiredDocuments.join(", ")
            : "N/A"}
        </p>

        <div className="flex justify-center">
          <button
            className="btn bg-[#080221] text-white"
            onClick={() => setIsModalOpen(true)}
          >
            Apply for the visa
          </button>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white w-11/12 max-w-2xl rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Visa Application Form</h3>
              <form onSubmit={handleApplyForm}>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={user?.email || ""}
                    name="email"
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Applied Date
                  </label>
                  <input
                    type="date"
                    value={currentDate}
                    name="date"
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Fee
                  </label>
                  <input
                    type="text"
                    value={fee}
                    name="fee"
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="btn bg-gray-500 text-white py-2 px-4 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn bg-[#080221] text-white py-2 px-4 rounded"
                  >
                    {isSubmitting ? "Submitting..." : "Apply"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewDetails;
