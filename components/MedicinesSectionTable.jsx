import React, { useState, useEffect } from "react";
import MedicineItem from "./MedicineItem";
import axios from "axios";

const MedicinesSectionTable = () => {
  const [med, setMed] = useState(null);

  useEffect(() => {
    const handleDataFetch = async () => {
      try {
        const response = await axios.get("/api/medicines");
        setMed(response.data);
      } catch (error) {
        console.error("Error fetching medicines:", error);
      }
    };

    handleDataFetch();
  }, []); 

  return (
    <div className="col-span-12 xl:col-span-7 overflow-scroll">
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-2xl dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="flex flex-col">
          <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
            <div className="p-2.5 xl:p-4 bg-[#f7f9fc]">
              <h5 className="text-[#67768d] text-[16px] font-medium uppercase xsm:text-base ">
                Medicine Name
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-4 bg-[#f7f9fc]">
              <h5 className="text-[#67768d] text-[16px] font-medium uppercase xsm:text-base">
                Medicine Cost
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-4 bg-[#f7f9fc]">
              <h5 className="text-[#67768d] text-[16px] font-medium uppercase xsm:text-base">
                Company
              </h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-4 bg-[#f7f9fc]">
              <h5 className="text-[#67768d] text-[16px] font-medium uppercase xsm:text-base">
                Stock Content
              </h5>
            </div>
          </div>
          {!med ? (
            <p>Loading..</p>
          ) : (
            med.map((medicine, index) => (
              <MedicineItem
                key={index}
                brandName={medicine.med_name}
                medicineCost={medicine.med_cost}
                companyName={medicine.companies.com_name}
                stockContent={medicine.stocks.stock_num}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MedicinesSectionTable;
