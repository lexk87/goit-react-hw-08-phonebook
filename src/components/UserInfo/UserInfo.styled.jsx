import styled from 'styled-components';

export const LogOutBtn = styled.button`
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 21px;
    font-weight: 600;
    color: #000;
    background-color: #fff;
    transition: all 250ms cubic-bezier(0.215, 0.61, 0.355, 1);

    &.active,
    &:hover,
    &:focus {
        color: tomato;
    }

    @media screen and (min-width: 480px) {
    }
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 992px) {
        padding: 7px 15px;
        font-size: 16px;
    }
    @media screen and (min-width: 1280px) {
        padding: 10px 20px;
        font-size: 21px;
    }
    @media screen and (min-width: 1536px) {
    }
`;
