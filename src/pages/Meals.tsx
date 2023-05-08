import { useEffect, useState } from 'react';
import RecipeCarrousel from '../components/RecipeCarrousel';
import '../styles/recipes.css';
import { motion } from 'framer-motion';

interface ICategory {
  idCategory: string,
  strCategory: string,
  strCategoryThumb: string,
  strCategoryDescription: string,
}

export default function Meals(): JSX.Element {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      setIsReady(false);
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      const { categories } = await response.json();
      setCategories(categories);
      setIsReady(true);
    };

    fetchCategories();
  }, [])

  return (
    <motion.div className='recipes-container'
      // drag='y'
    >
      <div className='category-container'>
      {
        isReady ? (
          categories.map((category: ICategory): JSX.Element => (
            <div className='category-item'>
              <h2>{category.strCategory}</h2>
              <hr></hr>
              {
                <RecipeCarrousel
                recipeCategory={category.strCategory}
                />
              }
            <hr></hr>
            </div>
          ))
          ) : (<h3>Loading...</h3>)
        }
        </div>
    </motion.div>
  )
}
