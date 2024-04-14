"use client";

// Importing required components and hooks from different modules
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
  // Using hooks to dispatch actions and select state from the Redux store
  const router = useRouter()
  const loader = useAppSelector(state=>state.loader)
  const dispatch = useAppDispatch()

  // Function to navigate to login page and close modal
  function goLogin(){
    router.push("/auth/login")
    backfromModal()
  }

  // Function to close modal
  function backfromModal(){
    dispatch(setModal({content:"",contentHead:"",actions:[]}))
  }

  // Function to handle registration
  async function register(email: string) {
    console.log(email);
    // Dispatching action to show loader
    dispatch(setLoader({fn:true}))

    // Calling register function
    const response = await registerFunction(email);

    // Dispatching action to hide loader
    dispatch(setLoader({fn:false}))

    // Checking if the response is ok
    if (response.ok) {
      const user = await response.json();
      // Dispatching action to show modal with success message
      dispatch(setModal({content:"You have successfully registered. Please login.",actions:[{ name: 'Login', fn: goLogin },{name:"Back",fn:backfromModal}],contentHead:"Registration Successful"}))
    } else {
      // Handle error
      if (response.status===409){
        // Dispatching action to show modal with error message
        dispatch(setModal({content:"User already exists",actions:[{ name: 'Login', fn: goLogin },{name:"Back",fn:backfromModal}],contentHead:"Registration Failed"}))
      }
      else if(response.status===400){
        // Dispatching action to show alert with error message
        dispatch(setAlert({type:"error",content:"Bad request"}))
      }
    }
  }

  // Rendering the component
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