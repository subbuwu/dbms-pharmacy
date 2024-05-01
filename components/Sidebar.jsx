"use client"
import { useAuthStore } from '@/app/store/authStore'
import { useRouter } from 'next/navigation'
import React from 'react'

const Sidebar = () => {
   const currentUser = useAuthStore((state) => state.currentUser)
   const currentlyActive = useAuthStore((state) => state.currentlyActive)
   const updateCurrentlyActive = useAuthStore((state) => state.updateCurrentlyActive)

  return (
    <aside id="default-sidebar" class="relative top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul class="space-y-2  px-3 py-4 font-medium">
         <li onClick={()=>updateCurrentlyActive("medicines")}>
            
            <a href="#" class={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ${currentlyActive === "medicines" && "bg-gray-700"} dark:hover:bg-gray-700 group`}>
               <svg width="30px" height="30px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="rgb(107 114 128)" d="M217.4 27.43c-27.9.47-53.1 17.11-64.5 42.84l136.5 41.23c6-35.79-15.5-70.49-50.1-81.02-6.2-1.88-12.7-2.91-19.2-3.05h-2.7zm-69.7 60.08c-6.1 35.89 15.4 70.69 50.1 81.19 34.8 10.5 71.9-6.7 86.5-40zm265.5 44.29c-25.3.1-52.2 12.3-72.5 41L215.9 349.7c-33.5 47.4-18.9 97 14.1 120.4 33.1 23.5 84.6 20.8 118.1-26.6l124.7-176.8c33.5-47.5 18.9-97-14.1-120.5-12.4-8.8-27.3-13.9-43-14.4zm-1.8 17.3c1.3 0 2.6 0 3.8.1 12.1.5 23.5 4.8 33.1 11.7 25.7 18.2 38.6 54.5 9.7 95.4l-64.5 91.5c-35.8-9.6-81.8-42.3-102.7-73l64.7-91.6c16.9-23.9 37-33.7 55.9-34.1zM91.25 225.3c-9.62.1-19.11 2.1-27.93 6-33.11 14.5-50.34 51.5-40.24 86.3l130.72-57.1c-13.1-22.1-36.9-35.5-62.55-35.2zm69.65 51.6L30.2 334.1c18.45 31.4 57.3 44 90.6 29.5 33.2-14.6 50.4-51.8 40.1-86.7z"/></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Medicines</span>
            </a>
         </li>
         <li onClick={()=>updateCurrentlyActive("companies")}>
            <a href="#" class={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ${currentlyActive === "companies" && "bg-gray-700"} dark:hover:bg-gray-700 group`}>
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill="rgb(107 114 128)" d="M11 20H21V10C21 8.89543 20.1046 8 19 8H15M11 16H11.01M17 16H17.01M7 16H7.01M11 12H11.01M17 12H17.01M7 12H7.01M11 8H11.01M7 8H7.01M15 20V6C15 4.89543 14.1046 4 13 4H5C3.89543 4 3 4.89543 3 6V20H15Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Companies</span>
            </a>
         </li>
         <li onClick={()=>updateCurrentlyActive("stocks")}>
            <a href="#" class={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ${currentlyActive === "stocks" && "bg-gray-700"} dark:hover:bg-gray-700 group`}>
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill="rgb(107 114 128)" d="M8.42229 20.6181C10.1779 21.5395 11.0557 22.0001 12 22.0001V12.0001L2.63802 7.07275C2.62423 7.09491 2.6107 7.11727 2.5974 7.13986C2 8.15436 2 9.41678 2 11.9416V12.0586C2 14.5834 2 15.8459 2.5974 16.8604C3.19479 17.8749 4.27063 18.4395 6.42229 19.5686L8.42229 20.6181Z" />
<path opacity="0.7" d="M17.5774 4.43152L15.5774 3.38197C13.8218 2.46066 12.944 2 11.9997 2C11.0554 2 10.1776 2.46066 8.42197 3.38197L6.42197 4.43152C4.31821 5.53552 3.24291 6.09982 2.6377 7.07264L11.9997 12L21.3617 7.07264C20.7564 6.09982 19.6811 5.53552 17.5774 4.43152Z" fill="rgb(107 114 128)"/>
<path opacity="0.5" d="M21.4026 7.13986C21.3893 7.11727 21.3758 7.09491 21.362 7.07275L12 12.0001V22.0001C12.9443 22.0001 13.8221 21.5395 15.5777 20.6181L17.5777 19.5686C19.7294 18.4395 20.8052 17.8749 21.4026 16.8604C22 15.8459 22 14.5834 22 12.0586V11.9416C22 9.41678 22 8.15436 21.4026 7.13986Z" fill="rgb(107 114 128)"/>
<path d="M6.32334 4.48382C6.35617 4.46658 6.38926 4.44922 6.42261 4.43172L7.91614 3.64795L17.0169 8.65338L21.0406 6.64152C21.1783 6.79745 21.298 6.96175 21.4029 7.13994C21.5525 7.39396 21.6646 7.66352 21.7487 7.96455L17.7503 9.96373V13.0002C17.7503 13.4144 17.4145 13.7502 17.0003 13.7502C16.5861 13.7502 16.2503 13.4144 16.2503 13.0002V10.7137L12.7503 12.4637V21.9042C12.4934 21.9682 12.2492 22.0002 12.0003 22.0002C11.7515 22.0002 11.5072 21.9682 11.2503 21.9042V12.4637L2.25195 7.96455C2.33601 7.66352 2.44813 7.39396 2.59771 7.13994C2.70264 6.96175 2.82232 6.79745 2.96001 6.64152L12.0003 11.1617L15.3865 9.46857L6.32334 4.48382Z" fill="rgb(107 114 128)"/>
</svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Stocks</span>
            </a>
         </li>
      </ul>
      <div class="flex w-full items-center px-4 py-6 text-gray-900 rounded-tl-lg rounded-tr-lg dark:text-white font-bold text-lg   group bg-gray-700 fixed bottom-0">
         <span className='mr-4'>Welcome {currentUser}</span> <img class="w-10 h-10 rounded-full" src="https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png" alt="Rounded avatar"></img>
      </div>
   </div>

</aside>
  )
}

export default Sidebar