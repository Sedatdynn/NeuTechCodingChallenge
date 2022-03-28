import React from 'react'
import Job from './Job';
const Jobs = ({data}) => {
    console.log(data);
  return (
    <div className='jobs'>
    {data.map(d =>{
        return <Job data={d}/>; 
    })}
    </div>
  )
}

export default Jobs