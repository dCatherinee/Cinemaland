import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding-left: 24px;
    padding-right: 24px;
    margin: 0 auto;
`;

export const Button = styled.button`
    display: inline-block;
    padding: 16px 20px;
    font-size: 16px;
    font-weight: 400;
    color: #2C3031;
    border: 1px solid #2C3031;
    background-color: inherit;

    transition: all 0.2s ease-out;

    :hover{
        background-color: #E76237;
    }
`;

export const ButtonLink = styled(Button)`
    text-decoration: none;
`;

export const Line = styled.div`
    border-bottom: 1px solid #2C3031;
`;

export const LineM = styled.div`
    border-bottom: 1px solid #2C3031;
    width: 700px;
`;