import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import useWebWorker from '../hooks/useWorker';


const CartSize = () => {
    const allProductsCount = 5000 * 100 * 10000
    const [response, setResponse] = useState('...')
    const { calculate, result } = useWebWorker()


    const handleCalculate = () => {
        setResponse('Calulating....')
        calculate(allProductsCount)
    };

    return (
        <div>
            <h2>All products: {allProductsCount}</h2>
            <Button onClick={handleCalculate}>Calculate</Button>
            <h3 className='mt-3'>Sum of Products: {result}</h3>
        </div>
    );
};

export default CartSize;
