import React, {useState} from 'react'

function MyComponent () {

    const [name,setName]=useState("Guest");
    const [quantity,setQuantity]=useState(1);
    const [comment,setComment]=useState("");
    const [payment,setPayment]=useState("");


    //for the updating the array of the elements using the prev state
     const [foods,setFoods] = useState(["Apple", "Mango", "Banana"]);

     //updating the array of Objects in State

     const [car,setCar] = useState([]);
     const [caryear,setYear] =useState(new Date().getFullYear() );
     const [carmodel,setCarModel]= useState("");
     const [carmake, setCarMake]= useState("");
 
    function handleNameChange(e){
        setName(e.target.value);
    }

    function handleQualityChange(e){
        setQuantity(e.target.value);
    }
    function handleComment(e){
        setComment(e.target.value);
    }
    function handlePayment(e){
        setPayment(e.target.value);
    }
    function handleClick(){
        const newFood=document.getElementById("foodInput").value;
        document.getElementById("foodInput").value="";
        setFoods(f=>[...f,newFood]);
    }
    function handleRemoveFood(index){
        setFoods(foods.filter((_,i)=>i!==index));
    }

    //update car objects in array
    function handleAddCar(){
        const newCar={year:caryear,
                        model:carmodel,
                        make:carmake
                    };
        console.log('Nisar', newCar)
        setYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
        setCar(c=>[...c,newCar]);
        

    }

    function handleRemoveCar(index){
        setCar(c=>c.filter((_,i)=>i!==index))
    }
    function handleYear(e){
        setYear(e.target.value);
    }
    function handleModel(e){
        setCarModel(e.target.value);
    }
    function handleMake(e){
        setCarMake(e.target.value);
    }
  return (
    <>
    <div>
<input value={name} onChange={handleNameChange} />
<p>Name: {name}</p>
<input value={quantity} onChange={handleQualityChange} type="number"/>
<p>Quantity: {quantity}</p>
<textarea value={comment} onChange={handleComment} placeholder="Leave the instructions"/>
<br></br>
<select value={payment} onChange={handlePayment}>
    <option value="" >Select a City</option>
<option value="Hyderabad">Hyderabad</option>
<option value="Chennai">Chennai</option>
<option value="Kolkata">Kolkata</option>
<option value="Bhubeshwar">Bhubeshwar</option>
</select>
<p>City:{payment}</p>
    </div>
    <div>
<h2> List of Food</h2>
<ul>{foods.map((food,index)=><li key={index} onClick={()=>{handleRemoveFood(index)}}>{food}</li>)}</ul>
<input type="text" id="foodInput" placeholder='Enter the Fruit' /> 
<button onClick={handleClick} >Add Button</button>
</div>
<div>
    <h2> List of Car Objects</h2>
    <ul>{car.map((c,index) => <li key={index} onClick={()=>handleRemoveCar(index)}> {c.year} {c.model} {c.make} </li>)}</ul>

    <input type="number" value={caryear} onChange={handleYear} placeholder='enter year'/><br></br>
    <input type="text" value={carmodel} onChange={handleModel} placeholder='enter car model'/><br></br>
    <input type="text" value={carmake} onChange={handleMake} placeholder='enter car make' /><br></br>
<button onClick={handleAddCar} >Add Car</button>


</div>
</>
  )
}

export default MyComponent