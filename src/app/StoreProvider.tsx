"use client";

import { Provider } from "react-redux";
import type { ReactNode } from "react";
import { useRef, useEffect } from "react";
import { store } from "../redux/store";
import { setupListeners } from "@reduxjs/toolkit/query";

interface Props {
  readonly children: ReactNode;
}

export const StoreProvider = ({ children }: Props) => {
  const storeRef = useRef(store);

  useEffect(() => {
    setupListeners(storeRef.current.dispatch);
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
};
