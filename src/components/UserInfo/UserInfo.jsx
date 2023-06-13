import { Box, Text } from '@chakra-ui/react';
import { LogOutBtn } from './UserInfo.styled';

export const UserInfo = () => {
    return (
        <Box
            display={{ base: 'none', lg: 'flex' }}
            alignItems="center"
            gap={{ lg: '15px', xl: '20px' }}
        >
            <Text
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="#fff"
                fontWeight="600"
                bgColor="rgba(255, 255, 255, 0.2)"
                backdropFilter="blur(10px) saturate(180%)"
                fontSize={{ lg: '16px', xl: '21px' }}
                w={{ lg: '38px', xl: '50px' }}
                h={{ lg: '38px', xl: '50px' }}
                borderRadius="50%"
            >
                O
            </Text>
            <Text
                color="#fff"
                fontWeight="600"
                fontSize={{ lg: '16px', xl: '21px' }}
            >
                Olexandr Katyshev
            </Text>
            <LogOutBtn>LOGOUT</LogOutBtn>
        </Box>
    );
};
