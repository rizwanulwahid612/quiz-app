import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';


const Quizes = () => {
    const quizes =useLoaderData();
    const quizQuestion=quizes.data.questions;
    console.log(quizQuestion);
   
    return (
        <div>
           
            {
                quizQuestion.map(ques=><Question 
                    ques={ques}
                    key={ques.id}
                    
                ></Question>)
            }
        </div>
    );
};

export default Quizes;