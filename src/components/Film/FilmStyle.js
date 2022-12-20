import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FilmWrapper = styled(Link)`
    width: 250px;
    height: 450px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    border: 1px solid #2C3031;
    text-decoration: none;

    transition: all 0.2s ease-out;

    :hover{
        background-color: #E76237;
    }
`;

export const FilmPicture = styled.img`
    width: 210px;
    height: 300px;
    margin-left: 20px;
    margin-top: 20px;
`;

export const FilmTitle = styled.h2`
    font-size: 24px;
    font-weight: 600;
    color: #2C3031;
    margin-left: 20px;
    margin-top: 20px;
`;

export const FilmYear = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #2C3031;
    margin: 0;
    margin-left: 20px;
`;