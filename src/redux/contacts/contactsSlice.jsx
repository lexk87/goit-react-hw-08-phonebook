import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
    fetchContacts,
    addContact,
    editContact,
    deleteContact,
} from './contactsOperations';

const extraActions = [fetchContacts, addContact, editContact, deleteContact];

const getExtraActions = type =>
    isAnyOf(...extraActions.map(action => action[type]));

const handleFetchContacts = (state, action) => {
    state.contactsList = action.payload;
};

const handleAddContact = (state, action) => {
    state.contactsList.unshift(action.payload);
};

const handleEditContact = (state, action) => {
    const index = state.contactsList.findIndex(
        contact => contact.id === action.payload.id
    );
    state.contactsList[index] = action.payload;
};

const handleDeleteContact = (state, action) => {
    state.contactsList = state.contactsList.filter(
        ({ id }) => id !== action.payload.id
    );
};

const handleFulfilledMatcher = state => {
    state.isLoading = false;
    state.error = null;
};

const handlePendingMatcher = state => {
    state.isLoading = true;
    state.error = null;
};

const handleRejectedMatcher = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: 'contscts',
    initialState: { contactsList: [], isLoading: false, error: null },
    extraReducers: builder =>
        builder
            .addCase(fetchContacts.fulfilled, handleFetchContacts)
            .addCase(addContact.fulfilled, handleAddContact)
            .addCase(deleteContact.fulfilled, handleDeleteContact)
            .addCase(editContact.fulfilled, handleEditContact)
            .addMatcher(getExtraActions('fulfilled'), handleFulfilledMatcher)
            .addMatcher(getExtraActions('pending'), handlePendingMatcher)
            .addMatcher(getExtraActions('rejected'), handleRejectedMatcher),
});

export const contactsReducer = contactsSlice.reducer;
