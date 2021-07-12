import React, {useState} from 'react';
import Axios from 'axios';
import './App.css';

function App() {

    const [foodName, setFoodName] = useState("");
    const [days, setDays] = useState(0);

    const addToList = () => {
        alert(foodName);
    };

    return (
        <div className="App">
            <h1>CRUD App with MERN</h1>

            <label htmlFor="food">Food Name:</label>
            <input type="text" name="food" onChange={(e)=>{setFoodName(e.target.value)}} />
            <label htmlFor="days">Days Since You Ate It:</label>
            <input type="number" name="days" onChange={(e)=>{setDays(e.target.value)}}/>
            <button onClick={addToList}>Add to List</button>
        </div>
    );
}

export default App;
