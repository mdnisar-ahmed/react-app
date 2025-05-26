import React from 'react'
import '../index.css';
import propTypes from 'prop-types';


function List(props) {
  
const category=props.Category;
          //fruits.sort((a,b)=>a.name.localeCompare(b.name));//ALPHABETICAL
        //   fruits.sort((a,b)=>b.name.localeCompare(a.name));//ALPHABETICAL REVERSE
const ascendingCalories=props.items.sort((a,b)=>a.calories-b.calories); //numeric
        // props.items.sort((a,b)=>b.calories-a.calories); //decending
        // const highCalFruit=props.items.filter(fruit=>fruit.calories>100);
        // const lowCalFruit=fruits.filter(fruit=>fruit.calories<100);

    const listfruits=ascendingCalories.map(fruit=><li key={fruit.id}>{fruit.name} : &nbsp;<b>{fruit.calories}</b></li>)
    
  return (
   <>
   <h2 className="list-category">{category}</h2> 
   <ol className="list-items">{listfruits}</ol>
   </>
  )
}

List.propTypes={
    category:propTypes.string,
    items:propTypes.arrayOf(propTypes.shape({id:propTypes.number, name:propTypes.string, calories:propTypes.number}))
}

List.defaultProps={
    category:"Nisar",
    items:[]
}


export default List