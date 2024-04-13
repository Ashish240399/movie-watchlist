"use client"
import { colors } from '@/constants/Color';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { setUser } from '@/redux/slices/userSlice';
import { addOrRemoveMoviesFromWatchList } from '@/services/addOrRemoveMoviesFromWatchList';
import { Card, Rating } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { MdDelete } from "react-icons/md";

type Props = {
    movie: Movie,
}

const WatchListCard = ({movie}: Props) => {
    const user = useAppSelector((state)=>state.user)
    const dispatch = useAppDispatch()
  return (
    <div className='w-full h-full relative'>
        <Card sx={{
            width:"100%",
            height:"100%",
            paddingBottom:"10px",
        }}>
            <Image src={movie.Poster} alt={movie.Title} width={100} height={200} style={{
                width: '100%',
                height: '400px',
            }} />
            <div className='px-4 text-[18px] font-bold mt-2'>{movie.Title}</div>
            <div className='px-4'>{movie.Year}</div>
            <div className='px-4'>
            <Rating size='small' name="half-rating-read" value={+movie.imdbRating/2} precision={0.5} readOnly />
            </div>
            
        </Card>
        <div onClick={async()=>{
                const res = await addOrRemoveMoviesFromWatchList(user.email,movie)
                dispatch(setUser(res))
            }} style={{
            color:colors.red
        }} className='absolute bottom-3 right-1 hover:cursor-pointer'>
            <MdDelete size={30}/>
        </div>
    </div>
  )
}

export default WatchListCard