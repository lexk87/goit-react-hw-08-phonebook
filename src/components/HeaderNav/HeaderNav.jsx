import { HeaderLink } from './HeaderNav.styled';
import { Box } from '@chakra-ui/react';
import { selectIsLoggedIn } from '../../redux';
import { useSelector } from 'react-redux';

export const HeaderNav = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <Box
            as="nav"
            display={{ base: 'none', lg: 'flex' }}
            alignItems="center"
            gap={{ lg: '15px', xl: '20px' }}
        >
            <HeaderLink to="/">HOME</HeaderLink>
            {isLoggedIn && <HeaderLink to="contacts">CONTACTS</HeaderLink>}
        </Box>
    );
};
