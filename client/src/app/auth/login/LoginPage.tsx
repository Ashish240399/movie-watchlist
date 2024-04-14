"use client";

// Importing required components and hooks from different modules
import Alertbar from "@/components/Alertbar";
import Form from "@/components/Form";
import Loader from "@/components/Loader";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setAlert } from "@/redux/slices/alertbarSclice";
import { setLoader } from "@/redux/slices/loaderSlice";
import { setUser } from "@/redux/slices/userSlice";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const LoginPage = (props: Props) => {
  // Using hooks to dispatch actions and select state from the Redux store
  const dispatch = useAppDispatch();
  const loader = useAppSelector((state) => state.loader);
  const alert = useAppSelector((state) => state.alert);
  const userData = useAppSelector((state) => state.userData);
  const router = useRouter();

  // Function to handle login
  async function login(email: string) {
    console.log(email);
    // Dispatching action to show loader
    dispatch(setLoader({ fn: true }));

    // Calling login function
    const response = userData.find((user) => user.email === email);

    // Dispatching action to hide loader
    dispatch(setLoader({ fn: false }));

    // Checking if the response is ok
    if (response) {
      const user = response;
      // Dispatching action to set user
      dispatch(setUser({ email: user.email, watchList: user.watchList }));
      // Navigating to home page
      router.push("/home");
    } else {
      // Handle error
      // Dispatching action to show alert
      dispatch(setAlert({ content: "User not found", type: "error" }));
    }
  }

  // Rendering the component
  return (
    <div className="h-[95vh] flex items-center justify-center">
      <div className="w-[90%] md:w-[80%] lg:w-[60%] xl:w-[40%] m-auto">
        <Form
          actionFn={login}
          title="Login"
          pageLink="Register"
          pageLinkText="Don't have an account? "
        />
      </div>
      {alert.content.length > 0 && <Alertbar />}
      {loader.fn && <Loader />}
    </div>
  );
};

export default LoginPage;
