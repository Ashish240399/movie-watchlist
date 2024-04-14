"use client"

// Importing required components, hooks, services, and constants
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
    // Using hooks to dispatch actions and select state from the Redux store
    const user = useAppSelector((state)=>state.user)
    const alert = useAppSelector((state)=>state.alert)
    const loader = useAppSelector((state)=>state.loader)
    const dispatch = useAppDispatch()

    // Using useState hook to manage local state
    const [movieTitle, setMovieTitle] = useState<string>("");
    const [watchList,setMovieList] = useState<Movie | null>(null)
    const [movieNotFound,setMovieNotFound] = useState<boolean>(false)

    // Function to get movie by title
    async function getMovieByTitleFn(){
      // Dispatching action to show loader
      dispatch(setLoader({fn:true}))

      // Calling getMoviewByTitle service
      const response = await getMoviewByTitle(movieTitle);
      console.log(response);

      // Dispatching action to hide loader
      dispatch(setLoader({fn:false}))

      // Checking the response
      if (response.Response=="False"){
        // If movie not found, set movieNotFound to true and watchList to null
        setMovieNotFound(true)
        setMovieList(null)
      }
      else if(response.Response == "True"){
        // If movie found, set movieNotFound to false and watchList to the movie data
        setMovieNotFound(false)
        setMovieList(response)
      }
      else{
        // If server error, dispatch action to show alert with error message
        dispatch(setAlert({content:"Server Error! Please try agin later",type:"error"}))
      }
    }

  // Rendering the component
  return (
    <div>
      <div style={{
        border:`1px solid ${colors.red}`,
      }} className='mb-[4%] rounded-md p-4'>
        <p className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold'>Welcome to <span style={{color:colors.red}}>Watchlists</span></p>
        <p className='mt-[3%]'>Search movies, add them to your watchlist</p>
        <p className='mt-[1%]'>By clicking on <TurnedInNotIcon/>, the movie will be added to your watchlist</p>
      </div>
      <div className='flex'>
        <div className='flex-1'><SearchBar action={setMovieTitle}/></div>
        <Button sx={{
          width:"fit-content",
        }} onClick={getMovieByTitleFn} variant='contained'>Search</Button>
      </div>
        
        <div className='mt-[3%]'>
          {watchList && <MovieCard movie={watchList} user={user} />}
          {movieNotFound && <div className='text-[30px] text-center'>Movie Not Found</div>}
        </div>
        {alert.content.length>0 && <Alertbar/>}
        {loader.fn && <Loader/>}
    </div>
  )
}

export default HomePage