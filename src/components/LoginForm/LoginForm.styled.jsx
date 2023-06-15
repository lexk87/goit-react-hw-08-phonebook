import styled from 'styled-components';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { BsShieldLock } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const EmailIcon = styled(HiOutlineMail)`
    width: 20px;
    height: 20px;
`;

export const PasswordIcon = styled(BsShieldLock)`
    width: 20px;
    height: 20px;
`;

export const ShowIcon = styled(AiOutlineEye)`
    width: 20px;
    height: 20px;
`;

export const HideIcon = styled(AiOutlineEyeInvisible)`
    width: 20px;
    height: 20px;
`;

export const Form = styled.form``;

export const Label = styled.label`
    display: block;
    margin-bottom: 2px;
    font-weight: 600;
`;

export const Input = styled.input`
    width: calc(100% - 40px);
    height: 40px;
    border-radius: 0 4px 4px 0;
    outline: none;
    color: #000;
    margin-bottom: 5px;
    padding: 0 10px;
    transition: all 250ms cubic-bezier(0.215, 0.61, 0.355, 1);
    border-left: 1px solid lightgray;

    &.login-password-input {
        width: calc(100% - 80px);
        border-radius: 0;
        border-right: 1px solid lightgray;
    }

    &:focus {
        background-color: lightgray;
    }
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: #fff;
    color: #000;
    border-radius: 0 4px 4px 0;
    margin-bottom: 5px;
`;

export const SubmitButton = styled.button`
    margin-bottom: 30px;
    border-radius: 4px;
    width: 100%;
    height: 40px;
    font-weight: 600;
    color: #000;
    background-color: #fff;
    transition: all 250ms cubic-bezier(0.215, 0.61, 0.355, 1);

    &:hover,
    &:focus {
        color: tomato;
    }
`;

export const RegisterLink = styled(Link)`
    text-decoration: underline;
    transition: all 250ms cubic-bezier(0.215, 0.61, 0.355, 1);

    &:hover,
    &:focus {
        color: tomato;
    }
`;
