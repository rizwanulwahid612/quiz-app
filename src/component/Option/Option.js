import React from 'react';

const Option = ({option,handleClick}) => {

  
    
    return (
        <div  style={{display:'flex',padding:'10px',justifyContent:'center'}}>
            
           <h1 className=' hover:bg-sky-100' style={{width:'100%',display:'flex',border:'2px solid blue',padding:'50px',borderRadius:'20px',color:'blue'}}><input  type="" name="radio-1" className="radio" checked onClick={()=>handleClick(option)} />{option}</h1>
           
        </div>
    );
};

export default Option;