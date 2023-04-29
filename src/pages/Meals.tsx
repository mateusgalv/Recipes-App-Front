import { ReactNode, useContext, useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { LoadingContext } from '../context/LoadingContext';
import RecipeCarrousel from '../components/RecipeCarrousel';

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
    <div>
      {
        isReady ? (
          categories.map((category: ICategory): JSX.Element => (
            <div>
              <p>{category.strCategory}</p>
              {
                <RecipeCarrousel
                  recipeCategory={category.strCategory}
                />
              }
            </div>
          ))
        ) : (<h3>Loading...</h3>)
      }
    </div>
  )
}
