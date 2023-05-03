const fetchCategories = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
  const { categories } = await response.json();
  return categories;
};

export default fetchCategories;