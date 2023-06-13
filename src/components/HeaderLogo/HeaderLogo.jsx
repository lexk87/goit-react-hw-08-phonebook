import { LogoLink, LogoImg } from './HeaderLogo.styled';
import { Text } from '@chakra-ui/react';

export const HeaderLogo = () => {
    return (
        <LogoLink to="/">
            <LogoImg />
            <Text
                fontSize={[24, 30, null, null, 36, null]}
                color="#fff"
                fontWeight="600"
            >
                PHONEBOOK
            </Text>
        </LogoLink>
    );
};
