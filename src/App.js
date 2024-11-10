import React, { useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

import { Home } from './components/HomeScreen';

import { ScopusSearch } from './api/ScopusSearch';

const App = (props) => {
  let history = useHistory();
  //search term
  const [searchTerm, setSearchTerm] = useState('');
  // serach data
  const [searchData, setSearchData] = useState({});
  //set search term
  const setSearch = async (term) => {
    setSearchTerm(term);
    await setData(term);
    console.log(term);
  };
  //set search data
  const setData = async (term) => {
    const searches = await ScopusSearch(term);
    setSearchData(searches);
  };

  return (
    <Switch>
      <Route
        exact
        path={'/'}
        component={() => <Home setSearch={setSearch} />}
      />
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
