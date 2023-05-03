import React, { useEffect, useState } from 'react';
import fetchCategories from '../utils/fetchCategories';

interface ICategory {
  idCategory: string,
  strCategory: string,
  strCategoryThumb: string,
  strCategoryDescription: string,
}

export default function RecipeCategories(): JSX.Element {
  const [categories, setCategories] = useState<ICategory[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getCategories = async () => {
      const categories = await fetchCategories();
      setCategories(categories);
      // setIsLoading(false);
    }

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
