import NextAuth from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '@/lib/prisma';
import jwt from 'jsonwebtoken';
import GoogleProvider from 'next-auth/providers/google';

const clientId = process.env.GOOGLE_CLIENT_ID as string;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET as string;

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId,
      clientSecret,
    }),
  ],
  // session: {
  //   strategy: 'jwt',
  //   maxAge: 7 * 24 * 60 * 60, // 7 days,
  // },
  // jwt: {
  //   async encode({ secret, token }: any) {
  //     return jwt.sign(token, secret);
  //   },
  //   async decode({ secret, token }) {
  //     // @ts-ignore
  //     return jwt.verify(token, secret);
  //   },
  // },
  // callbacks: {
  //   async signIn({ user, account, profile }) {
  //     return true;
  //   },
  //   async redirect({ url, baseUrl }) {
  //     return url;
  //   },
  //   async session({ session, user, token }) {
  //     return session;
  //   },
  //   async jwt({ token, user, account, profile, isNewUser }) {
  //     return token;
  //   },
  // },
  // pages: {},
  // events: {},
  secret: process.env.JWT_SECRET,
});
