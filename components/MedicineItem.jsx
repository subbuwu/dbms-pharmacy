// File: components/MedicineItem.js
"use client"
import { useAuthStore } from '@/app/store/authStore';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const MedicineItem = ({ update,id ,companyName, brandName, medicineCost, stockContent , setIsUpdate}) => {

  const globalAverageMedicineCost = useAuthStore((state) => state.globalAverageMedicineCost)

  const updateGlobalAverageMedicineCost = useAuthStore((state) => state.updateGlobalAverageMedicineCost)

    const callAvgCostFunction = async() => {
      setIsUpdate(!update)
      const avgCost = await axios.get("/api/getAverageMedicineCost");
      updateGlobalAverageMedicineCost(avgCost.data);
    }



  const [updatedData, setUpdatedData] = useState({
    brandName: brandName,
    medicineCost: medicineCost,
  });

  const deleteMedicine = async(id) => {

    const response = await fetch("/api/deleteMedicine", {
      method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
    })

    if(response.ok){
      toast.success('Deleted Medicine !.', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#5de80d',
          secondary: '#FFFAEE',
        },
      });

      window.location.reload();
    }
  }

  const handleEdit = async () => {
    try {
      const response = await fetch(`/api/putMedicine`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          updatedData: updatedData,
        }),
      });
      

  
      if(response.ok){
        callAvgCostFunction();
        toast.success('Updated Medicine.', {
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: '#713200',
          },
          iconTheme: {
            primary: '#5de80d',
            secondary: '#FFFAEE',
          },
        });

      }

      if (!response.ok) {
        throw new Error('Failed to update medicine.');
      }
  
      // Handle success response here if needed
    } catch (error) {
      console.error('Error updating medicine:', error.message);
      // Handle error here, show an error message to the user perhaps
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="grid grid-cols-3 my-3  sm:grid-cols-4 border-neutral-500 border-[0.5px]">
      <div className="p-2.5 text-center xl:p-4 bg-[#b7cbeb]">
        <input
          type="text"
          name="brandName"
          value={updatedData.brandName}
          onChange={handleChange}
          className=" outline-none inset-0 rounded-xl px-2  border-[2px] border-[#22272f]  focus:border-[#387eee] focus:ring-1 focus:scale-[1.1] text-[#22272f] text-[16px] font-semibold uppercase xsm:text-base"
        />
      </div>
      <div className="p-2.5 text-center xl:p-4 bg-[#f7f9fc]">
        <input
          type="text"
          name="medicineCost"
          value={updatedData.medicineCost}
          onChange={handleChange}
          className="outline-none inset-0 rounded-xl px-2 border-[2px] border-[#22272f] text-[#22272f] focus:border-[#387eee] focus:ring-1 focus:scale-[1.1] text-[16px] font-semibold uppercase xsm:text-base"
        />
      </div>
      <div className="p-2.5 text-center xl:p-4 bg-[#f7f9fc]">
        <input
          type="text"
          name="companyName"
          value={companyName}
          disabled={true}
          className="text-[#22272f] text-[16px] font-semibold uppercase xsm:text-base"
        />
      </div>
      <div className="p-2.5 text-center xl:p-4 bg-[#f7f9fc]">
        <input
          type="text"
          name="stockContent"
          value={stockContent}
          disabled={true}
          className="text-[#22272f] text-[16px] font-semibold uppercase xsm:text-base"
        />
      </div>
      <div className="p-2.5 text-center xl:p-4 bg-[#f7f9fc]">
        <button onClick={handleEdit} className="px-4 py-2 bg-blue-500 text-white rounded-md">Update Medicine</button>
      </div>
      <div className="p-2.5 text-center xl:p-4 bg-[#f7f9fc]">
        <button onClick={()=>deleteMedicine(id)} className="px-4 py-2 bg-blue-500 text-white rounded-md">Delete Medicine</button>
      </div>
    </div>
  );
};

export default MedicineItem;
