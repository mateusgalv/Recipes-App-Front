import _React, { useEffect, useRef, useState } from 'react'
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

export default function RecipeCarrousel({ recipeCategory }: ICategory, setDetails: any): JSX.Element {
  const [recipes, setRecipes] = useState<IMeal[]>([]);
  const carousel = useRef<any>(null);

  const getWidth = (): number => {
    return -(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }

  const handleDetails = async ({target}: any): Promise<void> => {
    const { id } = target;
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const { meals: [recipeDetails] } = await response.json();
    // setDetails(recipeDetails);
    console.log(recipeDetails)
  }

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${recipeCategory}`)
      const { meals } = await response.json();
      setRecipes(meals);
    };

    fetchRecipes();
  }, [])

  return (
    <div className='carousel-container'>
      <div ref={carousel} className='carousel'>
        <motion.div
          drag='x'
          whileTap={{ cursor: 'grabbing' }}
          dragConstraints={{ right: 0, left: getWidth() }}
          initial={{ x: 0 }}
          className='items-container'
        >
          {
            recipes.map((recipe) => (
              <div
                key={ recipe.idMeal }
                className='item'
                onClick={ (e) => handleDetails(e) }
              >
                <div className='img-container' id={ recipe.idMeal }>
                  <img
                    src={recipe.strMealThumb}
                    className='recipe-img'
                  />
                </div>
                <div className='name-container' id={ recipe.idMeal }>
                  <p>{recipe.strMeal}</p>
                </div>
              </div>
            ))
          }
        </motion.div>
      </div>
    </div>
  )
}
