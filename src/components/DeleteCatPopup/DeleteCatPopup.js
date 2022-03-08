import React from 'react';
import './DeleteCatPopup.css';
import {Box, Button, FormControl, InputLabel, MenuItem, Select, TextField} from '@mui/material';
import {theme} from '../../theme';
import {ThemeProvider} from '@mui/material/styles';

function DeleteCatPopup({ isOpen, onSubmit, onClose, selectedCard}) {

  function handleSubmitDelete() {
    onSubmit(selectedCard);
  }

  return(
    <section className={`popup ${isOpen && 'popup_opened'}`}>
      <div className={'popup__container'}>
        <button type="button" className={'popup__close-btn'} onClick={onClose}></button>
        <p className={'popup__title'}>Вы уверены, что хотите удалить карточку котика?</p>

        <ThemeProvider theme={theme}>
          <Button sx={{ mt: 1, mb: 1 }}
                  variant="contained"
                  color={'secondary'}
                  onClick={handleSubmitDelete}>
            Да
          </Button>

          <Button sx={{ mt: 1, mb: 1 }}
                  variant="contained"
                  color={'secondary'}
                  onClick={onClose}>
            Нет
          </Button>
        </ThemeProvider>

      </div>
    </section>
  );
}

export default DeleteCatPopup;