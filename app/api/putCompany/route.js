
import { prisma } from "@/db/db.js";

export async function PUT(request) {
  try {
    
    const { editedComName,com_id } = await request.json();

    const parsedComId = parseInt(com_id);

    await prisma.companies.update({
      where: {
        com_id: parsedComId,
      },
      data: {
        com_name : editedComName
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
