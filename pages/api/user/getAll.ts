// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prismadb from "@/lib/prismadb";
import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "@prisma/client";

type Data = {
  isSuccess: boolean;
  message: string;
  data?: User[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const requestMethod = req.method;
  if (requestMethod == "GET") {
    try {
      const data: User[] = await prismadb.user.findMany();

      return res
        .status(200)
        .json({ isSuccess: true, message: "Fetched all user records", data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ isSuccess: false, message: "An error occurred." });
    }
  }
  return res
    .status(405)
    .json({ isSuccess: false, message: "Method not allowed" });
}
