import React, { useEffect, useState } from 'react';
import fetchCategories from '../utils/fetchCategories';
import '../styles/recipes.css';

interface ICategory {
  idCategory: string,
  strCategory: string,
  strCategoryThumb: string,
  strCategoryDescription: string,
}

export default function RecipeCategories(): JSX.Element {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      const categories = await fetchCategories();
      setCategories(categories);
    };

    getCategories();
  }, [])

  return (
    <div>
      {
        categories.map(category => (
          <div className='category-display'>
            <img
              className='category-display'
              src={category.strCategoryThumb}
              alt={category.strCategory}
            />
          </div>
        ))
      }
    </div>
  );
}
