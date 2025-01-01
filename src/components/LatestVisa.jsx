import React from 'react';

const visaData = [
  {
    country: 'USA',
    image: 'https://cdn.britannica.com/76/4476-050-E643DD49/Betsy-Ross-legend-flag-united-states.jpg',
    visaType: 'Tourist',
    processingTime: '10 days',
    fee: '$160',
    validity: '10 years',
    applicationMethod: 'Online',
  },
  {
    country: 'Canada',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/800px-Flag_of_Canada_%28Pantone%29.svg.png',
    visaType: 'Work',
    processingTime: '15 days',
    fee: '$150',
    validity: '2 years',
    applicationMethod: 'Offline',
  },
  {
    country: 'Australia',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Victoria_%28Australia%29.svg/1200px-Flag_of_Victoria_%28Australia%29.svg.png',
    visaType: 'Student',
    processingTime: '20 days',
    fee: '$200',
    validity: '5 years',
    applicationMethod: 'Online',
  },
  {
    country: 'UK',
    image: 'https://i.pinimg.com/736x/73/4b/74/734b746336103f8eca748cb74b97324c.jpg',
    visaType: 'Business',
    processingTime: '7 days',
    fee: '$180',
    validity: '6 months',
    applicationMethod: 'Offline',
  },
  {
    country: 'Germany',
    image: 'https://cdn.britannica.com/97/897-050-0BFECDA5/Flag-Germany.jpg',
    visaType: 'Tourist',
    processingTime: '12 days',
    fee: '$120',
    validity: '1 year',
    applicationMethod: 'Online',
  },
  {
    country: 'Japan',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/640px-Flag_of_Japan.svg.png',
    visaType: 'Tourist',
    processingTime: '8 days',
    fee: '$90',
    validity: '3 months',
    applicationMethod: 'Online',
  },
];

const LatestVisa = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Latest Visas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visaData.map((visa, index) => (
          <div key={index} className="card bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={visa.image} alt={visa.country} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{visa.country}</h3>
              <p><strong>Visa Type:</strong> {visa.visaType}</p>
              <p><strong>Processing Time:</strong> {visa.processingTime}</p>
              <p><strong>Fee:</strong> {visa.fee}</p>
              <p><strong>Validity:</strong> {visa.validity}</p>
              <p><strong>Application Method:</strong> {visa.applicationMethod}</p>
              <button className="mt-4 btn btn-primary w-full">See Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestVisa;
