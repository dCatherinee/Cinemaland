import styled from "styled-components";

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-top: 24px;
`;

export const InfoTitle = styled.h2`
    font-size: 160px;
    font-weight: 600;
    line-height: 172px;
    color: #2C3031;
    font-variant: petite-caps;
    text-align: center;
`;

export const InfoDescription = styled.p`
    font-size: 18px;
    font-weight: 400;
    font-style: italic;
    color: #2C3031;
    text-align: center;
    margin: 0;
    margin-bottom: 18px;
    max-width: 1200px;

    span{
        font-weight: 600;
    }
`;

export const InfoColumnWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 42px;
`;

export const InfoPoster = styled.img`
    width: 300px;
`;

export const InfoDataWrap = styled.div`
    margin-left: 32px;
`;

export const DataTitle = styled.h3`
    font-size: 24px;
    font-weight: 600;
    color: #2C3031;
    margin-bottom: 9px;
`;

export const DataText = styled.div`
    display: flex;
    font-size: 16px;
    font-weight: 400;
    color: #2C3031;

    margin: 0;
    padding: 8px 0px;

    span{
        opacity: 80%;
        width: 160px;
    }
`;

export const DataSubText = styled.div`
    opacity: 80%;
    width: 160px;
`;

export const Rating = styled.div`
    font-size: 36px;
    font-weight: 600;
    color: #E76237;
`;

export const VoteCount = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: #2C3031;
    margin-bottom: 12px;
`;