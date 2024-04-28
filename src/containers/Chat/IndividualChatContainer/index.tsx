import Spinner from "@/components/common/Spinner";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ChatContainer from "./ChatContainer";
import NoChat from "./NoChat";

const IndividualChatContainer = () => {
  // const chatId = useSearchParams().get("chatId");
  const [query, setQuery] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  // const { loading } = useIsReady();

  useEffect(() => {
    setLoading(false);
  }, [router.isReady]);

  useEffect(() => {
    setQuery(router.query?.chatId! as string);
  }, [router.query]);

  if (loading) return <Spinner />;

  if (query) return <ChatContainer />;

  return <NoChat />;
};

export default IndividualChatContainer;
