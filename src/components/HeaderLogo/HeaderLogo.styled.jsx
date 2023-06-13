import styled from 'styled-components';
import { GiNotebook } from 'react-icons/gi';
import { Link } from 'react-router-dom';

export const LogoLink = styled(Link)`
    display: flex;
    align-items: center;
`;

export const LogoImg = styled(GiNotebook)`
    margin-right: 10px;
    width: 40px;
    height: 40px;
    color: #fff;

    @media screen and (min-width: 480px) {
    }
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 992px) {
    }
    @media screen and (min-width: 1280px) {
        width: 50px;
        height: 50px;
    }
    @media screen and (min-width: 1536px) {
    }
`;
