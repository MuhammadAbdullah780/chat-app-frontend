import { SessionProvider } from "next-auth/react";
import React from "react";

type Props = {
  session: any;
  children: React.ReactNode;
};

const AuthProvider = ({ children, session }: Props) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default AuthProvider;
