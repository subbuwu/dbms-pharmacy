"use client"
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import MedicinesSectionTable from "./MedicinesSectionTable";
import { MyContext } from "@/app/dashboard/page";
import { useAuthStore } from "@/app/store/authStore";


const Medicines = () => {
  const {  setIsOpen } = useContext(MyContext);

  const globalAverageMedicineCost = useAuthStore((state) => state.globalAverageMedicineCost)
  const updateGlobalAverageMedicineCost = useAuthStore((state) => state.updateGlobalAverageMedicineCost)
  const [update,setIsUpdate] = useState(false);
  const [medicineCount,setMedicineCount] = useState();
 
  useEffect(()=>{
    const getMedicinesCount = async() => {
      const response = await axios.get("/api/getMedicineCount");
      const avgCost = await axios.get("/api/getAverageMedicineCost");
      updateGlobalAverageMedicineCost(avgCost.data);
      setMedicineCount(response.data.length)
    }
    getMedicinesCount();
  },[])
  

  return (
    <main className="flex-1 w-full  overflow-y-scroll  bg-[#f1f5f9]">
      <div class="max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <div>
          <div class="mb-5 flex items-center justify-between">
            <div>
              <h2 className={`font-sans mb-1.5 text-3xl font-bold text-[#1c2434]`}>
                Manage Medicines
              </h2>
              <p class="font-medium text-xl text-[#66758c]">Latest statistics</p>
            </div>
            <div class="relative flex">
              <button class="text-[#98A6AD] hover:text-body">
                <svg
                  class="fill-current"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.25 11.25C3.49264 11.25 4.5 10.2426 4.5 9C4.5 7.75736 3.49264 6.75 2.25 6.75C1.00736 6.75 0 7.75736 0 9C0 10.2426 1.00736 11.25 2.25 11.25Z"
                    fill=""
                  ></path>
                  <path
                    d="M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z"
                    fill=""
                  ></path>
                  <path
                    d="M15.75 11.25C16.9926 11.25 18 10.2426 18 9C18 7.75736 16.9926 6.75 15.75 6.75C14.5074 6.75 13.5 7.75736 13.5 9C13.5 10.2426 14.5074 11.25 15.75 11.25Z"
                    fill=""
                  ></path>
                </svg>
              </button>
              <div class="absolute right-0 top-full z-40 w-40 space-y-1 rounded-sm border border-stroke bg-white p-1.5 shadow-xl dark:border-strokedark dark:bg-boxdark hidden">
                <button class="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4">
                  <svg
                    class="fill-current"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_62_9787)">
                      <path
                        d="M15.55 2.97499C15.55 2.77499 15.475 2.57499 15.325 2.42499C15.025 2.12499 14.725 1.82499 14.45 1.52499C14.175 1.24999 13.925 0.974987 13.65 0.724987C13.525 0.574987 13.375 0.474986 13.175 0.449986C12.95 0.424986 12.75 0.474986 12.575 0.624987L10.875 2.32499H2.02495C1.17495 2.32499 0.449951 3.02499 0.449951 3.89999V14C0.449951 14.85 1.14995 15.575 2.02495 15.575H12.15C13 15.575 13.725 14.875 13.725 14V5.12499L15.35 3.49999C15.475 3.34999 15.55 3.17499 15.55 2.97499ZM8.19995 8.99999C8.17495 9.02499 8.17495 9.02499 8.14995 9.02499L6.34995 9.62499L6.94995 7.82499C6.94995 7.79999 6.97495 7.79999 6.97495 7.77499L11.475 3.27499L12.725 4.49999L8.19995 8.99999ZM12.575 14C12.575 14.25 12.375 14.45 12.125 14.45H2.02495C1.77495 14.45 1.57495 14.25 1.57495 14V3.87499C1.57495 3.62499 1.77495 3.42499 2.02495 3.42499H9.72495L6.17495 6.99999C6.04995 7.12499 5.92495 7.29999 5.87495 7.49999L4.94995 10.3C4.87495 10.5 4.92495 10.675 5.02495 10.85C5.09995 10.95 5.24995 11.1 5.52495 11.1H5.62495L8.49995 10.15C8.67495 10.1 8.84995 9.97499 8.97495 9.84999L12.575 6.24999V14ZM13.5 3.72499L12.25 2.49999L13.025 1.72499C13.225 1.92499 14.05 2.74999 14.25 2.97499L13.5 3.72499Z"
                        fill=""
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_62_9787">
                        <rect width="16" height="16" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  Edit
                </button>
                <button class="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4">
                  <svg
                    class="fill-current"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.225 2.20005H10.3V1.77505C10.3 1.02505 9.70005 0.425049 8.95005 0.425049H7.02505C6.27505 0.425049 5.67505 1.02505 5.67505 1.77505V2.20005H3.75005C3.02505 2.20005 2.42505 2.80005 2.42505 3.52505V4.27505C2.42505 4.82505 2.75005 5.27505 3.22505 5.47505L3.62505 13.75C3.67505 14.775 4.52505 15.575 5.55005 15.575H10.4C11.425 15.575 12.275 14.775 12.325 13.75L12.75 5.45005C13.225 5.25005 13.55 4.77505 13.55 4.25005V3.50005C13.55 2.80005 12.95 2.20005 12.225 2.20005ZM6.82505 1.77505C6.82505 1.65005 6.92505 1.55005 7.05005 1.55005H8.97505C9.10005 1.55005 9.20005 1.65005 9.20005 1.77505V2.20005H6.85005V1.77505H6.82505ZM3.57505 3.52505C3.57505 3.42505 3.65005 3.32505 3.77505 3.32505H12.225C12.325 3.32505 12.425 3.40005 12.425 3.52505V4.27505C12.425 4.37505 12.35 4.47505 12.225 4.47505H3.77505C3.67505 4.47505 3.57505 4.40005 3.57505 4.27505V3.52505V3.52505ZM10.425 14.45H5.57505C5.15005 14.45 4.80005 14.125 4.77505 13.675L4.40005 5.57505H11.625L11.25 13.675C11.2 14.1 10.85 14.45 10.425 14.45Z"
                      fill=""
                    ></path>
                    <path
                      d="M8.00005 8.1001C7.70005 8.1001 7.42505 8.3501 7.42505 8.6751V11.8501C7.42505 12.1501 7.67505 12.4251 8.00005 12.4251C8.30005 12.4251 8.57505 12.1751 8.57505 11.8501V8.6751C8.57505 8.3501 8.30005 8.1001 8.00005 8.1001Z"
                      fill=""
                    ></path>
                    <path
                      d="M9.99994 8.60004C9.67494 8.57504 9.42494 8.80004 9.39994 9.12504L9.24994 11.325C9.22494 11.625 9.44994 11.9 9.77494 11.925C9.79994 11.925 9.79994 11.925 9.82494 11.925C10.1249 11.925 10.3749 11.7 10.3749 11.4L10.5249 9.20004C10.5249 8.87504 10.2999 8.62504 9.99994 8.60004Z"
                      fill=""
                    ></path>
                    <path
                      d="M5.97497 8.60004C5.67497 8.62504 5.42497 8.90004 5.44997 9.20004L5.62497 11.4C5.64997 11.7 5.89997 11.925 6.17497 11.925C6.19997 11.925 6.19997 11.925 6.22497 11.925C6.52497 11.9 6.77497 11.625 6.74997 11.325L6.57497 9.12504C6.57497 8.80004 6.29997 8.57504 5.97497 8.60004Z"
                      fill=""
                    ></path>
                  </svg>
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 2xl:gap-7.5">
            <div class="rounded-sm border-[2px] hover:border-blue-400 border-stroke bg-white p-4 shadow-xl dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-7.5">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.8752 24.65H31.5564V9.19062C31.5564 7.96875 30.5471 6.90625 29.2721 6.90625H26.4033C25.1814 6.90625 24.1189 7.91562 24.1189 9.19062V24.65H20.7189V12.1656C20.7189 10.9437 19.7096 9.88125 18.4346 9.88125H15.5658C14.3439 9.88125 13.2814 10.8906 13.2814 12.1656V24.65H9.82832V15.6187C9.82832 14.3969 8.81895 13.3344 7.54395 13.3344H4.6752C3.45332 13.3344 2.39082 14.3437 2.39082 15.6187V24.65H2.1252C1.4877 24.65 0.90332 25.1813 0.90332 25.8719C0.90332 26.5625 1.43457 27.0938 2.1252 27.0938H31.8752C32.5127 27.0938 33.0971 26.5625 33.0971 25.8719C33.0971 25.1813 32.5127 24.65 31.8752 24.65ZM4.83457 24.65V15.7781H7.4377V24.65H4.83457ZM15.6721 24.65V12.325H18.2752V24.65H15.6721ZM26.5627 24.65V9.35H29.1658V24.65H26.5627V24.65Z"
                  fill="#3C50E0"
                ></path>
              </svg>
              <h4 class="mt-5 text-[16px] mb-2 font-medium text-[#66758c] text-2xl">Total Medicines</h4>
              <h3 class="mb-2 text-[26px] font-bold text-black">
                {medicineCount}
              </h3>
              <p class="flex items-center gap-1 text-sm font-medium">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.0158 4.74683H9.4939C9.2314 4.74683 9.01265 4.96558 9.01265 5.22808C9.01265 5.49058 9.2314 5.70933 9.4939 5.70933H11.6595L8.85953 7.59058C8.75015 7.67808 8.59703 7.67808 8.46578 7.59058L5.57828 5.68745C5.1189 5.3812 4.55015 5.3812 4.09078 5.68745L0.722027 7.94058C0.503277 8.0937 0.437652 8.39995 0.590777 8.6187C0.678277 8.74995 0.831402 8.83745 1.0064 8.83745C1.0939 8.83745 1.20328 8.81558 1.2689 8.74995L4.65953 6.49683C4.7689 6.40933 4.92203 6.40933 5.05328 6.49683L7.94078 8.42183C8.40015 8.72808 8.9689 8.72808 9.42828 8.42183L12.5127 6.3437V8.77183C12.5127 9.03433 12.7314 9.25308 12.9939 9.25308C13.2564 9.25308 13.4752 9.03433 13.4752 8.77183V5.22808C13.5189 4.96558 13.2783 4.74683 13.0158 4.74683Z"
                    fill="#10B981"
                  ></path>
                </svg>
                <span class="text-[rgb(16, 185, 129)]">+2.5%</span>
                <span>than last Week</span>
              </p>
            </div>
            <div class="rounded-sm border-[2px] hover:border-blue-400 border-stroke bg-white p-4 shadow-xl dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-7.5">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.925 11.9C21.7813 11.9 18.7532 10.0938 18.7532 7.65002C18.7532 5.20627 21.7813 3.40002 25.925 3.40002C30.0688 3.40002 33.0969 5.20627 33.0969 7.65002C33.0969 10.0938 30.0688 11.9 25.925 11.9ZM25.925 5.79065C22.95 5.79065 21.1438 6.90627 21.1438 7.65002C21.1438 8.39377 22.95 9.5094 25.925 9.5094C28.9 9.5094 30.7063 8.39377 30.7063 7.65002C30.7063 6.90627 28.8469 5.79065 25.925 5.79065Z"
                  fill="#F0950C"
                ></path>
                <path
                  d="M25.9251 16.575C22.5782 16.575 19.922 15.4062 19.072 13.6C18.8063 13.0156 19.072 12.2719 19.6563 12.0062C20.2407 11.7406 20.9845 12.0062 21.2501 12.5906C21.622 13.3875 23.3751 14.1844 25.9782 14.1844C27.2001 14.1844 28.3157 13.9719 29.2188 13.6531C30.0157 13.3344 30.547 12.9094 30.7063 12.5375C30.9188 11.9 31.6095 11.5812 32.247 11.8469C32.8845 12.0594 33.2032 12.75 32.9376 13.3875C32.5657 14.45 31.5563 15.3531 30.0688 15.9375C28.847 16.3625 27.4126 16.575 25.9251 16.575Z"
                  fill="#F0950C"
                ></path>
                <path
                  d="M25.9251 21.25C22.5782 21.25 19.922 20.0813 19.072 18.275C18.8063 17.6907 19.072 16.9469 19.6563 16.6813C20.2407 16.4157 20.9845 16.6813 21.2501 17.2657C21.622 18.0625 23.3751 18.8594 25.9782 18.8594C27.2001 18.8594 28.3157 18.6469 29.2188 18.3282C30.0157 18.0094 30.547 17.5844 30.7063 17.2125C30.9188 16.575 31.6095 16.2563 32.247 16.5219C32.8845 16.7344 33.2032 17.425 32.9376 18.0625C32.5657 19.125 31.5563 20.0282 30.0688 20.6125C28.847 21.0375 27.4126 21.25 25.9251 21.25Z"
                  fill="#F0950C"
                ></path>
                <path
                  d="M25.9251 25.925C22.5782 25.925 19.922 24.7562 19.072 22.95C18.8063 22.3656 19.072 21.6218 19.6563 21.3562C20.2407 21.0906 20.9845 21.3562 21.2501 21.9406C21.622 22.7375 23.3751 23.5343 25.9782 23.5343C27.2001 23.5343 28.3157 23.3218 29.2188 23.0031C30.0157 22.6843 30.547 22.2593 30.7063 21.8875C30.9188 21.25 31.6095 20.9312 32.247 21.1968C32.8845 21.4093 33.2032 22.1 32.9376 22.7375C32.5657 23.8 31.5563 24.7031 30.0688 25.2875C28.847 25.7125 27.4126 25.925 25.9251 25.925Z"
                  fill="#F0950C"
                ></path>
                <path
                  d="M25.9251 30.6C22.5782 30.6 19.922 29.4313 19.072 27.625C18.8063 27.0406 19.072 26.2969 19.6563 26.0313C20.2407 25.7656 20.9845 26.0313 21.2501 26.6156C21.622 27.4125 23.3751 28.2094 25.9782 28.2094C27.2001 28.2094 28.3157 27.9969 29.2188 27.6781C30.0157 27.3594 30.547 26.9344 30.7063 26.5625C30.9188 25.925 31.6095 25.6063 32.247 25.8719C32.8845 26.0844 33.2032 26.775 32.9376 27.4125C32.5657 28.475 31.5563 29.3781 30.0688 29.9625C28.847 30.3875 27.4126 30.6 25.9251 30.6Z"
                  fill="#F0950C"
                ></path>
                <path
                  d="M8.07495 21.25C3.9312 21.25 0.903076 19.4437 0.903076 17C0.903076 14.5031 3.9312 12.75 8.07495 12.75C12.2187 12.75 15.2468 14.5563 15.2468 17C15.2468 19.4969 12.2187 21.25 8.07495 21.25ZM8.07495 15.1406C5.09995 15.1406 3.2937 16.2563 3.2937 17C3.2937 17.7437 5.09995 18.8594 8.07495 18.8594C11.05 18.8594 12.8562 17.7437 12.8562 17C12.8562 16.2563 11.05 15.1406 8.07495 15.1406Z"
                  fill="#F0950C"
                ></path>
                <path
                  d="M8.07498 25.925C4.72811 25.925 2.07186 24.7562 1.22186 22.95C0.956234 22.3656 1.22186 21.6218 1.80623 21.3562C2.39061 21.0906 3.13436 21.3562 3.39998 21.9406C3.77186 22.7375 5.52498 23.5343 8.12811 23.5343C9.34999 23.5343 10.4656 23.3218 11.3687 23.0031C12.1656 22.6843 12.6969 22.2593 12.8562 21.8875C13.0687 21.25 13.7594 20.9312 14.3969 21.1968C15.0344 21.4093 15.3531 22.1 15.0875 22.7375C14.7156 23.8 13.7062 24.7031 12.2187 25.2875C11.05 25.7125 9.61561 25.925 8.07498 25.925Z"
                  fill="#F0950C"
                ></path>
                <path
                  d="M8.07498 30.6C4.78123 30.6 2.07186 29.4313 1.22186 27.625C0.956234 27.0406 1.22186 26.2969 1.80623 26.0313C2.39061 25.7656 3.13436 26.0313 3.39998 26.6156C3.77186 27.4125 5.52498 28.2094 8.12811 28.2094C9.34999 28.2094 10.4656 27.9969 11.3687 27.6781C12.1656 27.3594 12.6969 26.9344 12.8562 26.5625C13.0687 25.925 13.7594 25.6063 14.3969 25.8719C15.0344 26.0844 15.3531 26.775 15.0875 27.4125C14.7156 28.475 13.7062 29.3781 12.2187 29.9625C11.05 30.3875 9.56249 30.6 8.07498 30.6Z"
                  fill="#F0950C"
                ></path>
              </svg>
              <h4 class="mt-5 text-[16px] mb-2 font-medium text-[#66758c] text-2xl">Average Medicine Cost</h4>
              <h3 class="mb-2 text-[26px] font-bold text-black">
              ₹ {globalAverageMedicineCost} 
              </h3>
              <p class="flex items-center gap-1 text-sm font-medium">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.0155 4.74683H9.49366C9.23116 4.74683 9.01241 4.96558 9.01241 5.22808C9.01241 5.49058 9.23116 5.70933 9.49366 5.70933H11.6593L8.85928 7.59058C8.74991 7.67808 8.59678 7.67808 8.46553 7.59058L5.57803 5.68745C5.11866 5.3812 4.54991 5.3812 4.09053 5.68745L0.721783 7.94058C0.503033 8.0937 0.437408 8.39995 0.590533 8.6187C0.678033 8.74995 0.831157 8.83745 1.00616 8.83745C1.09366 8.83745 1.20303 8.81558 1.26866 8.74995L4.65928 6.49683C4.76866 6.40933 4.92178 6.40933 5.05303 6.49683L7.94053 8.42183C8.39991 8.72808 8.96866 8.72808 9.42803 8.42183L12.5124 6.3437V8.77183C12.5124 9.03433 12.7312 9.25308 12.9937 9.25308C13.2562 9.25308 13.4749 9.03433 13.4749 8.77183V5.22808C13.5187 4.96558 13.278 4.74683 13.0155 4.74683Z"
                    fill="#10B981"
                  ></path>
                </svg>
                <span class="text-[rgb(16, 185, 129)]">+2.6%</span>
                <span>than last Week</span>
              </p>
            
            </div>
            <div class="rounded-sm border-[2px] hover:border-blue-400 border-stroke bg-white p-4 shadow-xl dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-7.5" onClick={()=>setIsOpen(true)}>
              <h4 class="mt-5 text-[36px] mb-2 font-medium text-[#66758c] text-2xl">Add Medicine</h4>
              <h3 class="mb-2 text-[46px] font-bold text-black">
              +
              </h3>
            
            </div>
          </div>
        </div>
      </div>
      <div className="mt-7.5 p-4 md:p-6 2xl:p-10">
       <MedicinesSectionTable update={update} setIsUpdate={setIsUpdate}/>
      </div>
    </main>
  );
};

export default Medicines;
