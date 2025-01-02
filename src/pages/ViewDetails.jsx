import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const ViewDetails = () => {
  const singleVisa = useLoaderData();
  const { user } = useContext(AuthContext);
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
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            Apply for the visa
          </button>
        </div>

        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <form method="dialog">
              <h3 className="text-2xl font-bold mb-4">Visa Application Form</h3>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={user?.email || ""}
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
