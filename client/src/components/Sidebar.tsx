"use client";
import { colors } from "@/constants/Color";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { BsClockFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Avatar } from "@mui/material";
import { deepOrange, red } from "@mui/material/colors";
import { clearUser } from "@/redux/slices/userSlice";

type Props = {};

function Sidebar({}: Props) {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const pathName = usePathname();
  console.log(user);
  return (
    <div className="px-[4%] md:px-[6%] lg:px-[10%] xl:px-[14%] py-6 flex justify-between flex-col h-[100%]">
      <div>
        <div style={{ color: colors.red }} className={"font-bold text-[30px]"}>
          Watchlists
        </div>
        <Link href="/home">
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
            className="h-[48px] w-[100%] flex items-center px-5 mt-7 cursor-pointer gap-3 text-[16px]"
          >
            <IoHomeSharp size={23} />
            Home
          </div>
        </Link>
        <Link href="/watchlist">
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
            className="h-[48px] w-[100%] flex items-center px-5 mt-7 cursor-pointer gap-3 text-[16px]"
          >
            <BsClockFill size={23} />
            Watchlist
          </div>
        </Link>
      </div>

      <div>
        {user.email.length == 0 ? (
          <Link href="/auth/login">
            <div
              style={
                pathName.includes("/auth")
                  ? { backgroundColor: colors.red, color: "white" }
                  : {
                      backgroundColor: "transparent",
                      border: "2px solid #8080809a",
                    }
              }
              className="h-[48px] w-[100%] flex items-center px-5 mt-7 cursor-pointer gap-3 text-[16px] rounded-[5px]"
            >
              <FaUserCircle size={23} />
              Login
            </div>
          </Link>
        ) : (
          <div
            onClick={() => dispatch(clearUser())}
            style={
              pathName.includes("/auth")
                ? { backgroundColor: colors.red, color: "white" }
                : {
                    backgroundColor: "transparent",
                    border: "2px solid #8080809a",
                  }
            }
            className="h-[48px] w-[100%] flex items-center px-5 mt-7 cursor-pointer gap-3 text-[16px] rounded-[5px]"
          >
            <Avatar
              sx={{ bgcolor: red[500], color: "white", height: 30, width: 30 }}
              alt="Remy Sharp"
            >
              {user.email[0].toUpperCase()}
            </Avatar>
            Logout
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
