import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../component/Header/Header';
import { createContext } from 'react';

export const CreateRechat=createContext([]);

const Main = () => {
    const useloasd=useLoaderData();
    console.log(useloasd); 
    return (
        <div>
            <CreateRechat.Provider value={[useloasd]}>
            <Header></Header>
            <Outlet></Outlet>
            </CreateRechat.Provider>
        </div>
    );
};

export default Main;