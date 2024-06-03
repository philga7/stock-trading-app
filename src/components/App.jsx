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
  const [sortBy, setSortBy] = useState('Alphabetically');
  const [filterBy, setFilterBy] = useState('Tech');

  // Fetch the list of stocks from the API using the useEffect hook
  /*
  useEffect(() => {
    fetch('http://localhost:3001/stocks')
      .then((response) => response.json())
      .then(setStocks);
  }, []);
  */

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

  // Sort the list of stocks based on the current sort option
  const sortedStocks = [...stocks].sort((stock1, stock2) => {
    if (sortBy === 'Alphabetically') {
      return stock1.name.localeCompare(stock2.name);
    } else {
      return stock2.price - stock1.price;
    }
  });

  // Filter the list of stocks based on the current filter option
  const filteredStocks = sortedStocks.filter(
    (stock) => stock.type === filterBy
  );

  return (
    <div>
      {/* Render the SearchBar component */}
      <SearchBar 
        sortBy={sortBy}
        onChangeSort={setSortBy}
        filterBy={filterBy}
        onChangeFilter={setFilterBy}
      />
      {/* Render the Header component */}
      <header>
        <Header />
      </header>
      {/* Render the StockContainer and PortfolioContainer */}
      <div className='row'>
        <div className='col-8'>
          <StockContainer
            stocks={filteredStocks}
            onAddStock={handleAddStock}
            onRemoveStock={handleRemoveStock}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
