import React from "react";

import "../styles/todocardlist.css";
import ToDoCard from "./ToDoCard";
import { useNavigate } from "react-router-dom";

const ToDoCardList = ({cards, handleDeleteCard, handleCompleted, handleEditCard}) => {

    const navigate = useNavigate();
    const showForm = () => {
        const path = 'add-card';
        navigate(path);
    }
    return (
        <div>
            <div className="header-box">
                <h1>To Do Application</h1>
            </div>
            <div className="add-task-box">
                <button className="add-task-button" onClick={showForm}>Add Task</button>
            </div>
            <div className="cards-page">
                {cards.map((card) => (
                //console.log("Card:  ", card)
                <ToDoCard card = {card} handleDeleteCard = {handleDeleteCard} handleCompleted = {handleCompleted} handleEditCard = {handleEditCard} />))}
                <button className="add-task-button-cards-page" onClick={showForm}>Add Task</button>
            </div>
        </div>
    )
}

export default ToDoCardList