import { useDispatch, useSelector } from "react-redux"
import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NotaView, NothingSelectedView } from "../../views"
import { AddOutlined } from "@mui/icons-material"
import { startNewNote } from "../../store/journal/thunks"

export const JournalPage = () => {

  const dispatch = useDispatch();
  const { isSaving, active } = useSelector( state => state.journal );

  const onClickNewPage = () => {
    dispatch( startNewNote() );
  }

  return (
    <JournalLayout>
      {
        !!active 
          ? <NotaView/>
          : <NothingSelectedView />
      }

      <IconButton
        disabled={ isSaving }
        onClick={ onClickNewPage }
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.7},
          position: 'fixed',
          right: 50,
          bottom:50
        }}
      >
        <AddOutlined 
          sx={{ fontSize: 30}}/>
      </IconButton>


    </JournalLayout>
  )
}

