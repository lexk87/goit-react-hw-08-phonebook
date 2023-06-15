import { Box, List, ListItem, Text } from '@chakra-ui/react';
import { Button } from './ContactsList.styled';

export const ContactsList = () => {
    return (
        <List>
            <ListItem
                p="40px"
                backgroundColor="rgba(255, 255, 255, 0.2)"
                backdropFilter="blur(10px) saturate(180%)"
                borderRadius="4px"
            >
                <Text>O</Text>
                <Text>Olexandr Katyshev</Text>
                <Text>+38 (063) 181-44-74</Text>
                <Button>EDIT</Button>
                <Button>DELETE</Button>
            </ListItem>
        </List>
    );
};
