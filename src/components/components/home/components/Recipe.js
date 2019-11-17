import React from 'react';
// import Card from './Card';
import {uRecipe} from './styles';

function Recipe() {
  const [recipeList, setRecipeList] = React.useState([]);
  const recipeListFiltered = recipeList
    .filter(
      elem => elem.ingredients.find(
        val => val === "Chicken"
      )
    )
    .sort(
      (a, b) => b.rating - a.rating
    );
  React.useEffect(()=>{
    fetch("https://api.myjson.com/bins/171v5n").then(res=> res.json())
      .then(response => setRecipeList(response.recipe))
      .catch(()=>{
        setRecipeList([]);
      });
  },[setRecipeList]);
  console.log(recipeListFiltered);
  return (
    <div className={uRecipe}>
      {/* <Card image={image} title={title} rating={rating} description={description} creator={creator} /> */}
    </div>
  );
}

export default Recipe;
