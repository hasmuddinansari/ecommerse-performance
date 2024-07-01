import React, { useState, useCallback } from 'react'
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AddToCart } from '../AddToCart';

export const Product = ({ product }) => {
    const [name, setName] = useState(product.title)
    const [focus, setFocus] = useState(false)

    return (
        <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
            <Card className="mb-4">
                <Card.Img loading="lazy" height={'300px'} style={{ objectFit: 'cover', padding: '10px' }} variant="top" src={product.image} alt={product.name} />
                <Card.Body>
                    {focus ? <input className='mb-2' onChange={(e) => setName(e.target.value)} value={name} onBlur={() => setFocus(false)} /> : <Card.Title onClick={() => setFocus(true)}>{name.slice(0, 15)}...</Card.Title>}
                    <Link to={`/products/${product.id}`}>
                        <Button variant="primary">View Details</Button>
                    </Link>
                </Card.Body>
                <AddToCart data={{ product }} />
            </Card>
        </Col>
    )
}
