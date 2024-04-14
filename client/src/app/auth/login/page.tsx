import React from "react";
import LoginPage from "./LoginPage";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Login',
  description: 'Login page for the app',
}

type Props = {};

const Login = (props: Props) => {
  return (
    <div>
      <LoginPage />
    </div>
  );
};

export default Login;
