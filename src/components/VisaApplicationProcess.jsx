import React from 'react';

const VisaApplicationProcess = () => {
  return (
    <div className="mt-12">
      <h2 className="text-5xl font-bold text-center mb-8 text-blue-900">Visa Application Process</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img className="w-full h-56 object-cover" src="https://i.ibb.co.com/vHJC29F/Vocab-Bee-5.png" alt="Application Process" />
          <div className="p-4">
            <h3 className="text-xl font-bold">Create an account if have then login</h3>
            <p className="text-gray-600">Without login or registration you are not able to apply for visa. So make registration first.</p>
          </div>
        </div>
        


        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img className="w-full h-56 object-cover" src="https://i.ibb.co.com/T8gSQg3/Vocab-Bee-6.png" alt="Application Process" />
          <div className="p-4">
            <h3 className="text-xl font-bold">Click View Visa and click view details button</h3>
            <p className="text-gray-600">Here your see the all details about the visa like fee, country name, processing time, validity and so on.</p>
          </div>
        </div>



        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img className="w-full h-56 object-cover" src="https://i.ibb.co.com/7gqLkft/Vocab-Bee-7.png" alt="Application Process" />
          <div className="p-4">
            <h3 className="text-xl font-bold">Provide some information and click apply.</h3>
            <p className="text-gray-600">You have to provide your first name, last name and some other information.</p>
          </div>
        </div>



      </div>
    </div>
  );
};

export default VisaApplicationProcess;
