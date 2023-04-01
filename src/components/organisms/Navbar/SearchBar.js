import React from 'react';

import {ICSearch, SmallLogo} from '../../../assets/icon';
import {IconView, SearchBarCard} from './NavbarStyles';

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
