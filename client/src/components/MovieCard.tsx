"use client"
import { Card, CardContent, Rating } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import { addOrRemoveMoviesFromWatchList } from '@/services/addOrRemoveMoviesFromWatchList';
import { useAppDispatch } from '@/redux/hook';
import { setUser } from '@/redux/slices/userSlice';



type Props = {
    movie: Movie;
    user:{email:string,watchList:Movie[]};
};

const MovieCard = ({movie,user}: Props) => {
    const dispatch = useAppDispatch()
    console.log(user)
    return (
        <div>
            <Card>
                <CardContent sx={{
                    display:"flex",
                    justifyContent:"space-between",
                    gap:"20px",
                }}>
                    <div>
                    <Image src={movie.Poster} alt={movie.Title} width={200} height={400} style={{
                        width: '500px',
                        height: '400px',
                    }} />
                    </div>
                    <div>
                        <h2 className='text-[25px] font-bold flex justify-between items-center'>{movie.Title} <span className='cursor-pointer' onClick={async()=>{
                            const res = await addOrRemoveMoviesFromWatchList(user.email,movie)
                            dispatch(setUser(res))
                        }}>{user.watchList.some((obj:Movie)=>obj.Title==movie.Title)?<TurnedInIcon fontSize='large'/>:<TurnedInNotIcon fontSize='large' />}</span></h2>
                        <p><span className='text-[20px] font-bold'>Released on - </span>{movie.Released}</p>
                        <p><span className='text-[20px] font-bold'>Genre - </span>{movie.Genre}</p>
                        <p><span className='text-[20px] font-bold'>Plot - </span>{movie.Plot}</p>
                        <p><span className='text-[20px] font-bold'>Actors - </span>{movie.Actors}</p>
                        <p><span className='text-[20px] font-bold'>Director - </span>{movie.Director}</p>
                        <p><span className='text-[20px] font-bold'>Writer - </span>{movie.Writer}</p>
                        <div className='text-[20px] font-bold'>Rating</div>
                        <Rating size='large' name="half-rating-read" value={+movie.imdbRating} precision={0.5} readOnly max={10} />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default MovieCard;