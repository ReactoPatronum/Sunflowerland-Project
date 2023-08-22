// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prismadb from "@/lib/prismadb";
import type { NextApiRequest, NextApiResponse } from "next";
import { Nft } from "@prisma/client";

type Data = {
  isSuccess: boolean;
  message: string;
  data?: Nft[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const requestMethod = req.method;
  if (requestMethod == "GET") {
    try {
      const data: Nft[] = await prismadb.nft.findMany();
      return res
        .status(200)
        .json({ isSuccess: true, message: "Fetched all nft records", data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ isSuccess: false, message: "An error occurred." });
    }
  }
  return res
    .status(405)
    .json({ isSuccess: false, message: "Method not allowed" });
}
