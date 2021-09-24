import Data from './Data.js'
import UseData from './UseData.js'
import React, { useState , useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import Pagination from './pagination.js';

function App() {
  const [title, setTitle]= useState();
  const [id, setId] = useState();
  const [com, setCom] = useState();
  const [userId, setUserId] = useState();
  const [allData , setAlldata] = useState([]);
  const [postPerPage , setPostPerPage] = useState(10);
  const [currentPage ,setCurrentPage] = useState(1);
  
  const show = (e )  =>{
    setCom(e.completed);
    setId(e.id);
    setTitle(e.title);
    setUserId(e.userId);
    
    console.log(e);
  }
  
  
  
  
  useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((data) =>{
  
              console.log(data);
              setAlldata(data);
        
      } );
  
  },[])
  
const indexOfLastPage = currentPage * postPerPage;
const indexOfFirstPage = indexOfLastPage - postPerPage;
const currentPost = allData.slice(indexOfFirstPage , indexOfLastPage);

const paginate = (pageNumber) =>{
  setCurrentPage(pageNumber);
}

  return ( 
  
    <Switch>
      <Route exact path='/' component={Data}>
      {/* <Data show={show} show_post={show_post}  />
      <Pagination postPerPage={postPerPage} totalPost={allData} /> */}
      <Data allData ={currentPost} show ={ show}/>
      <Pagination postPerPage ={ postPerPage} totalPost ={allData} paginate={paginate} />
      </Route>
      <Route exact path='/uasdata' component={UseData}>
      <UseData title= {title} userId ={userId} com={com} id={id}/>
      
      </Route>
    </Switch>
    

   
  );
}

export default App;
