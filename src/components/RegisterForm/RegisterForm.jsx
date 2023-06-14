import { useForm } from 'react-hook-form';
import {
    UserIcon,
    EmailIcon,
    PasswordIcon,
    ShowIcon,
    HideIcon,
    Form,
    Label,
    Input,
    Button,
    SubmitButton,
    LoginLink,
} from './RegisterForm.styled';
import { Box, Text } from '@chakra-ui/react';
import { useState } from 'react';

export const RegisterForm = () => {
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
            {/* Name field */}
            <Label htmlFor="name">Name</Label>
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
                    <UserIcon />
                </Box>
                <Input
                    id="name"
                    type="text"
                    placeholder="Enter name"
                    {...register('name', {
                        required: true,
                        minLength: 3,
                        maxLength: 25,
                        pattern:
                            /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i,
                    })}
                />
            </Box>
            {!errors.name && (
                <Text fontSize="10px" mb="10px">
                    Must contain from 3 to 25 characters
                </Text>
            )}
            {errors.name && errors.name.type === 'required' && (
                <Text fontSize="10px" color="tomato" mb="10px">
                    Name is a required field!
                </Text>
            )}
            {errors.name && errors.name.type === 'pattern' && (
                <Text fontSize="10px" color="tomato" mb="10px">
                    Wrong name format!
                </Text>
            )}
            {errors.name && errors.name.type === 'minLength' && (
                <Text fontSize="10px" color="tomato" mb="10px">
                    Name is to short!
                </Text>
            )}
            {errors.name && errors.name.type === 'maxLength' && (
                <Text fontSize="10px" color="tomato" mb="10px">
                    Name is to long!
                </Text>
            )}

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
                            /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i,
                    })}
                />
            </Box>
            {!errors.email && (
                <Text fontSize="10px" mb="10px">
                    Must contain a valid email address
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
                    className="reg-password-input"
                    id="password"
                    type={show ? 'text' : 'password'}
                    placeholder="Enter password"
                    {...register('password', {
                        required: true,
                        minLength: 8,
                        maxLength: 16,
                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)$/i,
                    })}
                />
                <Button type="button" onClick={toggleShow}>
                    {show ? <ShowIcon /> : <HideIcon />}
                </Button>
            </Box>
            {!errors.password && (
                <Text fontSize="10px" mb="30px">
                    Must contain 8-16 characters, 1 uppercase, 1 lowercase and 1
                    number
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
            <SubmitButton type="submit">REGISTER</SubmitButton>

            {/* Go to login */}
            <Text fontSize="14px">
                Already have an account?{' '}
                <LoginLink to="/login">Log In</LoginLink>
            </Text>
        </Form>
    );
};
