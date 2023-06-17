import { Box, Container, Text } from '@chakra-ui/react';
import { ContactsMenu, ContactsList, Loader } from 'components';
import {
    selectContacts,
    selectIsLoading,
    selectError,
    selectFilteredContacts,
    fetchContacts,
} from '../../redux';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const Contacts = () => {
    const contacts = useSelector(selectContacts);
    const filteredContacts = useSelector(selectFilteredContacts);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const showErrorToast = () => {
        toast.error("Oops... something went wrong. Let's try again.", {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
    };

    return (
        <Box as="main">
            <Container
                px="20px"
                pb="50px"
                maxW={['100%', 480, 768, 992, 1280, 1536]}
            >
                <ContactsMenu />

                {isLoading && <Loader />}

                {!contacts.length && !isLoading && (
                    <Text
                        fontSize={[24, 26, 28, 30]}
                        color="#fff"
                        fontWeight="600"
                        textAlign="center"
                        mb="50px"
                    >
                        Your contacts will be displayed here
                    </Text>
                )}

                {contacts.length > 0 &&
                    !filteredContacts.length &&
                    !isLoading && (
                        <Text
                            fontSize={[24, 26, 28, 30]}
                            color="#fff"
                            fontWeight="600"
                            textAlign="center"
                            mb="50px"
                        >
                            Contact with this name does not exist
                        </Text>
                    )}

                {filteredContacts.length > 0 && !isLoading && <ContactsList />}

                {error && showErrorToast()}
            </Container>
        </Box>
    );
};

export default Contacts;
