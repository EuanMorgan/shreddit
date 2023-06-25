import {NextAuthOptions} from 'next-auth';
import {PrismaAdapter} from '@next-auth/prisma-adapter';
import {db} from './db';
import GoogleProvider from 'next-auth/providers/google';
import {env} from '@/env.mjs';
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: PrismaAdapter(db),
  secret: 'fuck',
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/sign-in',
  },
};
