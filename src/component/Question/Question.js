import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Option from '../Option/Option';
import {AiFillEye} from 'react-icons/ai';

const Question = ({ques}) => {
    
    const {question,correctAnswer,options}=ques;
    
    const [show,setShow]=useState(false);

  
   //console.log(ques);

   const [count,setCount]=useState(0)
  // console.log(count)
    const handleClick=(option)=>{
        const findAns=options.find(ans=>ans===option);
        
       
        if(findAns ===correctAnswer){
          
             toast.success('Right Answer',{autoClose:500})   
            
        }
        
        else{
             setCount(count+1)
             toast.error('Wrong Answer',{autoClose:500}) 
        }
       
        
    }
    return (
        <div className='mx-auto w-2/3 grid grid-cols-2 gap-4 mb-10 bg-orange-50' style={{boxShadow:'1px 4px 8px gray',borderRadius:'20px', marginTop:'40px'}}> <br /><br />
          <div style={{boxShadow:'3px 4px 5px gray',borderRadius:'20px', marginRight:'20px',marginTop:'20px',marginBottom:'20px'}}>
            <div className='bg-orange-300' style={{boxShadow:'3px 4px 5px gray',borderRadius:'20px',fontSize: '1.25rem',fontWeight: '900',marginBottom:'10px'}}>
            <h1>Please Cheack</h1>
            <h1>Currect Answer</h1>
            {
               show?  <h1 className='text-emerald-500'>{correctAnswer}</h1>:null
            }
                
            <button onClick={()=>setShow(!show)}><AiFillEye></AiFillEye></button>
            </div>
            
               <div style={{boxShadow:'3px 4px 5px gray',borderRadius:'20px', marginLeft:'20px'}}>
                <h1 className='text-red-700 font-extrabold bg-neutral-700' ><span className='bg-slate-50'>You have given :</span> <span className='text-amber-500'> {count}</span> <span className='bg-slate-50'>times wrong answers.</span> </h1>
               </div>
            </div>
            
            <div>
            <h1 style={{width:'180%',color:'blue',fontWeight:'700',fontSize:'1.1rem'}}>Quiz: {question}</h1><br /><br />
                

                <h2 className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[200%]'>
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