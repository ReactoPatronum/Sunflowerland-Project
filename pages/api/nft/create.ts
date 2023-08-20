// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prismadb from "@/lib/prismadb";
import type { NextApiRequest, NextApiResponse } from "next";
import { Nft } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

type Data = {
  isSuccess: boolean;
  message: string;
  nft?: Nft;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const requestMethod = req.method;
  if (requestMethod == "POST") {
    try {
      const { name, imageUrl } = req.body;
      console.log("ASDSAD", name, imageUrl);
      const session = await getServerSession(req, res, authOptions);

      if (session?.user.isAdmin !== true) {
        return res
          .status(403)
          .json({ isSuccess: false, message: "Access Denied!" });
      }

      if (!name || !imageUrl) {
        return res
          .status(400)
          .json({ isSuccess: false, message: "Fill in the required fields." });
      }

      const nft = await prismadb.nft.create({
        data: {
          name,
          imageUrl,
        },
      });
      return res
        .status(200)
        .json({ isSuccess: true, message: "Nft Successfully Created!", nft });
    } catch (error) {
      console.error(error);
      res.status(500).json({ isSuccess: false, message: "An error occurred." });
    }
  }
  return res
    .status(405)
    .json({ isSuccess: false, message: "Method not allowed" });
}
