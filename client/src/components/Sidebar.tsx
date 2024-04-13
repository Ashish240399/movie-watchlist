"use client";
import { colors } from "@/constants/Color";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { BsClockFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

type Props = {};

function Sidebar({}: Props) {
  const pathName = usePathname();
  return (
    <div className='px-[14%] py-6 flex justify-between flex-col h-[100%]'>
      <div>
        <div style={{ color: colors.red }} className={"font-bold text-[30px]"}>
          Watchlists
        </div>
        <Link href='/home'>
          <div
            style={
              pathName == "/home"
                ? {
                    backgroundColor: colors.red,
                    borderRadius: "5px",
                    color: "white",
                  }
                : {
                    backgroundColor: "transparent",
                    borderBottom: "2px solid gray",
                  }
            }
            className='h-[48px] w-[100%] flex items-center px-5 mt-7 cursor-pointer gap-3 text-[16px]'>
            <IoHomeSharp size={23} />
            Home
          </div>
        </Link>
        <Link href='/watchlist'>
          <div
            style={
              pathName == "/watchlist"
                ? {
                    backgroundColor: colors.red,
                    borderRadius: "5px",
                    color: "white",
                  }
                : {
                    backgroundColor: "transparent",
                    borderBottom: "2px solid gray",
                  }
            }
            className='h-[48px] w-[100%] flex items-center px-5 mt-7 cursor-pointer gap-3 text-[16px]'>
            <BsClockFill size={23} />
            WatchList
          </div>
        </Link>
      </div>

      <div>
        <Link href='/auth/login'>
          <div
            style={
              pathName.includes("/auth")
                ? { backgroundColor: colors.red, color: "white" }
                : {
                    backgroundColor: "transparent",
                    border: "2px solid #8080809a",
                  }
            }
            className='h-[48px] w-[100%] flex items-center px-5 mt-7 cursor-pointer gap-3 text-[16px] rounded-[5px]'>
            <FaUserCircle size={23} />
            Login
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
