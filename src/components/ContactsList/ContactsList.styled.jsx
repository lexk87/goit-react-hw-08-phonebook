import styled from 'styled-components';
import { AiOutlineUser, AiOutlinePhone } from 'react-icons/ai';

export const Button = styled.button`
    background-color: #fff;
    padding: 2px 10px;
    border-radius: 4px;
    color: #000;
    font-size: 16px;
    font-weight: 600;
    transition: all 250ms cubic-bezier(0.215, 0.61, 0.355, 1);

    &:hover,
    &:focus {
        background-color: lightgray;
    }
`;

// Form

export const UserIcon = styled(AiOutlineUser)`
    width: 20px;
    height: 20px;
`;

export const PhoneIcon = styled(AiOutlinePhone)`
    width: 20px;
    height: 20px;
    transform: scaleX(-1);
`;

export const Form = styled.form``;

export const Label = styled.label`
    display: block;
    margin-bottom: 2px;
    font-weight: 600;
`;

export const ModalInput = styled.input`
    width: calc(100% - 40px);
    height: 40px;
    border-radius: 0 4px 4px 0;
    outline: none;
    color: #000;
    margin-bottom: 5px;
    padding: 0 10px;
    transition: all 250ms cubic-bezier(0.215, 0.61, 0.355, 1);
    border-left: 1px solid darkgray;
    background-color: lightgray;

    &.reg-password-input {
    }

    &:focus {
        background-color: darkgray;
    }
`;

export const ModalButton = styled.button`
    border-radius: 4px;
    width: 100%;
    height: 40px;
    font-weight: 600;
    color: #000;
    background-color: lightgray;
    transition: all 250ms cubic-bezier(0.215, 0.61, 0.355, 1);

    &:hover,
    &:focus {
        background-color: darkgray;
    }
`;
