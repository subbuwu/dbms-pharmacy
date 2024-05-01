// File: api/putMedicine.js
import { prisma } from "@/db/db.js";

export async function PUT(request) {
  try {
    const { updatedData, id } = await request.json();

    // Destructure data from updatedData
    const { brandName, medicineCost } = updatedData;

    const parsedMedicineCost = parseInt(medicineCost);

    await prisma.medicines.update({
      where: {
        med_id: id,
      },
      data: {
        med_name: brandName,
        med_cost: parsedMedicineCost,
      },
    });

    // Return success message
    return new Response(JSON.stringify("successful"), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    // Return error message if any
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
