import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    const {id,logo,name,total}=course 
    return (
        <div>
    <div className="card card-compact w-full bg-base-100 shadow-xl">
  <figure><img style={{width:'90%',backgroundColor:'gray',borderRadius:'20px'}} src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}    Total: {total}</h2>
    <div className="card-actions justify-end">
     <Link to={`/quizes/${id}`}><button className="btn btn-primary">Start Quiz</button></Link> 
    </div>
  </div>
</div>
        </div>
    );
};

export default Course;