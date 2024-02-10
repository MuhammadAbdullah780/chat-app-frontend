import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const nextAuthOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      credentials: {},
      authorize(credentials, req) {
        return { name: "hi", id: "asasas" };
      },
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, token, user }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
};
