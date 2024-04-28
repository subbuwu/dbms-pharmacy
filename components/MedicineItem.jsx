import React from 'react'

const MedicineItem = ({ companyName, brandName, medicineCost, stockContent }) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 border-b border-stroke dark:border-strokedark">
      <div class="p-2.5 text-center xl:p-4 bg-[#b7cbeb]">
              <h5 class="text-[#22272f]  text-[16px] font-semibold uppercase xsm:text-base">
                {brandName}
              </h5>
      </div>
      <div class="p-2.5 text-center xl:p-4 bg-[#f7f9fc]">
              <h5 class="text-[#22272f] text-[16px] font-semibold uppercase xsm:text-base">
                {medicineCost}
              </h5>
            </div>
            <div class="p-2.5 text-center xl:p-4 bg-[#f7f9fc]">
              <h5 class="text-[#22272f]  text-[16px] font-semibold uppercase xsm:text-base">
                {companyName}
              </h5>
            </div>
            <div class="p-2.5 text-center xl:p-4 bg-[#f7f9fc]">
              <h5 class="text-[#22272f]  text-[16px] font-semibold uppercase xsm:text-base">
                {stockContent}
              </h5>
            </div>
  </div>
  )
}

export default MedicineItem