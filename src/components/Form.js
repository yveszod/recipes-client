import React from 'react';
import formStyles from './Form.module.css';

const Form = ({ onSubmit, onDelete }) => {

    return (
        <div className={formStyles['form-wrapper']}>
            <form onSubmit={onSubmit}>
                <div className={formStyles['form-group']}>
                    <label htmlFor="recipe_title">Title</label>
                    <input id="recipe_title" type="text" placeholder="Recipe Title" />
                </div>
                <div className={formStyles['form-group']}>
                    <label htmlFor="recipe_date">Date to be Published on</label>
                    <input id="recipe_date" type="date" placeholder="Date" />
                </div>
                <div className={formStyles['form-group']}>
                    <label htmlFor="recipe_img">Link to Image</label>
                    <input id="recipe_img" type="text" placeholder="Image URL" />
                </div>
                <div className={formStyles['form-group']}>
                    <label htmlFor="recipe_body">Quick Summary</label>
                    <textarea id="recipe_body"></textarea>
                </div>
                <button className={formStyles.button}>Add Recipe</button>
            </form>
        </div>
    )
}

export default Form
