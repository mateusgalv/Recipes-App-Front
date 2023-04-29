import { ReactNode, useContext, useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { LoadingContext } from '../context/LoadingContext';

interface ICategory {
  idCategory?: string,
  strCategory: string,
  strCategoryThumb?: string,
  strCategoryDescription?: string,
}

export default function Drinks(): JSX.Element {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [categories, setCategories] = useState<ICategory[]>([]);
  
  useEffect(() => {
    const fetchCategories = async () => {
      setIsReady(false);
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
      const { drinks } = await response.json();
      setCategories(drinks);
      setIsReady(true);
    }

    fetchCategories();
  }, [])

  return (
    <div>
      {
        isReady ? (
          categories.map((category: ICategory): JSX.Element => (
            <div>
              <p>{category.strCategory}</p>
              {
                // <RecipeCarrousel />
              }
            </div>
          ))
        ) : (<h3>Loading ...</h3>)
      }
    </div>
  )
}
