import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderLink = styled(NavLink)`
    padding: 7px 15px;
    border-radius: 4px;
    font-weight: 600;
    color: #fff;
    background-color: none;
    transition: all 250ms cubic-bezier(0.215, 0.61, 0.355, 1);

    &.active,
    &:hover,
    &:focus {
        background-color: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px) saturate(180%);
    }

    @media screen and (min-width: 1280px) {
        padding: 10px 20px;
        font-size: 21px;
    }
`;
