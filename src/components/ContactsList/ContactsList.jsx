import {
    Box,
    List,
    ListItem,
    Text,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import {
    Button,
    Form,
    Label,
    UserIcon,
    ModalInput,
    PhoneIcon,
    ModalButton,
} from './ContactsList.styled';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectContacts,
    deleteContact,
    selectFilteredContacts,
    editContact,
} from '../../redux';
import { toast } from 'react-toastify';
import { useState } from 'react';

export const ContactsList = () => {
    const [editedId, setEditedId] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const filteredContacts = useSelector(selectFilteredContacts);

    const removeContact = id => {
        dispatch(deleteContact(id));
    };

    const {
        register,
        setValue,
        getValues,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onEditClick = (id, name, number) => {
        setValue('name', name);
        setValue('number', number);
        setEditedId(id);
        onOpen();
    };

    const onSubmit = () => {
        const isContactIncluded = contacts.some(
            contact =>
                contact.name.toLowerCase() ===
                    getValues('name').toLowerCase() && contact.id !== editedId
        );

        console.log('isContactIncluded:', isContactIncluded);

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
            : dispatch(
                  editContact({
                      id: editedId,
                      name: getValues('name'),
                      number: getValues('number'),
                  })
              );

        onClose();
        reset();
    };

    const generateDarkColorHex = () => {
        let color = '#';
        for (let i = 0; i < 3; i++)
            color += (
                '0' +
                Math.floor((Math.random() * Math.pow(16, 2)) / 2).toString(16)
            ).slice(-2);
        return color;
    };

    return (
        <>
            {/* Contacts list */}
            <List display="flex" flexWrap="wrap" gap="20px">
                {filteredContacts.map(({ id, name, number }) => (
                    <ListItem
                        key={id}
                        p="20px"
                        backgroundColor="rgba(255, 255, 255, 0.2)"
                        backdropFilter="blur(10px) saturate(180%)"
                        borderRadius="4px"
                        w={{
                            base: '100%',
                            sm: 'calc((100% - 20px) / 2)',
                            md: 'calc((100% - 40px) / 3)',
                            lg: 'calc((100% - 60px) / 4)',
                            xl: 'calc((100% - 80px) / 5)',
                        }}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                    >
                        <Text
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            mb="10px"
                            backgroundColor={generateDarkColorHex()}
                            color="#fff"
                            w="40px"
                            h="40px"
                            borderRadius="50%"
                            fontWeight="600"
                        >
                            {name.slice(0, 1)}
                        </Text>
                        <Text
                            color="#fff"
                            fontWeight="600"
                            mb="5px"
                            textAlign="center"
                            h="54px"
                        >
                            {name}
                        </Text>
                        <Text
                            color="#fff"
                            fontSize="15px"
                            mb="15px"
                            textAlign="center"
                        >
                            {number}
                        </Text>
                        <Box display="flex" justifyContent="center" gap="20px">
                            <Button
                                type="button"
                                onClick={() => onEditClick(id, name, number)}
                            >
                                EDIT
                            </Button>
                            <Button
                                type="button"
                                onClick={() => removeContact(id)}
                            >
                                DELETE
                            </Button>
                        </Box>
                    </ListItem>
                ))}
            </List>

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
                            Edit contact
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
