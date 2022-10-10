import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quizes = () => {
    const quizes =useLoaderData();
    const quizQuestion=quizes.data.questions;
    console.log(quizQuestion);
    // for(const question in quizQuestion){

    // }
    const ques = quizQuestion.map(qus=>qus);
    const {correctAnswer,options,question}=ques
    return (
        <div>
            <h1>{correctAnswer}</h1>
        </div>
    );
};

export default Quizes;