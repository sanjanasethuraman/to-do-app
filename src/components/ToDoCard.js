import React from "react";
import { AiFillCheckCircle, AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import "../styles/todocard.css";

const ToDoCard = ({card, handleDeleteCard, handleCompleted, handleEditCard}) => {
    //const date = `${new Date().toLocaleString() + ""}`
    const { id, title, description, date, isCompleted } = card;
    const status = (isCompleted ? "Done" : "Yet to complete");

    const navigate = useNavigate();
    const showEditForm = (id) => {
        const path = `/edit-card/${id}`;
        navigate(path);
    }

    return (
        <div className="to-do-card">
            <h4>{title}</h4>
            <p className="description">{description}</p>
            <p className="date">{date}</p>
            <small className="status">Status: {status}</small>
            <div className="buttons">
                <button className="completed-icon" onClick={() => handleDeleteCard(id)}><AiFillDelete /></button>
                <button className="edit-icon" onClick={() => showEditForm(id)}><AiFillEdit /></button>
                <button className="delete-icon" onClick={() => handleCompleted(id)}><AiFillCheckCircle /></button>
            </div>
        </div>
    )
}

export default ToDoCard;
            /* <div className="to-do-card">
                <h4>Sample card</h4>
                <p className="description">Lorem ipsum</p>
                <p className="date">{date}</p>
            </div>
            <div className="to-do-card">
                <h4>Sample card 2</h4>
                <p className="description">Lorem ipsum</p>
                <p className="date">{date}</p>
            </div>
            <div className="to-do-card">
                <h4>Sample card 3</h4>
                <p className="description">Lorem ipsum</p>
                <p className="date">{date}</p>
            </div>
            <div className="to-do-card">
                <h4>Sample card 4</h4>
                <p className="description">Lorem ipsum</p>
                <p className="date">{date}</p>
            </div>
            <div className="to-do-card">
                <h4>Sample card 5</h4>
                <p className="description">Lorem ipsum</p>
                <p className="date">{date}</p>
            </div> */