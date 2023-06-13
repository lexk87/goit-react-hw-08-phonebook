import { Box, Text } from '@chakra-ui/react';
import { MobileLogOutBtn } from './MobileUserInfo.styled';

export const MobileUserInfo = ({ closeDrawer }) => {
    return (
        <Box borderBottom="1px solid lightgray" pb="20px" mb="20px">
            <Text fontWeight="600" color="#000" pb="10px" fontSize="21px">
                Olexandr Katyshev
            </Text>
            <MobileLogOutBtn onClick={closeDrawer}>LOGOUT</MobileLogOutBtn>
        </Box>
    );
};
