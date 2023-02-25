import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
// Initialize NextAuth
export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/options#secret
  secret: process.env.NEXTAUTH_SECRET,
  // https://next-auth.js.org/configuration/options#session
  session: {
    strategy: 'jwt',
    // Seconds
    // maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  // https://next-auth.js.org/configuration/options#pages
  pages: {
    signIn: '/auth/signin',
    // verifyRequest: '/auth/verify-request',
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'milkmidi' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: '1', name: 'milkmidi', email: 'milkmidi@gmail.com' };
        // @ts-ignore
        const { username, password } = credentials;
        if (username === 'milkmidi' && password === '123456') {
          return user;
        }
        // If you return null then an error will be displayed advising the user to check their details.
        return null;
        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      },
    }),
  ],
  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log('signIn');
      console.log(user);
      console.log(account);
      console.log(profile);
      console.log(email);
      console.log(credentials);
      return true;
    },
  },
};
export default NextAuth(authOptions);
