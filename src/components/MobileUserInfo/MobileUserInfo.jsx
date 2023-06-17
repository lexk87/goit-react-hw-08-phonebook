import { Box, Text } from '@chakra-ui/react';
import { MobileLogOutBtn } from './MobileUserInfo.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, logOutUser } from '../../redux';

export const MobileUserInfo = ({ closeDrawer }) => {
    const user = useSelector(selectUser);
    const userName = user.name;
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(logOutUser());
        closeDrawer();
    };

    return (
        <Box borderBottom="1px solid lightgray" pb="20px" mb="20px">
            <Text fontWeight="600" color="#000" pb="10px" fontSize="21px">
                {userName}
            </Text>
            <MobileLogOutBtn type="button" onClick={handleClick}>
                LOGOUT
            </MobileLogOutBtn>
        </Box>
    );
};
