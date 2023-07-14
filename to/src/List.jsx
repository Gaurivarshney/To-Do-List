import React from 'react';
import './style.css';

 function List(props) {
  return (
    <div className='list'>
    <i className="fa-solid fa-xmark" 
    onClick={()=>{
        props.onSelect(props.id);
    }}></i>
    <li>{props.text}</li>
    </div>
  )
}
export default List;