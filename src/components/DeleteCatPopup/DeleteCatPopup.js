import React from 'react';
import './DeleteCatPopup.css';
import { Button, ButtonGroup } from '@mui/material';
import {theme} from '../../theme';
import {ThemeProvider} from '@mui/material/styles';

function DeleteCatPopup({ isOpen, onSubmit, onClose, selectedCard}) {

  function handleSubmitDelete() {
    onSubmit(selectedCard);
  }

  return(
    <section className={`popup ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button type="button" className="popup__close-btn" onClick={onClose}/>
        <p className="popup__title">Yдалить карточку котика?</p>

        <ThemeProvider theme={theme}>
          <ButtonGroup sx={{mt: 1}} >
            <Button
                    variant="contained"
                    color={'secondary'}
                    onClick={handleSubmitDelete}>
              Да
            </Button>

            <Button
                    variant="contained"
                    color={'secondary'}
                    onClick={onClose}>
              Нет
            </Button>
          </ButtonGroup>

        </ThemeProvider>

      </div>
    </section>
  );
}

export default DeleteCatPopup;