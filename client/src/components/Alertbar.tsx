"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { clearAlert } from '@/redux/slices/alertbarSclice';

export default function Alertbar() {
  const horizontal = 'right';
  const vertical = 'bottom';
  const alertbar:Alert = useAppSelector(state=>state.alert)
  const dispatch = useAppDispatch()
  console.log(alertbar)

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(clearAlert());
  };

  React.useEffect(()=>{
    if(alertbar.content.length>0){
      setTimeout(()=>{
        dispatch(clearAlert());
      },5000)
    }
  },[alertbar.content,dispatch])

  return (
    <div>
      <Snackbar anchorOrigin={{horizontal,vertical}} open={alertbar.content==""?false:true} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={alertbar.type}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {alertbar.content}
        </Alert>
      </Snackbar>
    </div>
  );
}