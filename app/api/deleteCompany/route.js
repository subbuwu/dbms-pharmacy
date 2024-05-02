// File: api/deleteMedicine.js
import { prisma } from "@/db/db.js";


export async function DELETE(request) {
  try {
    const { com_id } =  await request.json();

    await prisma.companies.delete({
      where: {
        com_id: com_id,
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
