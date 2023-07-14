import React, { useState } from 'react'
import './style.css'
import List from './List';

function App() {
  const [inputList, setInputList] = useState('');
  const [Items, setItems]= useState([]);
const inputItems =(event)=>{
  setInputList(event.target.value);
}
const listOfItems=()=>{
  setItems((oldvalues)=>{
    return [...oldvalues, inputList];
  })
  setInputList("");
}
const deleteItems=(id)=>{
  return setItems((oldItems)=>{
    return oldItems.filter((arr, index)=>{
      return index!=id;
    });
  });
};
  return (
    <div>
      <div className="main_div">
        <div className="center_div">
          <h1>ToDO List</h1>
          <input type="text" value={inputList} placeholder='Add an items'  onChange={inputItems}/>
          <button className='btn' onClick={listOfItems}>+</button>
          <ol>
          {Items.map((itemval,index)=>{
            return <List 
            text={itemval}
              key={index}
              id={index}
              onSelect={deleteItems}
            />
          })}
          </ol>
        </div>
      </div>
    </div>
  );
}
export default App;