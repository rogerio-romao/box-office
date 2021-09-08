import React, { useState } from 'react';

import { apiGet } from '../misc/config';
import { useLastQuery } from '../misc/custom-hooks';

import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import ActorGrid from '../components/actor/ActorGrid';
import CustomRadio from '../components/CustomRadio';

import {
  RadioInputsWrapper,
  SearchButtonWrapper,
  SearchInput,
} from './Home.styled';

const Home = () => {
  const [input, setInput] = useLastQuery();
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
      <SearchInput
        type="text"
        placeholder="Search for something"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <RadioInputsWrapper>
        <div>
          <CustomRadio
            label="Shows"
            value="shows"
            checked={isShowsSearch}
            id="shows-search"
            onChange={onRadioChange}
          />
        </div>
        <div>
          <CustomRadio
            label="People"
            value="people"
            checked={!isShowsSearch}
            id="actors-search"
            onChange={onRadioChange}
          />
        </div>
      </RadioInputsWrapper>
      <SearchButtonWrapper>
        <button type="button" onClick={onSearch}>
          Search
        </button>
      </SearchButtonWrapper>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
