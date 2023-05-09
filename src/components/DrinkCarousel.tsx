import _React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';
import '../styles/carousel.css';

interface IDrink {
  idDrink: string,
  strDrink: string,
  strDrinkThumb: string,
}

interface ICategory {
  recipeCategory: string,
}

export default function DrinkCarousel({ recipeCategory }: ICategory, setDetails: any): JSX.Element {
  const [recipes, setRecipes] = useState<IDrink[]>([]);
  const carousel = useRef<any>(null);

  const getWidth = (): number => {
    return -(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${recipeCategory.replace(' ', '_')}`);
      const { drinks } = await response.json();
      await Promise.all(drinks);
      // console.log(drinks)
      setRecipes(drinks);
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
                key={ recipe.idDrink }
                className='item'
              >
                <div className='img-container' id={ recipe.idDrink }>
                  <img
                    src={recipe.strDrinkThumb}
                    className='recipe-img'
                  />
                </div>
                <div className='name-container' id={ recipe.idDrink }>
                  <p>{recipe.strDrink}</p>
                </div>
              </div>
            ))
          }
        </motion.div>
      </div>
    </div>
  )
}
