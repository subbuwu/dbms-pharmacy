"use client"
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthStore } from '../store/authStore';
import Sidebar from '@/components/Sidebar';
import Medicines from '@/components/Medicines';
import Companies from '@/components/Companies';
import Stocks from '@/components/Stocks';
import AddMedicineModal from '@/components/AddMedicineModal';
import { Toaster } from 'react-hot-toast';

export const MyContext = createContext(false);

const Page = () => {
  const currentlyActive = useAuthStore((state) => state.currentlyActive);

  const [isOpen, setIsOpen] = useState(false);
  

  return (
  <MyContext.Provider value={{isOpen,setIsOpen}} >
    <div className='flex flex-row max-h-[100vh] overflow-y-scroll'>
      <Toaster />
      <Sidebar/>
          {currentlyActive === "medicines"  ? (
            <Medicines />
          ) : currentlyActive === "companies" ? (
            <Companies/>
          ) : currentlyActive === "stocks" ? (
            <Stocks/>
          ) : (
            <>Not Found</>
          )}
        {
          isOpen && <AddMedicineModal/>
        }
    </div>
  </MyContext.Provider>
  );
}

export default Page;
