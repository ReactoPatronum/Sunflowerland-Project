import type { GetServerSideProps } from "next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { getToken } from "next-auth/jwt";

export function withAuthAdmin(gssp: GetServerSideProps): GetServerSideProps {
  return async (context) => {
    const session = await getServerSession(
      context.req,
      context.res,
      authOptions
    );
    // let req = context.req;
    // const token = await getToken({ req });
    // if (session?.user.isAdmin !== true) {
    //   return {
    //     redirect: { statusCode: 302, destination: "/forbidden" },
    //   };
    // }
    const gsspData = await gssp(context);

    if (!("props" in gsspData)) {
      throw new Error("invalid getSSP result");
    }

    return {
      props: {
        ...gsspData.props,
      },
    };
  };
}
