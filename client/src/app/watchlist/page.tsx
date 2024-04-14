import React from "react";
import WatchListPage from "./WatchListPage";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'WatchList Page',
  description: 'My watch list page',
}

type Props = {};

const watchList = (props: Props) => {
  return <div>
    <WatchListPage/>
  </div>;
};

export default watchList;
