import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/containers/Field';

import './style.scss';

const Search = ({ changeField, searchForm }) => (
  <div className="search">
    <Field inputFor="searchForm" onChange={changeField} placeholder="Recherche ..." value={searchForm} />
  </div>
);

Search.propTypes = {
  changeField: PropTypes.func.isRequired,
  searchForm: PropTypes.string.isRequired,
};

export default Search;
