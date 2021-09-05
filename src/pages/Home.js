import React, { useState } from 'react';

import { apiGet } from '../misc/config';

import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import ActorGrid from '../components/actor/ActorGrid';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  const isShowsSearch = searchOption === 'shows';

  const onInputChange = evt => {
    setInput(evt.target.value);
  };

  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then(data => setResults(data));
  };

  const onKeyDown = evt => {
    if (evt.key === 'Enter') onSearch();
  };

  const onRadioChange = evt => {
    setSearchOption(evt.target.value);
  };

  const renderResults = () => {
    if (results && !results.length) {
      return <div>No results.</div>;
    }
    if (results && results.length) {
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    }
    return null;
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        placeholder="Search for something"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <div>
        <label htmlFor="shows-search">
          Shows
          <input
            type="radio"
            value="shows"
            checked={isShowsSearch}
            id="shows-search"
            onChange={onRadioChange}
          />
        </label>
        <label htmlFor="actors-search">
          Actors
          <input
            type="radio"
            value="people"
            checked={!isShowsSearch}
            id="actors-search"
            onChange={onRadioChange}
          />
        </label>
      </div>
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
