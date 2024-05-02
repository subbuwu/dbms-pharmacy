"use client"
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AddCompanyModal = () => {

  const [submitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {


    toast.success('Company Added Successfully.', {
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

  const [companyId, setCompanyId] = useState();
  const [companyName, setCompanyName] = useState();

  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {

      const response = await fetch(
        `/api/postCompany`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            company_id : companyId,
            company_name: companyName,
          }),
        }
      )

      setIsSubmitted(true);


      if (response.ok) {
        toast.success('Company Added Successfully.');
        setCompanyId(0);
        setCompanyName('');
      } else {
        console.error('Error response company:', response);
      }
    } catch (error) {
      console.error('Error adding company:', error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-70">
      <div className="bg-gray-200 rounded-lg p-8 max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Add Company</h2>
        <form onSubmit={handleSubmit} className="space-y-4 w-full flex flex-col items-center justify-center">
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
            <label htmlFor="companyName" className="block mb-1 text-sm font-medium text-gray-900">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="XYZ"
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

export default AddCompanyModal;
