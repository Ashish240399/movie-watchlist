"use client"
import MovieCard from '@/components/MovieCard'
import SearchBar from '@/components/SearchBar'
import { useAppSelector } from '@/redux/hook'
import { getMoviewByTitle } from '@/services/getMovieByTitle'
import { Button } from '@mui/material'
import React, { useState } from 'react'

type Props = {}

const HomePage = (props: Props) => {
    const user = useAppSelector((state)=>state.user)
    const [movieTitle, setMovieTitle] = useState<string>("");
    const [movieList,setMovieList] = useState<Movie | null>(null)
    const [movieNotFound,setMovieNotFound] = useState<boolean>(false)
    async function getMovieByTitleFn(){
        const response = await getMoviewByTitle(movieTitle);
        console.log(response);
        if (response.Response=="False"){
          setMovieNotFound(true)
        }
        else{
          setMovieNotFound(false)
          setMovieList(response)
        }
    }
    console.log(user)
  return (
    <div>
      <div className='flex'>
        <div className='flex-1'><SearchBar action={setMovieTitle}/></div>
        <Button sx={{
          width:"fit-content",
        }} onClick={getMovieByTitleFn} variant='contained'>Search</Button>
      </div>
        
        <div className='mt-5'>
          {movieList && <MovieCard movie={movieList} user={user} />}
          {movieNotFound && <div className='text-[30px] text-center'>Movie Not Found</div>}
        </div>
    </div>
  )
}

export default HomePage