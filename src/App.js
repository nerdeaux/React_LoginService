import React from 'react';
import './App.css';
import Products from './Products';
import { Button } from 'react-bootstrap';
import Rating from './Rating';
import JumboTronComponent from './JumboTronComponent';

function App() {
    return (
        <div className="App">
        <Products />
        <JumboTronComponent body='...'/>
        </div>
    );
}

export default App;