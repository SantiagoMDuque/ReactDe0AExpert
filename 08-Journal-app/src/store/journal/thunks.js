import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEnpptyNote, deleteNotById, savingNewNote, setActiveNote, setNotes, setPhotosToActivateNote, setSaving, updateNote } from "./journalSlice";
import { fileUpload, loadNotes } from "../../helpers";


export const startNewNote = () => {
    return async( dispatch, getState ) =>{

        await dispatch( savingNewNote() );
        const { uid } = getState().auth; 
        const newNote = {
            title: '',
            doby: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes` ) );
        await setDoc( newDoc,newNote);

        await dispatch( addNewEnpptyNote( newNote ) );
        await dispatch( setActiveNote( newNote ) );
    }
}

export const startLoadingNotes = () => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth; 

        const notes = await loadNotes(uid);
        dispatch(setNotes(notes))

    }
}

export const startSaveNote = () =>{
    return async( dispatch, getState ) =>{

        dispatch( setSaving() )

        const { uid } = getState().auth; 
        const { active: nota } = getState().journal; 

        const noteToFireStore = { ...nota };
        delete noteToFireStore.id;

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ nota.id }` );
        await setDoc( docRef, noteToFireStore, { merge: true });

        dispatch(updateNote({...nota})) ;

    }
}

export const startUploadingFiles = ( files = [] ) =>{
    return async( dispatch ) => {
        dispatch( setSaving() );
    
        const fileUploadPromises = [];

        for (const file of files) {
            fileUploadPromises.push(fileUpload(file));
        }

        const photosUrls = await Promise.all(fileUploadPromises);
        dispatch( setPhotosToActivateNote(photosUrls) );

    }
}

export const startDeletingNote = () => {
    return async( dispatch, getState) => {
        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        const docRef = doc( FirebaseDB, `${uid}/journal/notes/${note.id}`);
        await deleteDoc(docRef)

        dispatch( deleteNotById(note.id));

    }
}