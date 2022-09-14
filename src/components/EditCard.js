import { useState } from "react";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from "react-router-dom";

import "../styles/addcard.css"


const EditCard = ({handleEditCard, findCard}) => {
    //const [startDate, setStartDate] = useState(new Date());

    const navigate = useNavigate();
    const redirectToHome = () => {
        const path = '/';
        navigate(path);
    }

    const { id } = useParams();

    const getCardFromId = findCard(id);
    const { title: existingTitle, description: existingDescription } = getCardFromId;

    const [formData, setFormData] = useState({
        id: id,
        title: existingTitle,
        description: existingDescription,
    });
    
    const updateFormData = event =>
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
    });

    const handleSubmit = event => {
        event.preventDefault();
        const card = formData;
        handleEditCard(card);
        redirectToHome();
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
                <button className = "add-card-submit" type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default EditCard;