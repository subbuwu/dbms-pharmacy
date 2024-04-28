

import { prisma } from "@/db/db";

const avgMedicineCost = await prisma.medicines.aggregate({
    _avg:{
      med_cost : true,
    },
})

const avgMedCost = avgMedicineCost._avg.med_cost


export async function GET() {

  try {
    return Response.json(avgMedCost);
    
  } catch (error) {
    console.error('Error fetching getMedicinesCost:', error);
    Response.json({ message: 'Internal Server Error' });
  }
}


