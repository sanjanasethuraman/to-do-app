import { useState } from "react";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { nanoid } from 'nanoid';

import "../styles/addcard.css"


const AddCard = ({handleAddCard}) => {
    //const [startDate, setStartDate] = useState(new Date());

    const navigate = useNavigate();
    const redirectToHome = () => {
        const path = '/';
        navigate(path);
    }

    const [formData, setFormData] = useState({
        id: nanoid(),
        title: "",
        description: "",
        isCompleted: false,
        date: new Date(),
    });
    
    const updateFormData = event =>
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
    });

    const validateformData = (card) => {
        const { title, description } = card;

        if (!(title && description)) {
            window.alert("All inputs are required");
            return false;
        }

        return true;
    }

    const handleSubmit = event => {
        event.preventDefault();
        const card = formData;
        if (validateformData(card)) {
            handleAddCard(card);
            redirectToHome();
        }
    }

    const { title, description } = formData;
    
    return (
        <div className="add-card-form">
            <form>
                <input
                    value={title}
                    onChange={e => updateFormData(e)}
                    placeholder="Title"
                    type="text"
                    name="title"
                    required
                />
                {<input
                    value={description}
                    onChange={e => updateFormData(e)}
                    placeholder="Description"
                    type="text"
                    name="description"
                    required
                />}
                {<DatePicker selected={formData.date} dateFormat="Pp" onChange={(date) => formData.date = date} />}
        
                <button className = "add-card-submit" type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default AddCard;