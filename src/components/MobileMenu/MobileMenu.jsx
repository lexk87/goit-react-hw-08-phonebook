import { MobileMenuBtn, MobileMenuBtnIcon } from './MobileMenu.styled';
import {
    Box,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    useMediaQuery,
} from '@chakra-ui/react';
import { MobileUserInfo, MobileNav, MobileAuthNav } from 'components';
import { selectIsLoggedIn } from '../../redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export const MobileMenu = () => {
    const [isLargerThanLg] = useMediaQuery('(min-width: 992px)');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const isLoggedIn = useSelector(selectIsLoggedIn);

    useEffect(() => {
        if (isLargerThanLg) {
            onClose();
        }
    }, [isLargerThanLg, onClose]);

    return (
        <Box display={{ base: 'block', lg: 'none' }}>
            <MobileMenuBtn
                type="button"
                area-label="Open menu"
                title="Open menu"
                onClick={onOpen}
            >
                <MobileMenuBtnIcon />
            </MobileMenuBtn>

            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton color="#000" />
                    <DrawerBody padding="40px">
                        {isLoggedIn && <MobileUserInfo closeDrawer={onClose} />}
                        <MobileNav closeDrawer={onClose} />
                        {!isLoggedIn && <MobileAuthNav closeDrawer={onClose} />}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};
