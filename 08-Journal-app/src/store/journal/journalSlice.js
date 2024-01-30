
import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        // active:{
        //     id: 'ACB123',
        //     title: '',
        //     body: '',
        //     date: 123456879,
        //     imageUrls: [] , //https://foto1.jpg, https://foto2.jpg, https://foto3.jpg
        // }
    },
    reducers: {
        savingNewNote: (state) => {
            state.isSaving = true
        },
        addNewEnpptyNote: (state, action) => {
            state.notes.push( action.payload );
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
            state.messageSaved = '';
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        updateNote: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map( note => {
                if(note.id == action.payload.id) {
                    return action.payload;
                }
                return note;
            })
            state.messageSaved = `${ action.payload }, actualizada correctamente`
        },
        setPhotosToActivateNote: (state, action) =>{
            state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ];
            state.isSaving = false;
        },
        deleteNotById: (state, action) => {
            state.active = null;
            state.isSaving = false;
            state.notes = state.notes.filter(note => note.id !== action.payload);
        },
        clearNotesLogout: (state) =>{
            state.isSaving = false;
            state.messageSaved = '',
            state.notes = [],
            state.active = null
        },
    }
});

export const { 
    addNewEnpptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNotById, 
    savingNewNote,
    setPhotosToActivateNote,
    clearNotesLogout,
} = journalSlice.actions;