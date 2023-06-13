import { Box, Container, Text } from '@chakra-ui/react';

export const Home = () => {
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
                <Text
                    color="#fff"
                    p="40px"
                    backgroundColor="rgba(255, 255, 255, 0.2)"
                    backdropFilter="blur(10px) saturate(180%)"
                    w={{ base: '100%', md: '728px' }}
                    borderRadius="4px"
                    textAlign="justify"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae, in eius. Repellat impedit ipsum est nam dolor
                    laboriosam quam id itaque consequuntur sunt sapiente
                    excepturi, animi, quidem, distinctio cumque dolores. Beatae
                    vitae soluta ratione tempora sint ab neque quo consequatur,
                    iure asperiores corporis, cumque praesentium necessitatibus
                    enim sed ea? Asperiores, adipisci odit amet voluptatibus
                    veritatis deserunt facilis quasi magni magnam accusantium
                    odio blanditiis mollitia quo cumque provident, earum, velit
                    eligendi deleniti modi iure repellat nulla. Eius illum harum
                    odio enim optio, qui dolores accusantium sit corporis eos
                    porro laborum modi ab et fuga, nulla consequatur autem
                    itaque inventore dolorum tenetur.
                </Text>
            </Container>
        </Box>
    );
};