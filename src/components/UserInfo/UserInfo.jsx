import { Box, Text } from '@chakra-ui/react';
import { LogOutBtn } from './UserInfo.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, logOutUser } from '../../redux';

export const UserInfo = () => {
    const user = useSelector(selectUser);
    const userName = user.name;
    const firstLetter = user.name.slice(0, 1);
    const dispatch = useDispatch();

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
                {firstLetter}
            </Text>
            <Text
                color="#fff"
                fontWeight="600"
                fontSize={{ lg: '16px', xl: '21px' }}
            >
                {userName}
            </Text>
            <LogOutBtn type="button" onClick={() => dispatch(logOutUser())}>
                LOGOUT
            </LogOutBtn>
        </Box>
    );
};
