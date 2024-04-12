"use client";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

type Props = {
  title: string;
  actionFn: Function;
};

const Form = ({ title, actionFn }: Props) => {
  const [email, setEmail] = useState("");
  return (
    <div className='w-full'>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 24 }} color='text.secondary' gutterBottom>
            {title}
          </Typography>
          <TextField
            sx={{
              width: "100%",
            }}
            id='email'
            label='Email'
            variant='outlined'
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            onClick={() => actionFn(email)}
            sx={{
              marginTop: "20px",
            }}
            variant='contained'
            size='medium'>
            Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Form;
