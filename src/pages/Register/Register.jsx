import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { RegisterForm } from 'components';

const Register = () => {
    return (
        <Box as="main">
            <Container
                px="20px"
                pb="50px"
                minH="calc(100vh - 150px)"
                maxW={['100%', 480, 768, 992, 1280, 1536]}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Box
                    color="#fff"
                    p="40px"
                    backgroundColor="rgba(255, 255, 255, 0.2)"
                    backdropFilter="blur(10px) saturate(180%)"
                    w={{ base: '100%', md: '440px' }}
                    borderRadius="4px"
                >
                    <Heading
                        as="h1"
                        fontFamily="Montserrat"
                        fontSize={[24, 26, 28, 30]}
                        color="#fff"
                        fontWeight="600"
                        mb="5px"
                    >
                        Register your Phonebook account
                    </Heading>
                    <Text color="#fff" mb="20px" fontSize="14px">
                        Enter your name, email and password
                    </Text>
                    <RegisterForm />
                </Box>
            </Container>
        </Box>
    );
};

export default Register;
