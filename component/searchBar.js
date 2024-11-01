import React from 'react';

const SearchBar = ({ search, onSearchChange, onSearch, loading }) => {

    const styles = {
        container : {
            'display': 'flex',
            'alignItems': 'center',
            'justifyContent': 'center',
            'flexWrap': 'wrap',
          
            'maxWidth': '800px'
        }
    }
  return (
    <div style={styles.container}>
      <p>Buscar Titulo:</p>
      <input 
        type='text'
        value={search}
        onChange={onSearchChange}
      />
      <button disabled={loading} onClick={onSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar;