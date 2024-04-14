"use client"
import MovieCard from '@/components/MovieCard'
import SearchBar from '@/components/SearchBar'
import { colors } from '@/constants/Color'
import { useAppDispatch, useAppSelector } from '@/redux/hook'
import { getMoviewByTitle } from '@/services/getMovieByTitle'
import { Button } from '@mui/material'
import React, { useState } from 'react'
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import Alertbar from '@/components/Alertbar'
import { setLoader } from '@/redux/slices/loaderSlice'
import Loader from '@/components/Loader'
import { setAlert } from '@/redux/slices/alertbarSclice'

type Props = {}

const HomePage = (props: Props) => {
    const user = useAppSelector((state)=>state.user)
    const alert = useAppSelector((state)=>state.alert)
    const loader = useAppSelector((state)=>state.loader)
    const dispatch = useAppDispatch()
    const [movieTitle, setMovieTitle] = useState<string>("");
    const [movieList,setMovieList] = useState<Movie | null>(null)
    const [movieNotFound,setMovieNotFound] = useState<boolean>(false)
    async function getMovieByTitleFn(){
      dispatch(setLoader({fn:true}))
        const response = await getMoviewByTitle(movieTitle);
        console.log(response);
        dispatch(setLoader({fn:false}))
        if (response.Response=="False"){
          setMovieNotFound(true)
          setMovieList(null)
        }
        else if(response.Response == "True"){
          setMovieNotFound(false)
          setMovieList(response)
        }
        else{
          dispatch(setAlert({content:"Server Error! Please try agin later",type:"error"}))
        }
    }
  return (
    <div>
      <div style={{
        border:`1px solid ${colors.red}`,
      }} className='mb-[4%] rounded-md p-4'>
        <p className='text-[40px]'>Welcome to <span style={{color:colors.red}}>Watchlists</span></p>
        <p className='mt-[3%]'>Search movies, add them to your watchlist</p>
        <p className='mt-[1%]'>By clicking on <TurnedInNotIcon/>, the movie will be added to your watchlist</p>
      </div>
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
        {alert.content.length>0 && <Alertbar/>}
        {loader.fn && <Loader/>}
    </div>
  )
}

export default HomePage