import React from 'react';
import Lottie from "lottie-react";
import reading from '../utlity/Anemation/reading.json'
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Topic = () => {
    const topic = useLoaderData();
    const loaderData=topic.data;
   // console.log(loaderData)
    return (
        <div className='mx-auto w-3/4 mt-16'>
            <div style={{display:'flex',textAlign:'center',alignItems:'center',justifyContent:'center',marginBottom:'10px'}}>
            <Lottie style={{width:'350px' ,marginLeft:'50px'}} animationData={reading}></Lottie><br />
            <h1 className='text-2xl font-bold ml-2 mr-2'>Use the Quizzes tool to take a quiz, review your quiz results, and see class statistics for a quiz.</h1>
            </div>
            
            
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {
                loaderData.map(course=><Course 
                    course={course}
                    key={course.id}
                    ></Course>)
            }
            </div>
        </div>
    );
};

export default Topic;