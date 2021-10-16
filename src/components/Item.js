import React from 'react';
import itemStyles from './Item.module.css';

const Item = ({recipe, onDelete}) => {
    return (
        <div className={itemStyles.item}>
            { recipe.img !== '' ?
                <img src={recipe.img} /> : <div className={itemStyles['no-image']}>No Image :(</div>
            }
            <div className={itemStyles['item-title']}>{recipe.title}</div>
            <div className={itemStyles['item-date']}>Publishing: <b>{recipe.date}</b></div>
            <div className={itemStyles['item-body']}>{recipe.body}</div>
            <button id={recipe._id} onClick={onDelete} className={itemStyles.done}>Mark Done</button>
        </div>
    )
}

export default Item
