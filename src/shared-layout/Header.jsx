import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux';
import { useSelector } from 'react-redux';
import { Box, Container } from '@chakra-ui/react';
import {
    HeaderLogo,
    HeaderAuthNav,
    HeaderNav,
    UserInfo,
    MobileMenu,
} from 'components';

export const Header = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <>
            <Box as="header" h="100px">
                <Container
                    px="20px"
                    h="100%"
                    maxW={['100%', 480, 768, 992, 1280, 1536]}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <HeaderLogo />
                    <HeaderNav />
                    {!isLoggedIn && <HeaderAuthNav />}
                    {isLoggedIn && <UserInfo />}
                    <MobileMenu />
                </Container>
            </Box>

            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </>
    );
};
