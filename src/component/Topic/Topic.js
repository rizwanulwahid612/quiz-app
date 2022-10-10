import React from 'react';
import Lottie from "lottie-react";
import reading from '../utlity/Anemation/reading.json'

const Topic = () => {
    return (
        <div>
            <Lottie style={{width:'250px' ,marginLeft:'50px'}} animationData={reading}></Lottie>
        </div>
    );
};

export default Topic;