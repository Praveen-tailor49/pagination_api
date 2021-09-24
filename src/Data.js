import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Data = ({allData, show}) => {
// const data ={
// name:'parveen',
// mobile:123456787
// }


// const [allData , setAlldata] = useState([]);
// const [currentPage ,setCurrentPage] = useState(1);
// const [postPerPage , setPostPerPage] = useState(10);



// useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/todos/")
//     .then((response) => response.json())
//     .then((data) =>{

//             console.log(data);
//             setAlldata(data);
      
//     } );

// },[])

// const indexOfLastPage = currentPage * postPerPage;
// const indexOfFirstPage = indexOfLastPage - postPerPage;
// const currentPost = allData.slice(indexOfFirstPage , indexOfLastPage);


        return(
        <>
            <div className='row'>


            {
                        allData.map((allData)=>{
                            return (
                                <>
                                    <div className=' col-md-3'>
                                        <div class="card" style={{width: "18rem;" }}>

                                            <div class="card-body">
                                                <h5 class="card-title">{allData.title}</h5>
                                                <Link to='/uasdata' onClick={()=>{
                                                    show(allData);

                                                }} class="btn btn-primary">Show Data</Link>
                                            </div>
                                        </div>
                                    </div>
        
                                </>
                            )
                        })
                    }


                    {/* {
                        currentPost.map((allData)=>{
                            return (
                                <>{

                                 props.show_post(postPerPage ,allData)
                                }
                                    <div className=' col-md-3'>
                                        <div class="card" style={{width: "18rem;" }}>

                                            <div class="card-body">
                                                <h5 class="card-title">{allData.title}</h5>
                                                <Link to='/uasdata' onClick={()=>{
                                                    props.show(allData , postPerPage);

                                                }} class="btn btn-primary">Show Data</Link>
                                            </div>
                                        </div>
                                    </div>
        
                                </>
                            )
                        })
                    } */}
            </div>
        </>
        )
}

export default Data;




// {
//     allData.map((allData)=>{
//     return(
//     <>
    
//             <div className=' col-md-3'>
//                 <div class="card" style={{width: "18rem;" }}>

//                     <div class="card-body">
//                         <h5 class="card-title">{allData.title}</h5>
//                         <Link to='/uasdata' onClick={()=>{
//                         props.show(allData);

//                         }} class="btn btn-primary">Go somewhere</Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
    

//     </>
//     ) 
//     })
// }