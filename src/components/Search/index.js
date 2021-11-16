import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/containers/Field';

import './style.scss';

const Search = ({ changeField, searchForm }) => (
  <div className="search">
    <Field type="text" inputFor="searchForm" onChange={changeField} placeholder="Rechercher un circuit ..." value={searchForm} />
  </div>
);

Search.propTypes = {
  changeField: PropTypes.func.isRequired,
  searchForm: PropTypes.string.isRequired,
};

export default Search;
