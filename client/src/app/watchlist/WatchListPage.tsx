"use client"
import WatchListCard from '@/components/WatchListCard'
import { colors } from '@/constants/Color'
import { useAppSelector } from '@/redux/hook'
import React, { useEffect, useState } from 'react'

type Props = {}

const WatchListPage = (props: Props) => {
  const user = useAppSelector((state)=>state.user) 
    console.log(user)
  return (
    <div>
      <div className='mb-[30px]'>
        <p className='text-[40px]'>Welcome to <span style={{
          color:colors.red,
        }}>Watchlists</span></p>
      </div>
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