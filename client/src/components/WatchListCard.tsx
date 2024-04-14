"use client";
import { colors } from "@/constants/Color";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setAlert } from "@/redux/slices/alertbarSclice";
import {
  addMovieToWatchList,
  removeMovieFromWatchList,
} from "@/redux/slices/usersDataSlice";
import { Card, Rating } from "@mui/material";
import Image from "next/image";
import React from "react";
import { MdDelete } from "react-icons/md";

type Props = {
  movie: Movie;
};

const WatchListCard = ({ movie }: Props) => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  return (
    <div className="w-full h-full relative">
      <Card
        sx={{
          width: "100%",
          height: "100%",
          paddingBottom: "10px",
        }}
      >
        <Image
          src={movie.Poster}
          alt={movie.Title}
          width={100}
          height={200}
          style={{
            width: "100%",
            height: "400px",
          }}
        />
        <div className="px-4 text-[18px] font-bold mt-2">{movie.Title}</div>
        <div className="px-4">{movie.Year}</div>
        <div className="px-4">
          <Rating
            size="small"
            name="half-rating-read"
            value={+movie.imdbRating / 2}
            precision={0.5}
            readOnly
          />
        </div>
      </Card>
      <div
        onClick={async () => {
          if (user.email.length == 0) {
            // If not, dispatch an action to set an alert
            dispatch(
              setAlert({
                content: "Please login to add movies to the watchlist",
                type: "error",
              })
            );
          } else {
            // If yes, call the function to add or remove the movie from the watchlist
            if (
              user.watchList.some((obj: Movie) => obj.Title === movie.Title)
            ) {
              // If the movie is in the watchList, remove it
              dispatch(
                removeMovieFromWatchList({
                  email: user.email,
                  movie: movie,
                })
              );
            } else {
              // If the movie is not in the watchList, add it
              dispatch(
                addMovieToWatchList({ email: user.email, movie: movie })
              );
            }

            // Then dispatch an action to set the user
            // console.log(res)
          }
        }}
        style={{
          color: colors.red,
        }}
        className="absolute bottom-3 right-1 hover:cursor-pointer"
      >
        <MdDelete size={30} />
      </div>
    </div>
  );
};

export default WatchListCard;
