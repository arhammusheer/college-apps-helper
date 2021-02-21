import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  // A database is optional, but required to persist accounts in a database
  database: process.env.MONGODB_URL,
  secret: process.env.NEXTAUTH_SECRET,
  session: { jwt: true, maxAge: 24 * 60 * 60 },
  jwt: { secret: process.env.JWT_SECRET, encryption: false },
  debug: true,
});
