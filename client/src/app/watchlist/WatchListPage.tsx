"use client"
import WatchListCard from '@/components/WatchListCard'
import { colors } from '@/constants/Color'
import { useAppSelector } from '@/redux/hook'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Props = {}

const WatchListPage = (props: Props) => {
  const user = useAppSelector((state) => state.user);

  return (
    <div className="container mx-auto px-4">
      <div className='mb-6'>
        <p className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold'>
          Your <span style={{ color: colors.red }}>Watchlists</span>
        </p>
      </div>
      {user.email.length === 0 && (
        <p className='mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 text-center text-lg md:text-xl lg:text-2xl xl:text-3xl'>
          Please{' '}
          <span style={{ color: colors.red }} className='underline'>
            <Link href="/auth/login">login</Link>
          </span>{' '}
          to add movies to the watchlists
        </p>
      )}
      {user.watchList.length === 0 && user.email.length > 0 && (
        <p className='mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 text-center text-lg md:text-xl lg:text-2xl xl:text-3xl'>
          No movies in the watchlist. Search for movies and add them to the
          watchlist
        </p>
      )}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {user.watchList.map((movie: Movie, id: number) => (
          <div key={id}>
            <WatchListCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchListPage;
