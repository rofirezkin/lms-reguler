import React from 'react';
import {IconView, SearchBarCard} from './SearchBarStyles';
import {ICSearch, SmallLogo} from '../../../assets/icon';

const SearchBar = () => {
  return (
    <SearchBarCard>
      <IconView>
        <SmallLogo />
      </IconView>
      <IconView>
        <ICSearch />
      </IconView>
    </SearchBarCard>
  );
};

export default SearchBar;
