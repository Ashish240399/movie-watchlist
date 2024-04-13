"use client";
import Form from "@/components/Form";
import { useAppDispatch } from "@/redux/hook";
import { setUser } from "@/redux/slices/userSlice";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const LoginPage = (props: Props) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  async function login(email: string) {
    console.log(email);
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });

    if (response.ok) {
      const user = await response.json();
      // Do something with the user
      console.log(user);
      dispatch(setUser({email: user.email,watchList: user.watchList}))
      router.push('/home')
    } else {
      // Handle error
      console.log(response.status)
    }
  }
  return (
    <div className='pt-[20%]'>
      <div className='w-[40%] m-auto'>
        <Form actionFn={login} title='Login' pageLink="Register" pageLinkText="Don't have an account? " />
      </div>
    </div>
  );
};

export default LoginPage;
