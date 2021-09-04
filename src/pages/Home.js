import React, { useState } from 'react';

import { apiGet } from '../misc/config';

import MainPageLayout from '../components/MainPageLayout';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);

  const onInputChange = evt => {
    setInput(evt.target.value);
  };

  const onSearch = () => {
    apiGet(`/search/shows?q=${input}`).then(data => setResults(data));
  };

  const onKeyDown = evt => {
    if (evt.key === 'Enter') onSearch();
  };

  const renderResults = () => {
    if (results && !results.length) {
      return <div>No results.</div>;
    }
    if (results && results.length) {
      return (
        <div>
          {results.map(result => (
            <div key={result.show.id}>{result.show.name}</div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
