"use client"
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { setLoader } from '@/redux/slices/loaderSlice';

export default function Loader() {
  const loader = useAppSelector((state)=>state.loader);
  const dispatch = useAppDispatch()
  const handleClose = () => {
    dispatch(setLoader({fn:false}))
  };

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader.fn===true?true:false}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}