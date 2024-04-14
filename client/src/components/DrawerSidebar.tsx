"use client"
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { colors } from '@/constants/Color';
import MenuIcon from '@mui/icons-material/Menu';
import { FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoHomeSharp } from 'react-icons/io5';
import { BsClockFill } from 'react-icons/bs';
import { clearUser } from '@/redux/slices/userSlice';
import { Avatar } from '@mui/material';
import { red } from '@mui/material/colors';
import { useAppDispatch, useAppSelector } from '@/redux/hook';

export default function DrawerSidebar() {
   // Using hooks to dispatch actions and select state from the Redux store
  const pathName = usePathname()
  const dispatch = useAppDispatch()
  const user = useAppSelector((state)=>state.user)

  // State for controlling the open/close state of the drawer
  const [open, setOpen] = React.useState(false);

  // Function to toggle the state of the drawer
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // JSX for the list of items in the drawer
  const DrawerList = (
    <div className='px-[4%] md:px-[6%] lg:px-[10%] xl:px-[14%] py-6 flex justify-between flex-col h-[100%] w-[60vw]'>
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
            Watchlist
          </div>
        </Link>
      </div>

      <div>
        {user.email.length==0 ? <Link href='/auth/login'>
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
        </Link> :
          <div onClick={()=>dispatch(clearUser())}
            style={
              pathName.includes("/auth")
                ? { backgroundColor: colors.red, color: "white" }
                : {
                    backgroundColor: "transparent",
                    border: "2px solid #8080809a",
                  }
            }
            className='h-[48px] w-[100%] flex items-center px-5 mt-7 cursor-pointer gap-3 text-[16px] rounded-[5px]'>
            <Avatar
              sx={{ bgcolor: red[500], color: "white", height: 30, width: 30 }}
              alt="Remy Sharp"
            >
              {user.email[0].toUpperCase()}
            </Avatar>
            Logout
          </div>}
        
      </div>
    </div>
  );

  return (
    <div>
      <div style={{ color: colors.red }} className={"font-bold text-[20px] flex items-center gap-0"}>
          <Button onClick={toggleDrawer(true)}>
              <MenuIcon />
          </Button>
          Watchlists
      </div>
      
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}