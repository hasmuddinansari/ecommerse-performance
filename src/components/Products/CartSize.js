import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import useWebWorker from '../hooks/useWorker';

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function sumWithAsync(number) {
    let sum = 0;

    for (let current = 0; current < number; current++) {
        sum += current;

        if (current % 1000000 === 0) {
            await delay(0); // Yield to the event loop every 1,000,000 iterations
        }
    }

    return sum;
}


const CartSize = () => {
    const allProductsCount = 5000 * 100 * 10000;
    const [result, setResult] = useState()
    // const { calculate, result } = useWebWorker()
    function performComputation(iterations) {
        return new Promise(resolve => {
            setTimeout(() => {
                let result = 0;

                for (let i = 0; i < iterations; i++) {
                    result += i
                }
                resolve(result);
            }, 0);
        });
    }

    const handleCalculate = async () => {
        sumWithAsync(allProductsCount).then(setResult);
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
