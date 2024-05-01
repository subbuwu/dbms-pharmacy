import React, { useState, useEffect } from "react";
import axios from "axios";
import CompanyItem from "./CompanyItem";

const CompaniesTableSection = ({update,setIsUpdate}) => {
  const [companies, setCompanies] = useState(null);

  useEffect(() => {
    const handleDataFetch = async () => {
      try {
        const response = await axios.get("/api/getCompanies");
        setCompanies(response.data);
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
                Company ID
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-4 bg-[#f7f9fc]">
              <h5 className="text-[#67768d] text-[16px] font-medium uppercase xsm:text-base">
                Company Name
              </h5>
            </div>
          </div>
          {!companies ? (
            <p>Loading..</p>
          ) : (
            companies.map((company, index) => (
              <CompanyItem
                key={index}
                com_id = {company.com_id}
                com_name = {company.com_name}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CompaniesTableSection;
