import React, { useContext } from 'react';
import { CreateRechat } from '../../Layout/Main';
import Graps from '../Graps/Graps';



const Statistics = () => {
    const statistic= useContext(CreateRechat);
    console.log(statistic);
    return (
        <div>
            {
               statistic.map(graps=><Graps graps={graps}></Graps>)
            }
        </div>
    );
};

export default Statistics;