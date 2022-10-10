import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error =useRouteError();
    return (
        <div>
           
            <h1 className='text-5xl mt-14'>This is Error page Plz go back to home ..!!!</h1>
            {error && (<div> 
                <p className='text-3xl mt-10' >{error.statusText || error.message}</p>
                <p className='text-2xl mt-5 text-red-400' >{error.status}</p>
                </div>)}
        </div>
    );
};

export default ErrorPage;