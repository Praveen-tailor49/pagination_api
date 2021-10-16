import React from  'react';

const Pagination = ({postPerPage , totalPost, paginate}) => {

    var postLengths = totalPost.length; 
    const numberPost = [];
    var highValue    = Math.ceil(postLengths / postPerPage);
    console.log("HV -> "+highValue);

    for(let i = 1 ; i <= highValue ; i++){
        numberPost.push(i);
        console.log(numberPost);
        console.log('pushed succesfully -> '+i);
    }
 return(
     <>
        <nav>
            
            <ul className='pagination'>
            
                {
                    
                    numberPost.map(number =>{
                        return(

                        <li key={number} className='page-item'>
                            <button className='page-link'  onClick={()=> paginate(number)}>
                                {number}
                            </button>

                        </li>
                        )
                        })
                }
            </ul>
        </nav>
     </>
 )
}

export default Pagination;