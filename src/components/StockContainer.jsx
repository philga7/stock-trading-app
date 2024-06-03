import React from 'react';
import Stock from './Stock';

function StockContainer({ stocks }) {
    // Map over the array of stocks and create a Stock component for each stock
    const stockList = stocks.map((stock) => <Stock key={stock.id} stock={stock} />);

    // Render the list of stocks and a heading
    return (
        <div>
            <h2>Stocks</h2>
            {stockList}
        </div>
    );
}

export default StockContainer;