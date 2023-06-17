import { Box } from '@chakra-ui/react';
import { MobileMenuBtn, MobileMenuBtnIcon } from './MobileMenu.styled';
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { MobileUserInfo, MobileNav, MobileAuthNav } from 'components';
import { selectIsLoggedIn } from '../../redux';
import { useSelector } from 'react-redux';

import { useMediaQuery } from '@chakra-ui/react';

export const MobileMenu = () => {
    const [isLargerThanLg] = useMediaQuery('(min-width: 992px)');

    const { isOpen, onOpen, onClose } = useDisclosure();
    const isLoggedIn = useSelector(selectIsLoggedIn);

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

            {!isLargerThanLg && (
                <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton color="#000" />
                        <DrawerBody padding="40px">
                            {isLoggedIn && (
                                <MobileUserInfo closeDrawer={onClose} />
                            )}
                            <MobileNav closeDrawer={onClose} />
                            {!isLoggedIn && (
                                <MobileAuthNav closeDrawer={onClose} />
                            )}
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            )}
        </Box>
    );
};
