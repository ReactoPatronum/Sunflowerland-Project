import prismadb from "@/lib/prismadb";
import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 10 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  callbacks: {
    async jwt({ token, account, user }) {
      try {
        if (user && account) {
          const { email, name, image } = user;
          const { provider } = account;

          if (name && email && image) {
            const getUser = await prismadb.user.findUnique({
              where: {
                email: email,
              },
            });

            if (!getUser) {
              await prismadb.user.create({
                data: {
                  name: name,
                  email: email,
                  image: image,
                  provider: provider,
                },
              });
            }
            const admin = getUser && getUser.isAdmin == true ? true : false;
            token.isAdmin = admin;
          }
        }
      } catch (error) {
        console.error("HATA:", error);
        throw new Error("Oturum işlemleri sırasında bir hata oluştu.");
      }

      return token;
    },
    async session({ session, token }) {
      const isAdmin =
        typeof token.isAdmin === "boolean" ? token.isAdmin : false;
      session.user = {
        ...session.user,
        isAdmin: isAdmin,
      };
      return Promise.resolve(session);
    },
  },
};

export default NextAuth(authOptions);
