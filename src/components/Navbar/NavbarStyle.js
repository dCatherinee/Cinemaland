import styled from 'styled-components';

export const NavbarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding-top: 24px;
    padding-bottom: 24px;
`;

export const NavWrapper = styled.div`
    width: 216px;
    height: 24px;
`;

export const NavbarLogo = styled.div`
    font-size: 36px;
    font-weight: 600;
    text-align: center;
    color: #2C3031;
    width: 216px;

    span {
        font-weight: 400;
        font-style: italic;
    }
`;

export const NavbarSearchWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 216px;
    border-bottom: 1px solid #2C3031;
`;

export const Search = styled.input`
    font-size: 14px;
    border: none;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    background-color: inherit;
    width: 200px;

    &:focus{
        outline: none;

        ::placeholder{
            opacity: 0;
        }
    }
`;