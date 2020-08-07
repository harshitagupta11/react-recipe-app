import React,{useState} from 'react';

const Recipe=(props)=>{
  return(
<div>
<h1>{props.title}</h1>
<p><strong> Calories contain: </strong>{props.calories}</p>
<img src={props.image} alt="recipe image"/>
</div>

  )
}
export default Recipe;