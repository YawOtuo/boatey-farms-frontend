"use client";
import { CustomLoaders } from "@/components/Loaders";
import { useScroll } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Comprehensive from "./components/Comprehensive";
import ThreePoints from "./components/ThreePoints";
import NewWay from "./components/NewWay";
import KeepTrack from "./components/KeepTrack";
import Updates from "./components/Updates";

export default function Home() {
  const router = useRouter();
  const { scrollYProgress, scrollY } = useScroll();

  useEffect(() => {
    console.log(scrollY);
    console.log("2", scrollYProgress);
  }, [router]);

  return (
    <div>
      <div className="mb-14">
        <Comprehensive />
      </div>{" "}
      <div className="px-5">
        <ThreePoints />
        <NewWay />
        <div className="flex flex-col gap-20 lg:gap-20">
          <KeepTrack />
          <Updates />
        </div>
      </div>
    </div>
  );
}