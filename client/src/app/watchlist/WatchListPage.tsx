"use client"
import MovieCard from '@/components/MovieCard';
import SearchBar from '@/components/SearchBar';
import { getMoviewByTitle } from '@/services/getMovieByTitle';
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'

type Props = {}

const WatchListPage = (props: Props) => {
    const [movieTitle, setMovieTitle] = useState<string>("");
    const [movieList,setMovieList] = useState<Movie | null>(null)
    async function getMovieByTitleFn(){
        const response = await getMoviewByTitle(movieTitle);
        setMovieList(response)
    }
    console.log(movieList)
  return (
    <div>
        <SearchBar action={setMovieTitle}/>
        <Button onClick={getMovieByTitleFn} variant='contained'>Search</Button>
        <div>
          {movieList && <MovieCard movie={movieList} />}
        </div>
    </div>
  )
}

export default WatchListPage