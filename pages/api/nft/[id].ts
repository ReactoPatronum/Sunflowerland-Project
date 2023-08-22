import prismadb from "@/lib/prismadb";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { use } from "react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const requestMethod = req.method;
  if (requestMethod === "DELETE") {
    try {
      const { id } = req.query;
      const session = await getServerSession(req, res, authOptions);

      //   if (session?.user.isAdmin !== true) {
      //     return res
      //       .status(403)
      //       .json({ isSuccess: false, message: "Access Denied!" });
      //   }

      if (!id) {
        return res.status(400).json({
          isSuccess: false,
          message: "Required parameters are not given!",
        });
      }

      const deletedUser = await prismadb.nft.delete({
        where: {
          //@ts-expect-error
          id,
        },
      });

      return res
        .status(200)
        .json({ isSuccess: true, message: "Nft deleted successfully" });
    } catch (error) {
      return res.status(500).json({
        isSuccess: false,
        message: "An error occurred while deleting the nft",
      });
    }
  }
  return res
    .status(405)
    .json({ isSuccess: false, message: "Method not allowed" });
}
