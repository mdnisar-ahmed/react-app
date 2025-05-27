import React, {useState} from 'react'

function MyComponent () {

    const [name,setName]=useState("Guest");
    const [quantity,setQuantity]=useState(1);
    const [comment,setComment]=useState("");
    const [payment,setPayment]=useState("");

 
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
  return (
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
  )
}

export default MyComponent