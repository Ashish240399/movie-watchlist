import { Card } from '@mui/material';
import Image from 'next/image';
import React from 'react'



type Props = {
    movie: Movie;
};

const MovieCard = ({movie}: Props) => {
    return (
        <div>
            <Card>
                <Image src={movie.Poster} alt={movie.Title} width={300} height={200} />
                <h2>{movie.Title}</h2>
                <h3>{movie.Year}</h3>
                <p>{movie.Plot}</p>
            </Card>
        </div>
    )
}

export default MovieCard;