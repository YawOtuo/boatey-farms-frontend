import { styled } from "@stitches/react";
import NavAccordion from "./navAccordion";
import { IoIosContact } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import Link from "next/link";
import { getStatus } from "@/lib/utils/permissions";

const SideNav = () => {
  const dispatch = useDispatch();

  const { userData } = useSelector((state: RootState) => state?.users);
  return (
    <Root className="">
      <div className="flex  flex-col capitalize items-center gap-2 text-white">
        <IoIosContact color="white" size={40} />
        <p className="mb-0 text-xs">
          {getStatus(userData?.permission)}: &nbsp;
          <span className="text-[#0FA958]">{userData?.username || ""}</span>
        </p>
      </div>
      <div className="h-full flex flex-col gap-10">
        <NavButtons>
          <Link href={"/dashboard"}>Home</Link>
        </NavButtons>
        <NavButtons>
          <NavAccordion items={["sheep", "goats", "cattle"]} label="Records" />
        </NavButtons>
        <NavButtons>
          <Link href={"/workers"}>Workers</Link>
        </NavButtons>
        {/* <NavButtons><Link>Finances</Link></NavButtons> */}
        {/* <NavButtons><Link>Notifications</Link></NavButtons> */}

        {/* <NavButtons><Link >Settings</Link></NavButtons> */}

        {/* <Logout/> */}
      </div>
      <div>
        <p className="text-xs text-[#0FA958]">{userData?.email}</p>
      </div>
    </Root>
  );
};

const Root = styled("div", {
  paddingBottom: "5px",
  backgroundColor: "#446353fa",
  paddingTop: "40px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "5%",
  justifyContent: "between",
  alignItems: "center",
});

export const NavButtons = styled("div", {
  color: "white",
});

export default SideNav;
