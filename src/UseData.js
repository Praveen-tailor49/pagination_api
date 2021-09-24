import React from 'react';
import { Link } from 'react-router-dom';
const UseData = (props) => {
   
    return(
        <>

<div className="card"style={{width: "18rem;"}}>
  
  <div className="card-body">
    <h5 className="card-title"> Title :- {props.title}</h5>
    <p className="card-text">ID :- { props.id}</p>
    <p className="card-text">USERID :- {props.userId}</p>
    <Link to="/" className="btn btn-primary">Home page</Link>
  </div>
</div>
           
          
        </>
    )
}

export default UseData;