

const FeaturedVisas = () => {
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Visas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img className="w-full h-48 object-cover" src="https://i.ibb.co.com/hB8N9Lg/Vocab-Bee-2.png" alt="Featured Visa" />
          <div className="p-4">
            <h3 className="text-xl font-bold">Easy To Apply</h3>
            <p className="text-gray-600">After registration you can apply your favorite visa by providing some information.</p>
          </div>
        </div>




        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img className="w-full h-48 object-cover" src="https://i.ibb.co.com/d59J3mK/Vocab-Bee-3.png" alt="Featured Visa" />
          <div className="p-4">
            <h3 className="text-xl font-bold">Easy Registration</h3>
            <p className="text-gray-600">Provide some information and complete your registration.</p>
          </div>
        </div>




        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img className="w-full h-48 object-cover" src="https://i.ibb.co.com/Pg5dzDn/Vocab-Bee-4.png" alt="Featured Visa" />
          <div className="p-4">
            <h3 className="text-xl font-bold">Add Your Visa</h3>
            <p className="text-gray-600">Your add your visa by including information.</p>
          </div>
        </div>
        {/* Repeat Cards as needed */}
      </div>
    </div>
  );
};

export default FeaturedVisas;
