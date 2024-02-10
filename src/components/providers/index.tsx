import React from "react";
import AuthProvider from "./AuthProvider";
import ReduxProvider from "./ReduxProvider";

type Props = {
  session: any;
  children: React.ReactNode;
};

const AppProvider = ({ session, children }: Props) => {
  return (
    <AuthProvider session={session}>
      <ReduxProvider>{children}</ReduxProvider>
    </AuthProvider>
  );
};

export default AppProvider;
