import React  from 'react';
import Ink from 'react-ink';
import { Link } from 'react-router-dom';

const CategoryItem = ({ id, thumb, name, url }) => {

    return (
        <div className="categories__item" data-testid="category" style={{backgroundImage: `url(${thumb})`}}>
            <Link to={`${url}/${id}`} className="categories__item__link">
                <span className="categories__item__title">{name}</span>
                <Ink />
            </Link>
        </div> 
    )
}


export default CategoryItem;

