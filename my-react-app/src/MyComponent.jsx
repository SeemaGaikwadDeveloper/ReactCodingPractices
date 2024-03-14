// React hook = Special function that allows functional Components to use React features without writing class components.
// (useState, useEffect, useContext, useReducer, useCallback and more)
// useState() = A react hook that allows the creation of a stateful variable And a setter function to update it's value in the virtual DOM.
import React, {useState} from 'react'

function MyComponent(){
    const [name, setName] = useState("Sima");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    const [changeName, setChangedName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    const updateName = () => {
        setName("Bunny");
    }
    const incrementAge = () => {
        setAge(age + 2);
    }
    const employedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    function handleNameChange(event){
        setChangedName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>

        <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={employedStatus}>Toggle Status</button>

        <p><input value={changeName} onChange={handleNameChange}></input></p>
        <p> Name: {changeName}</p>

        <p><input value={quantity} onChange={handleQuantityChange} type="number"></input></p>
        <p> Quantity: {quantity}</p>

        <p><textarea value={comment} onChange={handleCommentChange} placeholder = "Enter delivery instruction"/></p>
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Giftcard">Giftcard</option>
            
            </select>
        <p>Payemt: {payment} </p>

        <label>
            <input type="radio" value="Pick Up" 
            checked = {shipping === "Pick Up"}
            onChange={handleShippingChange}></input>
            Pick Up
        </label><br/>
        <label>
        <input type="radio" value="Delivery" 
            checked = {shipping === "Delivery"}
            onChange={handleShippingChange}></input>
            Delivery
        </label>
        <p>Shipping: {shipping}</p>

    </div>);
}

export default MyComponent