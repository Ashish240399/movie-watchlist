"use client"
import WatchListCard from '@/components/WatchListCard'
import { colors } from '@/constants/Color'
import { useAppSelector } from '@/redux/hook'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Props = {}

const WatchListPage = (props: Props) => {
  const user = useAppSelector((state)=>state.user) 
    console.log(user)
  return (
    <div>
      <div className='mb-[30px]'>
        <p className='text-[40px]'>Your <span style={{
          color:colors.red,
        }}>Watchlists</span></p>
      </div>
      {user.email.length==0 && <p className='mt-[30%] text-center text-[25px]'>Please <span style={{color:colors.red}} className='underline'><Link href="/auth/login">login</Link></span> to add movies to the watchlists</p>}
      {user.watchList.length==0 && user.email.length>0 && <p className='mt-[30%] text-center text-[25px]'>No movies in the watchlist. Search for movies and add them to the watchlist</p>}
      <div className='grid grid-cols-4 gap-4'>
          {user.watchList.map((movie:Movie,id:number)=>(
            <div key={id}>
              <WatchListCard movie={movie} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default WatchListPage