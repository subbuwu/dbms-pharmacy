// pages/api/users.js

import { prisma } from "@/db/db";

export async function GET() {

  try {
    const getMedicinesCount = await getMedicinesCountFromDatabase();

    return Response.json(getMedicinesCount);
    
  } catch (error) {
    console.error('Error fetching getMedicinesCount:', error);
    Response.json({ message: 'Internal Server Error' });
  }
}

async function getMedicinesCountFromDatabase() {
  const getMedicinesCount = await prisma.medicines.findMany({});

  return getMedicinesCount;
}
