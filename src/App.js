import { nanoid } from 'nanoid';
import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createStore } from "redux";

import ToDoCardList from './components/ToDoCardList';
import AddCard from './components/AddCard';
import EditCard from './components/EditCard';

const App = () => {
  
  //const dateToday = new Date(new Date().toDateString());
  //var dateToday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const date = new Date();
  const noTimeDate = `${date.getDate()}/${((date.getMonth()) + 1)}/${date.getFullYear()}`

  const [cards, setCards] = useState([
    {
      id: nanoid(),
      title: "Sample Card",
      description: "Lorem ipsum",
      date: noTimeDate,
      isCompleted: false,
    },
    {
      id: nanoid(),
      title: "Sample Card 2",
      description: "Lorem ipsum",
      date: noTimeDate,
      isCompleted: false,
    },
    {
      id: nanoid(),
      title: "Sample Card 3",
      description: "Lorem ipsum",
      date: noTimeDate,
      isCompleted: false,
    },
    {
      id: nanoid(),
      title: "Sample Card 4",
      description: "Lorem ipsum",
      date: noTimeDate,
      isCompleted: false,
    },
  ]);

  
  const addCard = (card) => {
    const { title, description, date, isCompleted } = card;

    const noTimeDate = `${date.getDate()}/${((date.getMonth()) + 1)}/${date.getFullYear()}`

    const newCard = {
      id: nanoid(),
      title: title,
      description: description,
      date: noTimeDate,
      isCompleted: isCompleted
    };

    console.log(newCard);
    const newCardsArray = [...cards, newCard];
    setCards(newCardsArray);
  }
  
  const deleteCard = (id) => {
    const newCards = cards.filter((card) => card.id !== id);
		setCards(newCards);
	};
  
  const handleCompleted = (id) => {
    const card = cards.filter((card) => card.id === id)
    const { id: cardId, title, description, date, isCompleted } = card[0];
    
    const newCards = cards.filter((card) => card.id !== id);
		setCards(newCards);
    
    const handleCompletedValue = (isCompleted) ? false : true;
    
    const newCard = {
      id: cardId,
      title: title,
      description: description,
      date: date,
      isCompleted: handleCompletedValue,
    };
    
    const newCardsArray = [...newCards, newCard];
    setCards(newCardsArray);
  }
  
  const editCard = (card) => {
    const { id } = card;
    const existingCard = cards.filter((currentCard) => currentCard.id === id)
    const { id: currentId, date, isCompleted } = existingCard[0];
    
    const { title, description } = card;
    
    /* const newCards = cards.filter((currentCard) => currentCard.id !== id);
		setCards(newCards); */
    
    const newCard = {
      id: currentId,
      title: title,
      description: description,
      date: date,
      isCompleted: isCompleted
    }
    
    const newCardsArray = cards.map((currentCard) => currentCard.id === id ? newCard : currentCard)

    //const newCardsArray = [...newCards, newCard];
    setCards(newCardsArray);
  }
  
  const findCard = (id) => {
    const findExistingCard = cards.filter((card) => card.id === id);
    return findExistingCard[0];
  }
  
  /* let reduxData = {
    id: nanoid(),
    title: "Demo card",
    description: "Demo card for redux",
    date: noTimeDate,
    isCompleted: false,
  } */

  const store = createStore((state, action) => {
      const { type } = action;
  
      switch (type) {
          case 'ADD':
            console.log(action);
            addCard(action);
              break;
          case 'EDIT':
              editCard(action);
              break;
          default:
              console.log();
      }
  })
  
  const handleAddCard = (card) => {
    const { id, title, description, date, isCompleted } = card;
    store.dispatch({type: 'ADD', id, title, description, date, isCompleted})
  }

  const handleEditCard = (card) => {
    const { id, date, isCompleted, title, description } = card;
    store.dispatch({type: 'EDIT', title, description, id, date, isCompleted});
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path ='/' element = {<ToDoCardList cards = {cards} handleDeleteCard = {deleteCard}  handleCompleted = {handleCompleted} />} />
          <Route path='/add-card' element = {<AddCard handleAddCard = {handleAddCard} />} />
          <Route path='/edit-card/:id' element = {<EditCard handleEditCard = {handleEditCard} findCard = {findCard} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;