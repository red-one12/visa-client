import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const singleVisa = useLoaderData();
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
          <button className="btn bg-[#080221] text-white"
          onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            Apply for the visa
          </button>
        </div>

        
        <dialog id="my_modal_4" className="modal">


          <div className="modal-box w-11/12 max-w-5xl">
            
              <form method="dialog">
                

                
                


                <button className="btn">Apply</button>
              </form>
          </div>


        </dialog>



      </div>
    </div>
  );
};

export default ViewDetails;
