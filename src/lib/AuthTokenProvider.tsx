"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "@clerk/nextjs";
import { setToken } from "../redux/features/auth/authSlice";

export const AuthTokenProvider = () => {
  const { getToken } = useAuth();
  const { isSignedIn } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isSignedIn) return;

    const fetchToken = async () => {
      const token = await getToken({ template: "backend" });
      if (token) dispatch(setToken(token));
    };

    fetchToken();

    const interval = setInterval(fetchToken, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [getToken, dispatch, isSignedIn]);

  return null;
};
