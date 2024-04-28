"use client"
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AddMedicineModal = () => {

  const [submitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {


    toast.success('Medicine Added.', {
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      },
      iconTheme: {
        primary: '#69ec0c',
        secondary: '#FFFAEE',
      },
    });

    setTimeout(() => {
        window.location.reload();
        window.location.href = "/dashboard" // Reload the page after successful submission
    },2000); // Reload after 2 seconds
    }
  }, [submitted]);

  const [medicineId, setMedicineId] = useState();
  const [medicineName, setMedicineName] = useState();
  const [medicineCost, setMedicineCost] = useState();
  const [companyId, setCompanyId] = useState();
  const [stockId, setStockId] = useState();
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {

      const response = await fetch(
        `/api/postMedicine`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            medicine_name: medicineName,
            medicine_cost: medicineCost,
            company_id: companyId, // Parse companyId to integer
            stockId: stockId,
          }),
        }
      )

      setIsSubmitted(true);


      if (response.ok) {
        toast.success('Medicine Added.');
        setMedicineId(0);
        setMedicineName('');
        setMedicineCost(0);
        setCompanyId(0);
        setStockId(0);
      } else {
        console.error('Error response medicine:', response);
      }
    } catch (error) {
      console.error('Error adding medicine:', error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-70">
      <div className="bg-gray-200 rounded-lg p-8 max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Add Medicine</h2>
        <form onSubmit={handleSubmit} className="space-y-4 w-full flex flex-col items-center justify-center">
          <div>
            <label htmlFor="medicineId" className="block mb-1 text-sm font-medium text-gray-900">
              Medicine ID
            </label>
            <input
            disabled={true}
              type="number"
              id="medicineId"
              value={medicineId}
              onChange={(e) => setMedicineId(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="medicineName" className="block mb-1 text-sm font-medium text-gray-900">
              Medicine Name
            </label>
            <input
              type="text"
              id="medicineName"
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Paracetamol"
              required
            />
          </div>
          <div>
            <label htmlFor="medicineCost" className="block mb-1 text-sm font-medium text-gray-900">
              Medicine Cost
            </label>
            <input
              type="number"
              id="medicineCost"
              value={medicineCost}
              onChange={(e) => setMedicineCost(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="companyId" className="block mb-1 text-sm font-medium text-gray-900">
              Company ID
            </label>
            <input
              type="number"
              id="companyId"
              value={companyId}
              onChange={(e) => setCompanyId(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="stockId" className="block mb-1 text-sm font-medium text-gray-900">
              Stock ID
            </label>
            <input
              type="number"
              id="stockId"
              value={stockId}
              onChange={(e) => setStockId(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMedicineModal;
