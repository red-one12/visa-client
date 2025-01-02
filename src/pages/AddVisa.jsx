import React, { useState } from 'react';

const AddVisa = () => {
  const visaTypes = ['Tourist visa', 'Student visa', 'Official visa'];
  const documents = ['Valid passport', 'Visa application form', 'Recent passport-sized photograph'];

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const countryImage = form.countryImage.value;
    const countryName = form.countryName.value;
    const visaType = form.visaType.value;
    const processingTime = form.processingTime.value;

    // Capture all checked required documents
    const requiredDocuments = Array.from(form.requiredDocuments)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    const description = form.description.value;
    const ageRestriction = form.ageRestriction.value;
    const fee = form.fee.value;
    const validity = form.validity.value;
    const applicationMethod = form.applicationMethod.value;

    // Create newVisa object
    const newVisa = {
      countryImage,
      countryName,
      visaType,
      processingTime,
      requiredDocuments,
      description,
      ageRestriction,
      fee,
      validity,
      applicationMethod
    };

    console.log(newVisa);




    
  };

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-5xl font-bold mb-6 text-center">Add Visa</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="countryImage" className="block text-sm font-medium text-gray-700">Country Image (URL)</label>
          <input
            type="text"
            name="countryImage"
            className="w-full"
            placeholder="Enter image URL"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Country Name</label>
          <input
            type="text"
            name="countryName"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter country name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Visa Type</label>
          <select
            name="visaType"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="">Select Visa Type</option>
            {visaTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Processing Time</label>
          <input
            type="text"
            name="processingTime"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter processing time"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Required Documents</label>
          {documents.map((doc) => (
            <div key={doc} className="mt-1 flex items-center">
              <input
                type="checkbox"
                name="requiredDocuments"
                value={doc}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label className="ml-2 text-sm text-gray-700">{doc}</label>
            </div>
          ))}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter description"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Age Restriction</label>
          <input
            type="number"
            name="ageRestriction"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter age restriction"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Fee</label>
          <input
            type="number"
            name="fee"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter fee"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Validity</label>
          <input
            type="text"
            name="validity"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter validity period"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Application Method</label>
          <input
            type="text"
            name="applicationMethod"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter application method"
          />
        </div>
        <div>
          <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add Visa</button>
        </div>
      </form>
    </div>
  );
};

export default AddVisa;
