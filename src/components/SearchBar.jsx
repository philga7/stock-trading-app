import React from 'react';

function SearchBar() {
    return (
        <div>
            {/* Sort options */}
            <strong>Sort by:</strong>
            <label>
                <input type='radio' value='Alphabetically' name='sort' />
                Alphabetically
            </label>
            <label>
                <input type='radio' value='Price' name='sort' />
                Price
            </label>
            <br />

            {/* Filter options */}
            <label>
                <strong>Filter:</strong>
                <select>
                    <option value='Tech'>Tech</option>
                    <option value='Sportswear'>Sportswear</option>
                    <option value='Finance'>Finance</option>
                </select>
            </label>
        </div>
    );
}

export default SearchBar;