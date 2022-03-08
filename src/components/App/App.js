import React from 'react';
import "./App.css"
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import InfoPage from '../InfoPage/InfoPage'
import AddCatPopup from '../AddCatPopup/AddCatPopup';
import * as catsApi from '../../utils/catsApi';
import DeleteCatPopup from '../DeleteCatPopup/DeleteCatPopup';

function App() {
  const [allBreeds, setAllBreeds] = React.useState([]);
  const [initialCards, setInitialCards] = React.useState([]); // карточки из стороннего API
  const [avalibleCats, setAvalibleCats] = React.useState([]); // доступные коты
  const [bookedCats, setBookedCats] = React.useState([]); // забронированные коты
  const [selectedFilter, setSelectedFilter] = React.useState(0);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [onEdit, setIsOnEdit] = React.useState(false);

  // ПОПАПЫ
  const [addCatPopupOpen, setAddCatPopupOpen] = React.useState(false);
  const [deleteCatPopupOpen, setDeleteCatPopupOpen] = React.useState(false);

  // ОШИБКИ
  const [serverError, setServerError] = React.useState(false);
  const [errorText, setErrorText] = React.useState('');
  const [savingStatus, setSavingStatus] = React.useState('');

  React.useEffect(() => {
    if (initialCards.length <= 0) {
      catsApi.getAllBreeds()
        .then(breeds => {
          setAllBreeds(breeds);
        })
        .catch((err) => {
          console.log(`Ошибка получения пород из базы \n${err}`);
          setServerError(true);
        })
      catsApi.getTotalItems()
        .then(totalItems => {
          catsApi.getInitialCards(totalItems.meta.totalItems)
            .then(allCardsArray => {
              setInitialCards(allCardsArray.items);
            })
            .catch((err) => {
              console.log(`Ошибка получения карточек из базы \n${err}`);
              setServerError(true);
            })
        })
        .catch((err) => {
          console.log(`Ошибка получения карточек из базы \n${err}`);
          setServerError(true);
        })

    }
  }, [])

  // фильр
  React.useEffect(() => {
    if (selectedFilter === 0) {
      catsApi.getInitialCards()
        .then(allCardsArray => {
          setInitialCards(allCardsArray.items);
        })
        .catch((err) => {
          console.log(`Ошибка получения карточек из базы \n${err}`);
          setServerError(true);
        })
    } else if (selectedFilter === 1) {
      catsApi.getAvalibleCats()
        .then(avalibleCatsArray => {
          setAvalibleCats(avalibleCatsArray);
        })
        .catch((err) => {
          console.log(`Ошибка получения свободных карточек из базы \n${err}`);
          setServerError(true);
        })
    } else if (selectedFilter === 2) {
      catsApi.getBookedCats()
        .then(bookedCatsArray => {
          setBookedCats(bookedCatsArray);
        })
        .catch((err) => {
          console.log(`Ошибка получения забронированных карточек из базы \n${err}`);
          setServerError(true);
        })
    }

  }, [selectedFilter])

  function handleAddCat(cat) {
    catsApi.addCat(cat)
      .then((newCat) => {
        setInitialCards([...initialCards, newCat]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка добавления карточки \n${err}`);
        setServerError(true);
      })
  }

  function handleDeleteCat(cat) {
    catsApi.deleteCat(cat.id)
      .then(() => {
        setInitialCards((state) => state.filter((item) => !(item.id === cat.id) && item))
      })
      .catch((err) => console.log(`Ошибка удаления карточки \n${err}`))
    closeAllPopups();
  }

  function toggleBookCat(cat) {
    const isBooked = cat.isBooked;
    const catId = cat.id;
    const breedObj = cat.breed;
    catsApi.toggleBookCat(isBooked, catId)
      .then((cat) => {
        const newCat = {...cat, breed: breedObj};
        setInitialCards((state) => state.map((item) => item.id === catId ? newCat : item));
      })
      .catch((err) => console.log(`Ошибка изменения статуса бронирования карточки \n${err}`))
  }

  function handleSelectFilterItem(selectedFilterId) {
    setSelectedFilter(selectedFilterId);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleAddCatClick(){
    setIsOnEdit(false);
    setAddCatPopupOpen(true);
  }

  function handleEditClick(card) {
    setIsOnEdit(true);
    setAddCatPopupOpen(true);
    setSelectedCard(card);
  }

  function handleDeleteClick(card) {
    setDeleteCatPopupOpen(true);
    setSelectedCard(card);
  }

  function closeAllPopups() {
    addCatPopupOpen && setAddCatPopupOpen(false);
    deleteCatPopupOpen && setDeleteCatPopupOpen(false);
  }

  return (
    <div className="app">
      <Header addCat={handleAddCat} isOpen={handleAddCatClick}/>
      <AddCatPopup isOpen={addCatPopupOpen} breeds={allBreeds} isOpen={addCatPopupOpen} onAddCat={handleAddCat} onClose={closeAllPopups} isOnEditPage={onEdit}/>
      <DeleteCatPopup isOpen={deleteCatPopupOpen} onSubmit={handleDeleteCat} onClose={closeAllPopups} selectedCard={selectedCard}/>
      <Main cards={selectedFilter === 0 ? initialCards : selectedFilter === 1 ? avalibleCats : bookedCats}
            onSelectItem={handleSelectFilterItem}
            onCardClick={handleCardClick}
            onCardEditClick={handleEditClick}
            onCardDeleteClick={handleDeleteClick}
            onBookClick={toggleBookCat}
            selectedCard={selectedCard}
      />
      <Footer />
    </div>
  );
}

export default App;
