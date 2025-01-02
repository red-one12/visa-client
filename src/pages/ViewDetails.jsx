import { useContext, useRef } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const ViewDetails = () => {
  const singleVisa = useLoaderData();
  const { user } = useContext(AuthContext);
  const modalRef = useRef(null);
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

  const currentDate = new Date().toISOString().split("T")[0];

  const handleApplyForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const fee = form.fee.value;
    const date = form.date.value;

    const newApplication = { email, firstName, lastName, fee, date };
    console.log(newApplication);

    fetch('http://localhost:5000/application', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newApplication)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        alert("Application Successful!!!")
      }
    })

    // Close the modal
    modalRef.current.close();
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">{countryName} Visa Details</h2>
        <img
          src={countryImage}
          alt={countryName}
          className="w-full h-160 object-cover rounded-lg mb-4"
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
          <strong>Required Documents:</strong> {requiredDocuments.join(", ")}
        </p>

        <div className="flex justify-center">
          <button
            className="btn bg-[#080221] text-white"
            onClick={() => modalRef.current.showModal()}
          >
            Apply for the visa
          </button>
        </div>

        <dialog id="my_modal_4" className="modal" ref={modalRef}>
          <div className="modal-box w-11/12 max-w-5xl">
            <form onSubmit={handleApplyForm} method="dialog">
              <h3 className="text-2xl font-bold mb-4">Visa Application Form</h3>
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
              <div className="flex justify-center">
                <button className="btn bg-[#080221] text-white py-2 px-4 rounded">
                  Apply
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default ViewDetails;
