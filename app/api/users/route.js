// pages/api/users.js

import { prisma } from "@/db/db";

export async function GET() {

  try {
    const users = await getUsersFromDatabase();

    return Response.json(users);
    
  } catch (error) {
    console.error('Error fetching users:', error);
    Response.json({ message: 'Internal Server Error' });
  }
}

async function getUsersFromDatabase() {
  const users = await prisma.users.findMany({
    select: {
      username: true,
      user_email: true,
      login: {
        select: {
          user_pw: true, 
        },
      },
    },
  });

  return users;
}
