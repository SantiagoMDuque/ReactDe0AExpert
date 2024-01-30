import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useRef } from "react";

import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import Swal from "sweetalert2" ;
import 'sweetalert2/dist/sweetalert2.css'

import { ImageGallery } from "../journal/components"
import { useForm } from "../hooks/useForm"
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from "../store/journal"

export const NotaView = () => {

    const dispatch = useDispatch()
    const { active: note, messageSaved, isSaving } = useSelector( state => state.journal )

    const { body, title, date, onInputChange, formState} = useForm( note );

    const dateString = useMemo(() => {
        const newDate = new Date( date );
        return newDate.toUTCString()
    }, [date]);

    const fileInputRef = useRef();

    useEffect( () => {
        dispatch( setActiveNote(formState) )
    },[formState])

    const onSaveNote = () =>{
        dispatch(startSaveNote());
    }

    useEffect( () => {
        if(messageSaved.length > 0 ){
            Swal.fire('Nota Actualizada', messageSaved, 'success');
        }
    },[messageSaved])

    const onFileInputChange = ( {target} ) => {
        if( target.files ===0 ) return;

        dispatch( startUploadingFiles(target.files) )
    }

    const onDelete = () => {
        dispatch( startDeletingNote() );
    }

    return (
        <Grid 
            className='animate__animated animate__faceIn animate__faster'
            container 
            direction='row' 
            justifyContent='space-between' 
            alignItems='center' 
            sx={{ md: 1 }}>
            <Grid item>
                <Typography fontSize={ 39 } fontWeight='light'>{ dateString }</Typography>
            </Grid>

            <input 
                type="file" 
                multiple
                onChange={ onFileInputChange }
                style={{ display: 'note'}}
                ref={ fileInputRef }
            />
            <IconButton 
                color="primary"
                disabled={ isSaving }
                onClick={ () => fileInputRef.current.click() }
            >
                <UploadOutlined />
            </IconButton>

            <Grid item>
                <Button 
                    disabled={ isSaving }
                    onClick={ onSaveNote }
                    color="primary" 
                    sx={{ padding: 2 }}
                    >
                    <SaveOutlined sx={{ fontSize: 30, mr:1 }}/>
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField 
                    type='text'
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un titulo"
                    label="Titulo"
                    sx={{ border: 'none'}}
                    name="title"
                    value={ title }
                    onChange={ onInputChange }
                />
                <TextField 
                    type='text'
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedió en el dia de hoy?"
                    minRows={ 5 }
                    name="body"
                    value={ body }
                    onChange={ onInputChange }
                />
            </Grid>

            <Grid container justifyContent='end'>
                <Button
                    onClick={ onDelete }
                    sx={{ mt: 2}}
                    color="error"
                >
                    <DeleteOutline />
                </Button>
            </Grid>

            <ImageGallery images={ note.imageUrls}/>

        </Grid>
    )
}

