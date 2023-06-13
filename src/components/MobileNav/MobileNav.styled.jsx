import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MobileNavLink = styled(NavLink)`
    font-weight: 600;
    font-size: 21px;
    color: #000;
    text-align: center;
    &.active,
    &:focus {
        color: red;
    }
`;
