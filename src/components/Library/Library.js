import React, { useEffect, useState } from 'react';
import { getData } from '../../api/api';
import { Button, Container } from '../../globalStyle/utils';
import Film from '../Film/Film';
import { LibraryWrapper } from './LibraryStyle.js';

const Library = () => {
    const [films, setFilms] = useState([]);
    const [pageQuantity, setPageQuantity] = useState(0);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getData(`/top?type=TOP_100_POPULAR_FILMS&page=${page}`).then(resp => {
            console.log(resp.data);
            setFilms([...films, ...resp.data.films]);
            setPageQuantity(resp.data.pagesCount);
        })
    }, [page]);

    const handleBtnClick = () => {
        setPage(page + 1);
    };

    if(!films) {
        return(
            <Container>
                <LibraryWrapper>
                    loading...
                </LibraryWrapper>
            </Container>
        )
    }

    return (
        <>
            <Container>
                <LibraryWrapper>
                    {
                        films.map((film) => <Film key={film.filmId} film={film}/>)
                    }
                </LibraryWrapper>
                {
                    page !== pageQuantity && (
                        <LibraryWrapper>
                            <Button onClick={handleBtnClick}>More</Button>
                        </LibraryWrapper>
                    )
                }
            </Container>
        </>
    )
};

export default Library;