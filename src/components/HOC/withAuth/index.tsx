import Spinner from "@/components/common/Spinner";
import { NextPageWithLayout } from "@/typings/types/next-layout.type";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const withAuth = (Component: NextPageWithLayout) => (props: any) => {
  // Hooks
  const session = useSession();
  const router = useRouter();

  // Vars
  const isLoading = session.status === "loading";
  const isAuthenticated = session.status === "authenticated";

  // Func
  const getLayout = Component.getLayout ?? ((page) => page);

  //
  if (isLoading) {
    return <Spinner wrapperClassName="h-screen" />;
  }

  if (isAuthenticated) {
    return getLayout(<Component />);
  } else {
    router.replace("/sign-in");
  }
};

export default withAuth;
