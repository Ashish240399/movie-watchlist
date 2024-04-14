import React from "react";
import HomePage from "./HomePage";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Home Page',
  description: 'WatchList Home Page',
}

type Props = {};

const Home = (props: Props) => {
  return <div>
    <HomePage/>
  </div>;
};

export default Home;
