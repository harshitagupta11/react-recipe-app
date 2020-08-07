import React,{useEffect,useState} from 'react';
import Recipe from './recipe';
import './App.css';

function App() {
  const APP_ID="1a2f8812"
  const APP_KEY="1a4ade6c31fb85d413b3b40ec77693f5	"
  

let [recipes,setRecipes]=useState([]);
let [search,setSearch]=useState("");
let [query,setQuery]=useState("poha");

 const getData= async ()=>{
  
  let dish=query;
  console.log(dish)
  const example_request= `https://api.edamam.com/search?q=${dish}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  let result= await fetch(example_request);
 result= await result.json()
 console.log(dish)
 //console.log(result.hits)
setRecipes(result.hits)
}
const searchRecipe= (e)=>{
  e.preventDefault();
  setQuery(search)
  console.log(query)
  getData()
  setSearch("")
}




useEffect(()=>{
  getData()
  console.log('useEffect starts');
},[query])

  return (
    <div className="App">
      <form className="search_form" onSubmit={searchRecipe}>
  <input type="text" className='search-bar'name="input"value={search} onChange={(e)=>setSearch(e.target.value)}/>
  <button type="submit" className='Search-button' >Search
  </button>
      </form>
      
      {recipes.map(recipe=>(
        <Recipe
        key={recipe.recipe.label}
         title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}/>
      ))}
    </div>
  );
}

export default App;
