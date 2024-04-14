"use cient";

// Importing required components, hooks, and slices
import { Card, CardContent, Rating } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setAlert } from "@/redux/slices/alertbarSclice";
import {
  addMovieToWatchList,
  removeMovieFromWatchList,
} from "@/redux/slices/usersDataSlice";

// Defining the type of the props
type Props = {
  movie: Movie;
  user: { email: string; watchList: Movie[] };
};

const MovieCard = ({ movie, user }: Props) => {
  // Using hooks to dispatch actions and select state from the Redux store
  const dispatch: any = useAppDispatch();
  const userData = useAppSelector((state) => state.userData);

  // Rendering the component
  console.log(user);
  console.log(userData);
  return (
    <div>
      <Card>
        <CardContent className="md:flex md:justify-between">
          <div className="w-[100%] md:w-[50%] lg:w-[40%] xl:w-[30%] md:mr-4 md:pr-0">
            <Image
              src={movie.Poster}
              alt={movie.Title}
              width={400}
              height={300}
            />
          </div>
          <div className="w-[100%] md:w-[50%] lg:w-[60%] xl:w-[70%]">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold flex justify-between items-center">
              {movie.Title}
              <span
                className="cursor-pointer"
                onClick={async () => {
                  // Checking if the user is logged in
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
                      user.watchList.some(
                        (obj: Movie) => obj.Title === movie.Title
                      )
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
              >
                {/* Displaying a different icon depending on whether the movie is in the watchlist or not */}
                {user.watchList.some(
                  (obj: Movie) => obj.Title == movie.Title
                ) ? (
                  <TurnedInIcon fontSize="large" />
                ) : (
                  <TurnedInNotIcon fontSize="large" />
                )}
              </span>
            </h2>
            {/* Displaying the details of the movie */}
            <p>
              <span className="text-sm md:text-lg lg:text-xl font-bold">
                Released on -{" "}
              </span>
              {movie.Released}
            </p>
            <p>
              <span className="text-sm md:text-lg lg:text-xl font-bold">
                Genre -{" "}
              </span>
              {movie.Genre}
            </p>
            <p>
              <span className="text-sm md:text-lg lg:text-xl font-bold">
                Plot -{" "}
              </span>
              {movie.Plot}
            </p>
            <p>
              <span className="text-sm md:text-lg lg:text-xl font-bold">
                Actors -{" "}
              </span>
              {movie.Actors}
            </p>
            <p>
              <span className="text-sm md:text-lg lg:text-xl font-bold">
                Director -{" "}
              </span>
              {movie.Director}
            </p>
            <p>
              <span className="text-sm md:text-lg lg:text-xl font-bold">
                Writer -{" "}
              </span>
              {movie.Writer}
            </p>
            <div className="text-sm md:text-lg lg:text-xl font-bold">
              Rating
            </div>
            {/* Displaying the rating of the movie */}
            <Rating
              size="large"
              name="half-rating-read"
              value={+movie.imdbRating}
              precision={0.5}
              readOnly
              max={10}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MovieCard;
