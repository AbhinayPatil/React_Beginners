import React, { useState } from 'react';
import './App.css';
import Card from './Card.jsx';
import data from './data.json';

function App() {
  
  const [nData,setnData] = useState(data);
  const [count,setCount] = useState(nData.length+1);
  
  function clearAll(){
    setCount(0);
    setnData([]);
  }
  function dltItem(itemId){
    const newItems = nData.filter((item) => item.id !== itemId); 
    setnData(newItems);
  }
  function addItem(){
    setCount(count+1);
    let name = prompt("Enter name: ");
    let age = parseInt(prompt("Enter age: "));
    let newObject = {
      "id": count,
      "name": name,
      "age": age
    };
    setnData([...nData,newObject]);
    
  }
  function updateItem(item){
    let name = prompt("Enter name: ",item.name);
    let age = parseInt(prompt("Enter age: ",item.age));
    const targetObject = nData.find((obj) => obj.id === item.id);
    if(targetObject){
      targetObject.name = name;
      targetObject.age = age;
    }
    setnData([...nData]);
  }
  return (
    <>
      <ul>
        {
          nData?.map((item) => {
            return(
            <li key={item.id}>
              <Card item={item} dltItem={()=>dltItem(item.id)} updateItem={()=>updateItem(item)} />
            </li>
          )})
        }
      </ul>
      <div className='btn-container'>
      <button className='btn' onClick={clearAll}>clear all</button>
      <button className='btn' onClick={addItem}>Add</button>
      </div>
      

    </>
  )
}

export default App
