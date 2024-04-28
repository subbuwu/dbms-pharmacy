import { prisma } from "@/db/db.js";
const cors = require('cors');

export async function POST(request) {

    const { medicine_name, medicine_cost, company_id, stockId } = await request.json();

   const parsedMedicine_cost = parseInt(medicine_cost)
   const parsedCompany_id = parseInt(company_id)
    const parsedStockId = parseInt(stockId)



    await prisma.medicines.create({
      data: {
        med_name: medicine_name,
        med_cost: parsedMedicine_cost,
        com_id: parsedCompany_id,
        stock_id: parsedStockId,
      },
    });


    const createdMedicine = await prisma.medicines.create({
      data: {
        med_name: medicine_name,
        med_cost: medicine_cost,
        com_id: company_id,
        stock_id: stockId,
      },
    });

    Response.status(200).json(createdMedicine);

};
