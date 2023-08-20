// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prismadb from "@/lib/prismadb";
import type { NextApiRequest, NextApiResponse } from "next";
import { Nft } from "@prisma/client";

type Data = {
  isSuccess: boolean;
  message: string;
  allNfts?: Nft[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const requestMethod = req.method;
  if (requestMethod == "GET") {
    try {
      const allNfts: Nft[] = await prismadb.nft.findMany();
      return res
        .status(200)
        .json({ isSuccess: true, message: "Fetched all nft records", allNfts });
    } catch (error) {
      console.error(error);
      res.status(500).json({ isSuccess: false, message: "An error occurred." });
    }
  }
  return res
    .status(405)
    .json({ isSuccess: false, message: "Method not allowed" });
}
