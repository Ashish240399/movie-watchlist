"use client"

// Importing required components, hooks, and slices
import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { clearAlert } from '@/redux/slices/alertbarSclice';

export default function Alertbar() {
  // Defining constants for Snackbar position
  const horizontal = 'right';
  const vertical = 'bottom';

  // Using hooks to dispatch actions and select state from the Redux store
  const alertbar:Alert = useAppSelector(state=>state.alert)
  const dispatch = useAppDispatch()
  console.log(alertbar)

  // Function to handle Snackbar close
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    // Dispatching action to clear alert
    dispatch(clearAlert());
  };

  // Using useEffect hook to clear alert after 5 seconds
  React.useEffect(()=>{
    if(alertbar.content.length>0){
      setTimeout(()=>{
        dispatch(clearAlert());
      },5000)
    }
  },[alertbar.content,dispatch])

  // Rendering the component
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