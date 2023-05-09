import { useEffect, useState } from 'react';
import RecipeCarrousel from '../components/RecipeCarrousel';
import '../styles/recipes.css';

interface ICategory {
  idCategory: string,
  strCategory: string,
  strCategoryThumb: string,
  strCategoryDescription: string,
}

export default function Meals(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<ICategory[]>([]);
  // const [details, setDetails] = useState<any>({});

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(false);
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      const { categories } = await response.json();
      setCategories(categories);
      setIsLoading(true);
    };

    fetchCategories();
  }, [])

  return (
    <div className='recipes-container'>
      <div className='category-container'>
        {
          isLoading ? (
            categories.map((category: ICategory): JSX.Element => (
              <div className='category-item'>
                <h2>{category.strCategory}</h2>
                <hr></hr>
                {
                  <RecipeCarrousel
                    recipeCategory={category.strCategory}
                    // setDetails={setDetails}
                  />
                }
                <hr></hr>
              </div>
            ))
          ) : (<h3>Loading...</h3>)
        }
      </div>
    </div>
  )
}
