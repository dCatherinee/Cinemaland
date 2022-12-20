import React from 'react';
import { FilmWrapper, FilmPicture, FilmTitle, FilmYear } from './FilmStyle.js';

const Film = (props) => {
    const film = props.film;

    return (
        <>
            <FilmWrapper to={`/film/${film.filmId}`}>
                <FilmPicture src={film.posterUrlPreview}></FilmPicture>
                <FilmTitle>{film.nameEn ? film.nameEn : film.nameRu}</FilmTitle>
                <FilmYear>{film.year}</FilmYear>
            </FilmWrapper>
        </>
    )
};

export default Film;