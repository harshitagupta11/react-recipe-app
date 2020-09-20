import React,{useState} from 'react';
import {Link} from 'react-router-dom';

const Recipe=(props)=>{
  const [ingredients,setIngredients]=useState([])
//console.log(props)
const viewIngredients=()=>{

  setIngredients(props.ingredients)
}
const ing = props.ingredients

  return(
<div className='list'>

<div className="card card-style">
    <div className="card-image waves-effect waves-block waves-light">
      <img  src={props.image} alt="recipe"/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{props.title}<i className="material-icons right activator">more_vert</i></span>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">{props.title}<i class="material-icons right">close</i></span>
      <p> 
          <ul>
          {ing.map((ing)=><li>{ing}</li>)}
          </ul>
      
      </p>
    </div>

    
  </div>

</div>
  );
}
export default Recipe;