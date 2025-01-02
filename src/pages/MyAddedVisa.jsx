import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const MyAddedVisa = () => {
  const userAddedVisa = useLoaderData();
  const { user } = useContext(AuthContext);
  const [visas, setVisas] = useState(userAddedVisa.filter((visa) => visa.email === user.email));
  const [selectedVisa, setSelectedVisa] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!user) {
    return <div>Loading...</div>;
  }

  const handleUpdateVisa = (e) => {
    e.preventDefault();
    const form = e.target;
    const countryName = form.countryName.value;
    const countryImage = form.countryImage.value;
    const processingTime = form.processingTime.value;
    const visaType = form.visaType.value;
    const fee = form.fee.value;
    const validity = form.validity.value;
    const applicationMethod = form.applicationMethod.value;
    const email = form.email.value;

    const updateVisa = {
      countryName,
      countryImage,
      processingTime,
      visaType,
      fee,
      validity,
      applicationMethod,
      email,
    };

    fetch(`http://localhost:5000/visa/${selectedVisa._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateVisa),
    })
      .then((res) => res.json())
      .then((data) => {
        setVisas(visas.map((visa) => (visa._id === selectedVisa._id ? { ...visa, ...updateVisa } : visa)));
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.error("Error updating visa:", error);
      });
  };

  const handleDeleteVisa = (id) => {
    fetch(`http://localhost:5000/visa/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setVisas(visas.filter((visa) => visa._id !== id));
      })
      .catch((error) => {
        console.error("Error deleting visa:", error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mb-6">
        The number of visas you added: {visas.length}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visas.map((visa) => (
          <div key={visa._id} className="visa-card p-4 border rounded-lg shadow-lg">
            <img
              src={visa.countryImage}
              alt={visa.countryName}
              className="w-full h-32 object-cover mb-4 rounded-lg"
            />
            <p className="text-lg font-semibold">
              Country: <span className="font-bold">{visa.countryName}</span>
            </p>
            <p className="text-lg font-semibold">
              Visa Type: <span className="font-bold">{visa.visaType}</span>
            </p>
            <p className="text-lg font-semibold">
              Processing Time: <span className="font-bold">{visa.processingTime}</span>
            </p>
            <p className="text-lg font-semibold">
              Fee: <span className="font-bold">{visa.fee}</span>
            </p>
            <p className="text-lg font-semibold">
              Validity: <span className="font-bold">{visa.validity}</span>
            </p>
            <p className="text-lg font-semibold">
              Application Method: <span className="font-bold">{visa.applicationMethod}</span>
            </p>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => {
                  setSelectedVisa(visa);
                  setIsModalOpen(true);
                }}
                className="btn bg-blue-500 text-white"
              >
                Update
              </button>

              <button
                onClick={() => handleDeleteVisa(visa._id)}
                className="btn bg-red-500 text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <dialog open className="modal">
          <div className="modal-box w-full max-w-5xl">
            <form onSubmit={handleUpdateVisa} className="modal-box w-full max-w-5xl">
              <h3 className="font-bold text-lg mb-4">Update Visa Information</h3>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Country Image URL</label>
                <input
                  type="text"
                  defaultValue={selectedVisa.countryImage}
                  name="countryImage"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Country Name</label>
                <input
                  type="text"
                  defaultValue={selectedVisa.countryName}
                  name="countryName"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Visa Type</label>
                <input
                  type="text"
                  defaultValue={selectedVisa.visaType}
                  name="visaType"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Processing Time</label>
                <input
                  type="text"
                  defaultValue={selectedVisa.processingTime}
                  name="processingTime"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Fee</label>
                <input
                  type="number"
                  defaultValue={selectedVisa.fee}
                  name="fee"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Validity</label>
                <input
                  type="text"
                  defaultValue={selectedVisa.validity}
                  name="validity"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Application Method</label>
                <input
                  type="text"
                  defaultValue={selectedVisa.applicationMethod}
                  name="applicationMethod"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Your Email</label>
                <input
                  type="text"
                  defaultValue={selectedVisa.email}
                  name="email"
                  className="input input-bordered w-full"
                  readOnly
                />
              </div>
              <div className="modal-action mb-10">
                <button type="submit" className="btn bg-blue-500 text-white">
                  Update
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="btn"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default MyAddedVisa;
