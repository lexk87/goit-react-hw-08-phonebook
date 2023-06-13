import { HeaderLink } from './HeaderNav.styled';
import { Box } from '@chakra-ui/react';

export const HeaderAuthNav = () => {
    return (
        <Box
            display={{ base: 'none', lg: 'flex' }}
            alignItems="center"
            gap={{ lg: '15px', xl: '20px' }}
        >
            <HeaderLink to="register">REGISTER</HeaderLink>
            <HeaderLink to="login">LOGIN</HeaderLink>
        </Box>
    );
};
