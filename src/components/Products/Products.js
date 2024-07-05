import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Product } from './Product';
// import Time from '../Time';
import { getProducts } from '../../service/products';
import { Loading } from '../loading/Loading';
import { useQuery } from '@tanstack/react-query';
// import SearchProduct from './SearchProduct';
// import CartSize from './CartSize';
import useWindowSize from '../hooks/useWindowSize';

const Products = () => {
    const { height, width } = useWindowSize()

    const { loading, data: products, error } = useQuery({
        queryKey: ['products', height, width],
        queryFn: ({ signal }) => getProducts(20, signal),
    })


    if (loading || !products) {
        return <Loading />
    }

    if (error) {
        return <div>Something went wrong!!!</div>
    }

    return (
        <Container className="my-4">
            {/* <SearchProduct /> */}
            {/* <CartSize /> */}
            {/* <Time /> */}
            <Container className="my-4">
                <h1>Products</h1>
                <Row>
                    {products.map((product) => (
                        <Product product={product} key={product.id} />
                    ))}
                </Row>
            </Container>
        </Container>
    );
};

export default Products;
