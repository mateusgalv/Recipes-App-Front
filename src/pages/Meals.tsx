import { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'

export default function Meals() {
  const [mealRecipes, setMealRecipes] = useState(null);
  useFetch('www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')

  // useEffect(() => {
  //   const fetchMeal = async () => {
  //     const response = await useFetch('www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
  //     const data = await response.json();
  //     setMealRecipes(data);
  //   }

  //   fetchMeal();
  // }, []);


  return (
    <div>Meals</div>
  )
}
