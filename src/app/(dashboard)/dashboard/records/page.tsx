"use client";
import { useEffect, useState } from "react";

import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useMediaQuery } from "@mui/material";
import SlideEnter from "@/lib/framer/slideEnter";
import { DashSearch } from "@/components/dash-search";
import { RecordCard } from "@/components/record-card";
import { useQuery } from "@tanstack/react-query";
import { GetAllFarmRecordsSp } from "@/lib/api/farm";
import { RootState } from "@/lib/redux/store";

const cattleIcon = "/icons/cattle.png";
const goatIcon = "/icons/goat.png";
const sheepIcon = "/icons/sheep.png";

const Page = () => {
  const message = useSelector((state: RootState) => state.messages.message);
  const dispatch = useDispatch();
  const matches = useMediaQuery("(max-width: 800px");

  const userSqlData = useSelector(
    (state: RootState) => state?.users?.userSqlData
  );

  const {
    isLoading: isLoadingCattle,
    error: errorCattle,
    data: cattle,
  } = useQuery(
    ["cattle"],
    () => GetAllFarmRecordsSp(userSqlData?.farm_id as number, "cattle"),
    {
      enabled: !!userSqlData?.farm_id,
    }
  );
  const {
    isLoading: isLoadingGoats,
    error: errorGoats,
    data: goats,
  } = useQuery(
    ["goats"],
    () => GetAllFarmRecordsSp(userSqlData?.farm_id as number, "goats"),
    {
      enabled: !!userSqlData?.farm_id,
    }
  );
  const {
    isLoading: isLoadingSheep,
    error: errorSheep,
    data: sheep,
  } = useQuery(
    ["sheep"],
    () => GetAllFarmRecordsSp(userSqlData?.farm_id as number, "sheep"),
    {
      enabled: !!userSqlData?.farm_id,
    }
  );

  return (
    <>
      {/* {matches ? <MobileNav /> : <Navbar />} */}

      <SlideEnter>
        <div className="flex flex-col justify-center items-center w-full  md:mt-0">
          <div className="w-full">
            <div className="">
              {" "}
              <DashSearch />
            </div>
          </div>
          <div className=" w-4/5 md:w-3/5 ">
            <div className="mb-10 md:mb-0 ">
              <div className="">
                <RecordCard
                  number={goats?.length as number}
                  type="goats"
                  icon={goatIcon}
                />
              </div>
            </div>
            <div className="mb-10 md:mb-0">
              <div className="">
                <RecordCard
                  number={sheep?.length as number}
                  type="sheep"
                  icon={sheepIcon}
                />
              </div>
            </div>
            <div className="mb-10 md:mb-0">
              <div className="">
                <RecordCard
                  number={cattle?.length as number}
                  type="cattle"
                  icon={cattleIcon}
                />
              </div>
            </div>
          </div>
        </div>
      </SlideEnter>
    </>
  );
};

export default Page;
