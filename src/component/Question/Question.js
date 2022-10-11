import React from 'react';
import { toast } from 'react-toastify';
import Option from '../Option/Option';

const Question = ({ques}) => {
    const {question,correctAnswer,options}=ques;
    const handleClick=(option)=>{
        
        
        const findAns=options.find(ans=>ans===option);
        console.log(findAns)
        if(findAns ===correctAnswer){
            return toast.success('Right Answer',{autoClose:500})
        }
        return toast.error('Wrong Answer',{autoClose:500})
       
    //    
    // }
    // 
    }
    return (
        <div style={{border:'2px solid blue' ,padding:'20px'}}> <br /><br />
        

            <h1 style={{border:'2px solid black'}}>Ques: {question}</h1><br /><br />

            <div>
                
               <h2 style={{display:'grid',gridTemplateColumns:'repeat(2, 1fr)',border:'2px solid black'}}>



                {
                    options.map(option=><Option 
                        option={option}
                        handleClick={handleClick}
                        ></Option>)
                }
                </h2>
            </div>
        </div>
    );
};

export default Question;