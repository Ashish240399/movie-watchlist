"use client";
import { colors } from "@/constants/Color";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
  title: string;
  actionFn: Function;
  pageLink:string;
  pageLinkText:string;
};

const Form = ({ title, actionFn,pageLink,pageLinkText }: Props) => {
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
          <Typography sx={{
            fontSize:15,
            marginTop:"10px",
            color:"gray",
            textAlign:"end"
          }}>
            {pageLinkText} <Link style={{color:colors.red}} className="underline" href={`${"/auth/"+pageLink.toLowerCase()}`}>{pageLink}</Link>
          </Typography>
          <Button
            onClick={() => actionFn(email)}
            sx={{
              marginTop: "20px",
            }}
            disabled={email.length == 0 ? true : false}
            variant='contained'
            size='medium'>
            {title}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Form;
