import { prisma } from "@/db/db.js";
const cors = require('cors');

export async function POST(request) {

    const { company_id , company_name } = await request.json();

   const parsedCompany_id = parseInt(company_id)


    await prisma.companies.create({
      data: {
        com_id : parsedCompany_id,
        com_name : company_name,
      },
    });


    const createdCompany = await prisma.companies.create({
        data: {
            com_id : parsedCompany_id,
            com_name : company_name,
          },
    });

    Response.status(200).json(createdCompany);

};
