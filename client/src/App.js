import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import './App.css';

function App() {

    const [foodName, setFoodName] = useState("");
    const [days, setDays] = useState(0);
    const [foodList, setFoodList] = useState([]);
    const [newFoodName, setNewFoodName] = useState("");

    const addToList = () => {
        Axios.post("http://localhost:3001/insert", {foodName: foodName, days: days});
    };

    const updateFood = (id) => {
        Axios.put("http://localhost:3001/update", {id: id, newFoodName: newFoodName})
    }

    const deleteFood = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`);
    }

    useEffect(()=>{
        Axios.get("http://localhost:3001/read")
            .then((res)=>{
                setFoodList(res.data);
            })
    },[]);

    return (
        <div className="App">
            <h1>CRUD App with MERN</h1>

            <label htmlFor="food">Food Name:</label>
            <input type="text" name="food" onChange={(e)=>{setFoodName(e.target.value)}} />
            <label htmlFor="days">Days Since You Ate It:</label>
            <input type="number" name="days" onChange={(e)=>{setDays(e.target.value)}}/>
            <button onClick={addToList}>Add to List</button>
            <h1>Food List</h1>
            {foodList.map((val,key)=>{
                return(
                    <div key={key}>
                        <h3>{val.foodName}</h3>
                        <input className="upd" type="text" placeholder="New Food Name..." onChange={(e)=>{setNewFoodName(e.target.value)}}/>
                        <h4>{val.daysSinceIAte}</h4>
                        <button className="btn" onClick={()=>{updateFood(val._id)}}>Update</button>
                        <button className="btn" onClick={()=>{deleteFood(val._id)}}>Delete</button>
                    </div>
                ) 
            })}
        </div>
    );
}

export default App;
