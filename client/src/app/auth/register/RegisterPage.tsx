"use client";
import Form from "@/components/Form";
import React from "react";

type Props = {};

const RegisterPage = (props: Props) => {
  async function register(email: string) {
    console.log(email);
    const response = await fetch("/api/register", {
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
    } else {
      // Handle error
    }
  }
  return (
    <div className='pt-[20%]'>
      <div className='w-[40%] m-auto'>
        <Form actionFn={register} title='Register' pageLink="Login" pageLinkText="Already have an account? " />
      </div>
    </div>
  );
};

export default RegisterPage;
