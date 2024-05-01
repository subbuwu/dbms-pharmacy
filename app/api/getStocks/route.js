import { prisma } from "@/db/db";

export async function GET() {
  try {
    const stocks = await getStocks();
    return Response.json(stocks);
  } catch (error) {
    console.error('Error fetching stocks:', error);
    Response.json({ message: 'Internal Server Error' });
  }
}

async function getStocks() {
  const stocks = await prisma.stocks.findMany({
    select : {
        stock_id : true,
        stock_num : true,
    }
  });

  return stocks;
}
