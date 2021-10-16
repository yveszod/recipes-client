import React from 'react';
import Item from './Item';
import collectionStyles from './Collection.module.css';

const Collection = ({recipes, onDelete}) => {
    return (
        <div className={collectionStyles.grid}>
            {recipes.map((recipe) => {
                return <Item onDelete={onDelete} key={recipe._id} recipe={recipe} />
            })}
        </div>
    )
}

export default Collection
