import { Box } from '@chakra-ui/react';
import { MobileNavLink } from './MobileNav.styled';
import { selectIsLoggedIn } from '../../redux';
import { useSelector } from 'react-redux';

export const MobileNav = ({ closeDrawer }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <Box display="flex" flexDirection="column" gap="10px">
            <MobileNavLink to="/" onClick={closeDrawer}>
                HOME
            </MobileNavLink>
            {isLoggedIn && (
                <MobileNavLink to="contacts" onClick={closeDrawer}>
                    CONTACTS
                </MobileNavLink>
            )}
        </Box>
    );
};
