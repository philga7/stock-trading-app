import React, { useState } from 'react';
import Header from './components/Header';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './App.css';

function App() {
  // Define state variables using the useState hook
  const [closingPrice, setClosingPrice] = useState('');
  const [symbol, setSymbol] = useState('');

  // Fetch the list of stocks from the Polygon API
  const fetchData = async () => {
    try {
      const apiKey = 'BlndBe349qcQPi0Y4TGXRBzw9ijWLJKN';
      const response = await fetch (
        `https://api.polygon.io/v2/aggs/ticker/${symbol.toUpperCase()}/prev?adjusted=true&apiKey=${apiKey}`
      );
      const data = await response.json();

        if (data['results']) {
          setClosingPrice(parseFloat(data['results'][0]['c']));
        } else {
          console.log('Invalid response format in API call')
        } 
      
      } catch (error) {
        console.error('Error fetching data: ', error);   
      }
  }

  return (
    <div>
      {/* Render the Header component */}
      <header>
        <Header />
      </header>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Form>
              <Form.Group className='mb-3' controlId='symbol'>
                <Form.Label>Stock Symbol </Form.Label>
                <Form.Control 
                  type='text'
                  placeholder='Enter stock symbol'
                  value={symbol}
                  onChange={(event) => setSymbol(event.target.value)}
                />
              </Form.Group>
              <Button 
                variant='primary'
                onClick={fetchData}
              >
                Get Closing Price
              </Button>
              <Form.Group className='mb-3' controlId='closingPrice'>
                <Form.Label>Closing Price: {closingPrice}</Form.Label>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
