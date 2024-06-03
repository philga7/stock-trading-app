import React, { useEffect, useState } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import StockContainer from './StockContainer';
// import PortfolioContainer from './PortfolioContainer';
import './../App.css';

function App() {
  // Define state variables using the useState hook
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);

  // Fetch the list of stocks from the API using the useEffect hook

  // Handler function for when the user adds a stock to their portfolio
  function handleAddStock(stockToAdd) {
    const stockInPortfolio = portfolio.find(
      (stock) => stock.id === stockToAdd.id
    );
    if (!stockInPortfolio) {
      setPortfolio([...portfolio, stockToAdd])
    }
  }

  // Handler function for when the user removes a stock from their portfolio
  function handleRemoveStock(stockToRemove) {
    setPortfolio((portfolio) => {
      portfolio.filter((stock) => stock.id !== stockToRemove.id)
    })
  }

  return (
    <div>
      {/* Render the SearchBar component */}
      <SearchBar />
      {/* Render the Header component */}
      <header className="App-header">
        <Header />
      </header>
      {/* Render the StockContainer and PortfolioContainer */}
      <div className='row'>
        <div className='col-8'>
          <StockContainer
            stocks={stocks}
            onStockClick={handleAddStock}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
