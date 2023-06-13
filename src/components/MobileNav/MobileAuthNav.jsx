import { Box } from '@chakra-ui/react';
import { MobileNavLink } from './MobileNav.styled';

export const MobileAuthNav = ({ closeDrawer }) => {
    return (
        <Box
            borderTop="1px solid lightgray"
            pt="20px"
            mt="20px"
            display="flex"
            flexDirection="column"
            gap="10px"
        >
            <MobileNavLink to="register" onClick={closeDrawer}>
                REGISTER
            </MobileNavLink>
            <MobileNavLink to="login" onClick={closeDrawer}>
                LOGIN
            </MobileNavLink>
        </Box>
    );
};
