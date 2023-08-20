import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      isAdmin: boolean | undefined;
      name: string;
      email: string;
      image: string;
    };
  }
}
