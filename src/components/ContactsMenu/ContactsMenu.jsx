import {
    Box,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react';
import {
    AddContactIcon,
    SearchContactIcon,
    AddContactButton,
    Input,
    Form,
    Label,
    UserIcon,
    ModalInput,
    PhoneIcon,
    ModalButton,
} from './ContactsMenu.styled';
import { useForm } from 'react-hook-form';
import {
    addContact,
    selectContacts,
    selectFilter,
    setFilter,
} from '../../redux';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

export const ContactsMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const filterValue = useSelector(selectFilter);

    const {
        register,
        getValues,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onFilterChange = e => {
        dispatch(setFilter(e.currentTarget.value.trim()));
    };

    const onSubmit = () => {
        const isContactIncluded = contacts.some(
            contact =>
                contact.name.toLowerCase() === getValues('name').toLowerCase()
        );

        isContactIncluded
            ? toast.warn(`${getValues('name')} is already in contacts`, {
                  position: 'top-right',
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: 'colored',
              })
            : dispatch(addContact(getValues()));

        onClose();
        reset();
    };

    return (
        <>
            <Box
                display="flex"
                flexDirection={{ base: 'column', md: 'row' }}
                gap={{ base: '20px', md: '40px' }}
                mb="50px"
            >
                <AddContactButton type="button" onClick={onOpen}>
                    <AddContactIcon />
                    <Text>Add contact</Text>
                </AddContactButton>
                {contacts.length > 0 && (
                    <Box display="flex" alignItems="center" color="#000">
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            w="40px"
                            h="40px"
                            backgroundColor="#fff"
                            borderLeftRadius="4px"
                        >
                            <SearchContactIcon />
                        </Box>
                        <Input
                            type="text"
                            onChange={onFilterChange}
                            value={filterValue}
                        />
                    </Box>
                )}
            </Box>

            {/* Add contact modal */}
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent
                    padding="40px"
                    w={{ base: '100%', sm: '440px' }}
                    mx="20px"
                >
                    <ModalCloseButton />
                    <ModalBody p="0">
                        <Text
                            fontSize={[24, 26, 28, 30]}
                            color="#000"
                            fontWeight="600"
                            mb="20px"
                        >
                            Add contact
                        </Text>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            {/* Name field */}
                            <Label htmlFor="name">Name</Label>
                            <Box display="flex" alignItems="center">
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    w="40px"
                                    h="40px"
                                    backgroundColor="lightgray"
                                    color="#000"
                                    borderLeftRadius="4px"
                                    mb="5px"
                                >
                                    <UserIcon />
                                </Box>
                                <ModalInput
                                    id="name"
                                    type="text"
                                    placeholder="Enter name"
                                    {...register('name', {
                                        required: true,
                                        minLength: 3,
                                        maxLength: 25,
                                        pattern:
                                            /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i,
                                    })}
                                />
                            </Box>
                            {!errors.name && (
                                <Text fontSize="10px" mb="10px">
                                    Must contain from 3 to 25 characters
                                </Text>
                            )}
                            {errors.name && errors.name.type === 'required' && (
                                <Text fontSize="10px" color="tomato" mb="10px">
                                    Name is a required field!
                                </Text>
                            )}
                            {errors.name && errors.name.type === 'pattern' && (
                                <Text fontSize="10px" color="tomato" mb="10px">
                                    Wrong name format!
                                </Text>
                            )}
                            {errors.name &&
                                errors.name.type === 'minLength' && (
                                    <Text
                                        fontSize="10px"
                                        color="tomato"
                                        mb="10px"
                                    >
                                        Name is to short!
                                    </Text>
                                )}
                            {errors.name &&
                                errors.name.type === 'maxLength' && (
                                    <Text
                                        fontSize="10px"
                                        color="tomato"
                                        mb="10px"
                                    >
                                        Name is to long!
                                    </Text>
                                )}

                            {/* Number field */}
                            <Label htmlFor="number">Number</Label>
                            <Box display="flex" alignItems="center">
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    w="40px"
                                    h="40px"
                                    backgroundColor="lightgray"
                                    color="#000"
                                    borderLeftRadius="4px"
                                    mb="5px"
                                >
                                    <PhoneIcon />
                                </Box>
                                <ModalInput
                                    id="number"
                                    type="text"
                                    placeholder="Enter number"
                                    {...register('number', {
                                        required: true,
                                        pattern:
                                            /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i,
                                    })}
                                />
                            </Box>
                            {!errors.number && (
                                <Text fontSize="10px" mb="30px">
                                    Must contain a valid phone number
                                </Text>
                            )}
                            {errors.number &&
                                errors.number.type === 'required' && (
                                    <Text
                                        fontSize="10px"
                                        color="tomato"
                                        mb="30px"
                                    >
                                        Number is a required field!
                                    </Text>
                                )}
                            {errors.number &&
                                errors.number.type === 'pattern' && (
                                    <Text
                                        fontSize="10px"
                                        color="tomato"
                                        mb="30px"
                                    >
                                        Wrong number format!
                                    </Text>
                                )}

                            {/* Buttons */}
                            <Box
                                display="flex"
                                flexDirection={{ base: 'column', sm: 'row' }}
                                gap="20px"
                            >
                                <ModalButton type="submit">SAVE</ModalButton>
                                <ModalButton type="button" onClick={onClose}>
                                    CANCEL
                                </ModalButton>
                            </Box>
                        </Form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};
