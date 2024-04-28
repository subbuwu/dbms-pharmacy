import { prisma } from "@/db/db";

export async function GET() {
  try {
    const medicines = await getMedicines();
    return Response.json(medicines);
  } catch (error) {
    console.error('Error fetching medicines:', error);
    Response.json({ message: 'Internal Server Error' });
  }
}

async function getMedicines() {
  const medicines = await prisma.medicines.findMany({
    select: {
      med_name: true,
      med_cost: true,
      companies: {
        select: {
          com_name:true,
        }
      },
      stocks: {
        select: {
          stock_num: true,
        }
      }
    }
  });

  return medicines;
}
