// File: api/deleteMedicine.js
import { prisma } from "@/db/db.js";


export async function DELETE(request) {
  try {
    const { id } = await request.json();

    await prisma.medicines.delete({
      where: {
        med_id: id,
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
