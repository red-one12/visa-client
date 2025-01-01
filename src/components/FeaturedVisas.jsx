

const FeaturedVisas = () => {
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Visas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img className="w-full h-48 object-cover" src="https://via.placeholder.com/300" alt="Featured Visa" />
          <div className="p-4">
            <h3 className="text-xl font-bold">Featured Visa Title</h3>
            <p className="text-gray-600">Featured visa description goes here...</p>
          </div>
        </div>
        {/* Repeat Cards as needed */}
      </div>
    </div>
  );
};

export default FeaturedVisas;
