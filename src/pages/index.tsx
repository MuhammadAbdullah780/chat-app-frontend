import { useAppDispatch } from "@/store/hooks";
import { AuthThunk } from "@/store/thunks/auth.thunk";
import { NextPage } from "next";
import React, { useEffect } from "react";

type Props = {};

const HomePage: NextPage = (props: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(AuthThunk.LOGIN());
  }, []);

  return <div>HomePage</div>;
};

export default HomePage;
