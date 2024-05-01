"use client"
import React, { useEffect, useState } from 'react';

const CompanyItem = ({ com_id , com_name}) => {

  return (
    <div className="grid grid-cols-2 my-3  sm:grid-cols-4 border-neutral-500 border-[0.5px]">
      <div className="p-2.5 text-center xl:p-4 bg-[#b7cbeb]">
        <input
          type="text"
          name="brandName"
          value={com_id}
          className=" outline-none inset-0 rounded-xl px-2  border-[2px] border-[#22272f]  focus:border-[#387eee] focus:ring-1 focus:scale-[1.1] text-[#22272f] text-[16px] font-semibold uppercase xsm:text-base"
        />
      </div>
      <div className="p-2.5 text-center xl:p-4 bg-[#f7f9fc]">
        <input
          type="text"
          name="medicineCost"
          value={com_name}
          className="outline-none inset-0 rounded-xl px-2 border-[2px] border-[#22272f] text-[#22272f] focus:border-[#387eee] focus:ring-1 focus:scale-[1.1] text-[16px] font-semibold uppercase xsm:text-base"
        />
      </div>
      
    </div>
  );
};

export default CompanyItem;
