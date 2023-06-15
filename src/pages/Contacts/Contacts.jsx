import { Box, Container, Text } from '@chakra-ui/react';
import { ContactsMenu, ContactsList } from 'components';

export const Contacts = () => {
    return (
        <Box as="main">
            <Container px="20px" maxW={['100%', 480, 768, 992, 1280, 1536]}>
                <ContactsMenu />
                <Text
                    fontSize={[24, 26, 28, 30]}
                    color="#fff"
                    fontWeight="600"
                    textAlign="center"
                >
                    Your contacts will be displayed here
                </Text>
                <ContactsList />
            </Container>
        </Box>
    );
};
