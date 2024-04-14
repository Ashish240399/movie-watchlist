"use client";
import BasicModal from "@/components/BasicModal";
import Form from "@/components/Form";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setAlert } from "@/redux/slices/alertbarSclice";
import { setLoader } from "@/redux/slices/loaderSlice";
import { setModal } from "@/redux/slices/modalSlice";
import { registerFunction } from "@/services/registerFunction";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const RegisterPage = (props: Props) => {
  const router = useRouter()
  const loader = useAppSelector(state=>state.loader)
  const dispatch = useAppDispatch()
  function goLogin(){
    router.push("/auth/login")
    backfromModal()
  }
  function backfromModal(){
    dispatch(setModal({content:"",contentHead:"",actions:[]}))
  }
  async function register(email: string) {
    console.log(email);
    dispatch(setLoader({fn:true}))
    const response = await registerFunction(email);
    dispatch(setLoader({fn:false}))

    if (response.ok) {
      const user = await response.json();
      // Do something with the user
      dispatch(setModal({content:"You have successfully registered. Please login.",actions:[{ name: 'Login', fn: goLogin },{name:"Back",fn:backfromModal}],contentHead:"Registration Successful"}))
    } else {
      if (response.status===409){
        dispatch(setModal({content:"User already exists",actions:[{ name: 'Login', fn: goLogin },{name:"Back",fn:backfromModal}],contentHead:"Registration Failed"}))
      }
      else if(response.status===400){
        dispatch(setAlert({type:"error",content:"Bad request"}))
      }
    }
  }
  return (
    <div className='h-[95vh] flex items-center justify-center'>
      <div className='w-[90%] md:w-[80%] lg:w-[60%] xl:w-[40%] m-auto'>
        <Form actionFn={register} title='Register' pageLink="Login" pageLinkText="Already have an account? " />
      </div>
      <BasicModal/>
    </div>
  );
};

export default RegisterPage;
