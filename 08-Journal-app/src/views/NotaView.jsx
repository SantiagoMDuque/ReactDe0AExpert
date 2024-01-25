import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../journal/components"

export const NotaView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ md: 1 }}>
        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light'>28 de agosto, 2023</Typography>
        </Grid>
        <Grid item>
            <Button color="primary" sx={{ padding: 2 }}>
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
            />
            <TextField 
                type='text'
                variant="filled"
                fullWidth
                multiline
                placeholder="¿Qué sucedió en el dia de hoy?"
                minRows={ 5 }
            />
        </Grid>

         <ImageGallery/>

    </Grid>
  )
}
