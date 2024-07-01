// https://dev-9dcl41z3d4jprkf.api.raw-labs.com/product/data?name=Muffin

import React, { useState, useEffect } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';

const SearchProduct = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className='py-3'>
            <Form>
                <Form.Group className='d-flex' controlId="search">
                    <Form.Control
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder="Search for a product"
                    />
                    <Button variant="primary" type="submit" className='ml-2'>
                        Search
                    </Button>
                </Form.Group>
            </Form>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ListGroup>
                    {searchResults.map((result, index) => (
                        <ListGroup.Item key={index}>{result.name}</ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </div>
    );
};

export default SearchProduct;