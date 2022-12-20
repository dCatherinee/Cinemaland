import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getData, getFilmBudget, getFilmFacts } from '../../api/api';
import { Button, ButtonLink, Container, LineM } from '../../globalStyle/utils';
import {
    InfoWrapper,
    InfoTitle,
    InfoDescription,
    InfoColumnWrap,
    InfoPoster,
    InfoDataWrap,
    DataTitle,
    DataText,
    DataSubText,
    Rating,
    VoteCount
} from './FilmInfoStyle.js';

const FilmInfo = () => {
    const [film, setFilm] = useState();
    const [budget, setBudget] = useState();
    const [awards, setAwards] = useState();
    const [similars, setSimilars] = useState();
    const [images, setImages] = useState();
    const [facts, setFacts] = useState();
    const { id } = useParams();

    const mapper = {
        'BUDGET': 'Бюджет:',
        'USA': 'Сборы в США:',
        'WORLD': 'Сборы в мире:',
        'RUS': 'Сборы в России:'
    }

    useEffect(() => {
        getData(`/${id}`).then(resp => {
            // console.log(resp.data);
            setFilm(resp.data);
        });
        getFilmBudget(id).then(resp => {
            // console.log(resp.data.items);
            setBudget(resp.data.items);
        })
        getFilmFacts(id).then(resp => {
            console.log(resp);
            setFacts(resp.data.items);
        });
    }, []);

    if (!film || !budget || !facts) {
        return (
            <Container>
                <InfoWrapper>
                    loading...
                </InfoWrapper>
            </Container>
        )
    }

    return (
        <>
            <Container>
                {/* <InfoWrapper>
                    <InfoTitle>{film.nameOriginal ? film.nameOriginal : film.nameRu}</InfoTitle>
                    <InfoDescription>{film.description}</InfoDescription>
                    <LineM />
                </InfoWrapper>
                <InfoColumnWrap>
                    <InfoPoster src={film.posterUrl}></InfoPoster>
                    <InfoDataWrap>
                        <DataTitle>{film.serial ? 'О Сериале' : 'О Фильме'}</DataTitle>
                        <DataText><DataSubText>Год производства:</DataSubText>{film.year}</DataText>
                        <DataText><DataSubText>Страна:</DataSubText>{film.countries.map((elem) => elem.country + ' ')}</DataText>
                        <DataText><DataSubText>Жанр:</DataSubText>{film.genres.map((elem) => elem.genre + ' ')}</DataText>
                        <DataText><DataSubText>Слоган:</DataSubText>{film.slogan ? film.slogan : '-'}</DataText>
                        <DataText><DataSubText>Время:</DataSubText>{film.filmLength} мин.</DataText>
                        <DataText><DataSubText>Возраст:</DataSubText>{film.ratingAgeLimits ? film.ratingAgeLimits.substring(3) + '+' : '-'}</DataText>
                        {
                            budget.map((item) => <DataText><DataSubText>{mapper[item.type]}</DataSubText>{item.symbol + item.amount}</DataText>)
                        }
                    </InfoDataWrap>
                    <InfoDataWrap>
                        <Rating>{film.ratingKinopoisk}</Rating>
                        <VoteCount>{film.ratingKinopoiskVoteCount} оценок</VoteCount>
                        <ButtonLink as='a' href={film.webUrl}>Посмотреть</ButtonLink>
                    </InfoDataWrap>
                </InfoColumnWrap>
                <InfoColumnWrap>
                    <InfoDataWrap>
                        {
                            facts.map((fact, id) => id < 3 ? <DataText>{fact.text}</DataText> : '')
                        }
                    </InfoDataWrap>
                </InfoColumnWrap>
                <InfoWrapper>
                    <LineM />
                </InfoWrapper> */}
            </Container>
        </>
    )
};

export default FilmInfo;