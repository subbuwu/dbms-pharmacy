import { prisma } from "@/db/db";

export async function GET() {
  try {
    const companies = await getCompanies();
    return Response.json(companies);
  } catch (error) {
    console.error('Error fetching companies:', error);
    Response.json({ message: 'Internal Server Error' });
  }
}

async function getCompanies() {
  const medicines = await prisma.companies.findMany({
    select : {
        com_id : true,
        com_name : true,
    }
  });

  return medicines;
}
