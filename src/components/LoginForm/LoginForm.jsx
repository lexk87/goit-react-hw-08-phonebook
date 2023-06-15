import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import {
    EmailIcon,
    PasswordIcon,
    ShowIcon,
    HideIcon,
    Form,
    Label,
    Input,
    Button,
    SubmitButton,
    RegisterLink,
} from './LoginForm.styled';

export const LoginForm = () => {
    const [show, setShow] = useState(false);
    const toggleShow = () => setShow(!show);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            {/* Email field */}
            <Label htmlFor="email">Email</Label>
            <Box display="flex" alignItems="center">
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    w="40px"
                    h="40px"
                    backgroundColor="#fff"
                    color="#000"
                    borderLeftRadius="4px"
                    mb="5px"
                >
                    <EmailIcon />
                </Box>
                <Input
                    id="email"
                    type="email"
                    placeholder="Enter email"
                    {...register('email', {
                        required: true,
                        pattern:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                    })}
                />
            </Box>
            {!errors.email && (
                <Text fontSize="10px" mb="10px">
                    Enter a valid email address
                </Text>
            )}
            {errors.email && errors.email.type === 'required' && (
                <Text fontSize="10px" color="tomato" mb="10px">
                    Email is a required field!
                </Text>
            )}
            {errors.email && errors.email.type === 'pattern' && (
                <Text fontSize="10px" color="tomato" mb="10px">
                    Wrong email format!
                </Text>
            )}

            {/* Password field */}
            <Label htmlFor="password">Password</Label>
            <Box display="flex" alignItems="center">
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    w="40px"
                    h="40px"
                    backgroundColor="#fff"
                    color="#000"
                    borderLeftRadius="4px"
                    mb="5px"
                >
                    <PasswordIcon />
                </Box>
                <Input
                    className="login-password-input"
                    id="password"
                    type={show ? 'text' : 'password'}
                    placeholder="Enter password"
                    {...register('password', {
                        required: true,
                        minLength: 8,
                        maxLength: 16,
                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/i,
                    })}
                />
                <Button type="button" onClick={toggleShow}>
                    {show ? <ShowIcon /> : <HideIcon />}
                </Button>
            </Box>
            {!errors.password && (
                <Text fontSize="10px" mb="30px">
                    Enter a valid password
                </Text>
            )}
            {errors.password && errors.password.type === 'required' && (
                <Text fontSize="10px" color="tomato" mb="30px">
                    Password is a required field!
                </Text>
            )}
            {errors.password && errors.password.type === 'pattern' && (
                <Text fontSize="10px" color="tomato" mb="30px">
                    Wrong password format!
                </Text>
            )}
            {errors.password && errors.password.type === 'minLength' && (
                <Text fontSize="10px" color="tomato" mb="30px">
                    Password is to short!
                </Text>
            )}
            {errors.password && errors.password.type === 'maxLength' && (
                <Text fontSize="10px" color="tomato" mb="30px">
                    Password is to long!
                </Text>
            )}

            {/* Button */}
            <SubmitButton type="submit">LOG IN</SubmitButton>

            {/* Go to login */}
            <Text fontSize="14px">
                Not registered yet?{' '}
                <RegisterLink to="/register">Create an account</RegisterLink>
            </Text>
        </Form>
    );
};
