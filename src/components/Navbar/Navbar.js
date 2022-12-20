import React from 'react';
import { TbMovie, TbSearch } from 'react-icons/tb';
import { IconContext } from 'react-icons';
import { Container, Line } from '../../globalStyle/utils';
import { NavbarWrapper, NavWrapper, NavbarLogo, NavbarSearchWrap, Search } from './NavbarStyle.js';

const Navbar = () => {
    return (
        <>
            <IconContext.Provider value={{ color: '#2C3031', size: '1.5rem' }}>
                <Container>
                    <NavbarWrapper>
                        <NavWrapper>
                            <TbMovie />
                        </NavWrapper>
                        <NavbarLogo>
                            CINEMA<span>Land</span>
                        </NavbarLogo>
                        <NavbarSearchWrap>
                            <TbSearch />
                            <Search type="search" placeholder="Search movie" />
                        </NavbarSearchWrap>
                    </NavbarWrapper>
                </Container>
                <Line />
            </IconContext.Provider>
        </>
    )
}

export default Navbar;