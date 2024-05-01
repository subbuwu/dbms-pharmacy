import React, { useState, useEffect } from "react";
import axios from "axios";
import StockItem from "./StockItem";


const StocksTableSection = ({update,setIsUpdate}) => {
  const [stocks, setStocks] = useState(null);

  useEffect(() => {
    const handleDataFetch = async () => {
      try {
        const response = await axios.get("/api/getStocks");
        setStocks(response.data);
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
                Stock ID
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-4 bg-[#f7f9fc]">
              <h5 className="text-[#67768d] text-[16px] font-medium uppercase xsm:text-base">
                Stock Content
              </h5>
            </div>
          </div>
          {!stocks ? (
            <p>Loading..</p>
          ) : (
            stocks.map((stock, index) => (
              <StockItem
                key={index}
                stock_id = {stock.stock_id}
                content = {stock.stock_num}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default StocksTableSection;
