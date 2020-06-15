import React from 'react';
import PropTypes from 'prop-types';

import { Loading } from '../../components';

import CategoryItem from './CategoryItem';

import './Categories.scss';

const Categories = ({ data, isLoading, url }) => {
    return(
        <div className="categories" data-testid="categories">
            <div className="container">
                <h3 className="categories__title">Categorias</h3>

                {isLoading 
                ? (<Loading text="Carregando..."/>)
                :
                    (<div className="categories__content">
                        {data.map((category) => 
                            <CategoryItem 
                                id={category.id} 
                                name={category.name} 
                                thumb={category.icons[0].url} 
                                url={url} 
                                key={category.id}
                            />
                        )}
                    </div>)
                } 

            </div>
        </div>
    );
    
}

Categories.defaultProps = {
    isLoading: false,
  }
  
  Categories.propTypes = {
    categories: PropTypes.array.isRequired,
    isLoading: PropTypes.bool,
    url: PropTypes.string.isRequired,
  }

export default Categories;

