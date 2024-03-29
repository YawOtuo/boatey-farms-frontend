"use client";
import useIsLoggedInReRoute from "@/lib/hooks/useIsLoggedInReRoute";
import { addMessage } from "@/lib/redux/reducers/messages";
import { setUserDetails } from "@/lib/redux/reducers/users";
import { logInWithEmailAndPassword } from "@/lib/utils/firebase";
import { Button, TextField } from "@mui/material";
import { styled } from "@stitches/react";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FarmVerify from "../login/components/FarmVerify";
import LoginOptions from "../login/components/LoginOptions";

const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isLoggedIn = useIsLoggedInReRoute(true, "/dashboard");

  const [activeIndex, setActiveIndex] = useState(0);

  const pages: JSX.Element[] = [
    <FarmVerify onSuccess={setActiveIndex} page="sign-up" />,
    <LoginOptions page="sign-up" />,
  ];
  return (
    <Root className="px-4  bg-grey bg-darkened view_height_100">
      <div className="flex flex-col lg:flex-row m-1 md:m-5  h-full ">
        <div className="flex-[0_0_50%] max-h-[50vh] lg:max-h-[100vh] lg:flex-[0_1_50%] aspect-square bg-[url('/images/livestockgrass.jpeg')] bg-cover bg-center flex flex-col justify-center items-center"></div>
        <div
          className="flex-[1_1_700px]
                py-0 lg:py-5 md:py-0 flex flex-col justify-center items-center
                 bg-white"
          style={{ height: "max-height" }}>
          <h1 className="mb-10  font-bold">
            <span className="font-semibold  text-black lowercase">liveStock</span>
            <span className="font-bold text-green1 uppercase">Diary</span>
          </h1>
          {pages[activeIndex]}
        </div>
      </div>
    </Root>
  );
};

const Root = styled("div", {});

export default Page;
