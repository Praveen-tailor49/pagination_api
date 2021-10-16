import React  from 'react';
import { Link } from 'react-router-dom';

const Data = ({allData, show}) => {



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


        
            </div>
        </>
        )
}

export default Data;
