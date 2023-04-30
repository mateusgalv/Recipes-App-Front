import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';
import '../styles/carousel.css';

interface IMeal {
  idMeal: string,
  strMeal: string,
  strMealThumb: string,
}

interface ICategory {
  recipeCategory: string,
}

export default function RecipeCarrousel({ recipeCategory }: ICategory): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [recipes, setRecipes] = useState<IMeal[]>([]);
  const [width, setWidth] = useState(0)
  const carousel = useRef(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      setIsLoading(true);
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${recipeCategory}`)
      const { meals } = await response.json();
      setRecipes(meals);
      setIsLoading(false);
    };

    fetchRecipes();
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
  }, [])

  return (
    <div className='carousel-container'>
      <div ref={ carousel } className='carousel'>
        <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className='items-container'>
          {
            !isLoading ? (
              recipes.map((recipe) => (
                <div className='item'>
                  <img src={recipe.strMealThumb} className='recipe-img' />
                  <p>{recipe.strMeal}</p>
                </div>
              ))
            ) : (<h3>Loading</h3>)
          }
        </motion.div>
      </div>
    </div>
  )
}
