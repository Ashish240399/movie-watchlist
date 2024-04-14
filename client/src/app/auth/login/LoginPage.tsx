"use client";
import Alertbar from "@/components/Alertbar";
import Form from "@/components/Form";
import Loader from "@/components/Loader";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setAlert } from "@/redux/slices/alertbarSclice";
import { setLoader } from "@/redux/slices/loaderSlice";
import { setUser } from "@/redux/slices/userSlice";
import { loginFunction } from "@/services/loginFunction";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const LoginPage = (props: Props) => {
  const dispatch = useAppDispatch()
  const loader = useAppSelector(state=>state.loader)
  const alert = useAppSelector(state=>state.alert)
  const router = useRouter()
  async function login(email: string) {
    console.log(email);
    dispatch(setLoader({fn:true}))
    const response = await loginFunction(email);

    dispatch(setLoader({fn:false}))

    if (response.ok) {
      const user = await response.json();
      // Do something with the user
      console.log(user);
      dispatch(setUser({email: user.email,watchList: user.watchList}))
      router.push('/home')
    } else {
      // Handle error
      if (response.status === 404) {
        dispatch(setAlert({content:"User not found",type:"error"}))
      }
    }
  }
  return (
    <div className='h-[95vh] flex items-center justify-center'>
      <div className='w-[90%] md:w-[80%] lg:w-[60%] xl:w-[40%] m-auto'>
        <Form actionFn={login} title='Login' pageLink="Register" pageLinkText="Don't have an account? " />
      </div>
      {alert.content.length>0 && <Alertbar/>}
      {loader.fn && <Loader/>}
    </div>
  );
};

export default LoginPage;
