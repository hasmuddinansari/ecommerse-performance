import React, { useRef } from 'react';
import { Row } from 'react-bootstrap';
import { useQuery } from '@tanstack/react-query';
import { Loading } from '../loading/Loading';
import { getProducts } from '../../service/products';
import { Product } from '../Product';
import { useVisible } from '../hooks/useVisible';

export const Section = ({ name }) => {
    const targetRef = useRef(null)
    const isVisible = useVisible(targetRef)

    const { loading, data: products } = useQuery({
        queryKey: ['products', name],
        queryFn: () => getProducts(6),
        enabled: isVisible
    })
    return (
        <div className="my-4 w-100 h-100" ref={targetRef}>
            {loading || !products ? <Loading /> : <>
                <h1 className='text-center bg-dark text-white py-2 my-5'>{name}</h1>
                <Row>
                    {products.map((product) => (
                        <Product product={product} key={product.id} />
                    ))}
                </Row>
            </>}
        </div>
    );
};

export default Section;
