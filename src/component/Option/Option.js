import React from 'react';

const Option = ({option,handleClick}) => {

  
    
    return (
        <div  style={{display:'flex', justifyContent:'center', padding:'30px'}}>
            
            
 <h1 style={{display:'flex',border:'2px solid black',padding:'30px'}}><input onClick={()=>handleClick(option)} type="radio" name="radio-1" className="radio" checked />{option}</h1>
            
            <div>
   
            </div>
            
        </div>
    );
};

export default Option;