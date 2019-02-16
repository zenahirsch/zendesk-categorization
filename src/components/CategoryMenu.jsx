import React from 'react';

import {
  arrayOf,
  shape,
  string,
  bool,
  func,
} from 'prop-types';

import Menu from './Menu';

const CategoryMenu = ({
  category,
  options,
  defaultOption,
  loading,
  onChange,
}) => (
  <div className="d-flex mb-3">
    <div className="small font-weight-light text-muted mr-2">
      Filter by:
    </div>
    <div className="flex-grow-1">
      <Menu
        value={category}
        options={options}
        defaultOption={defaultOption}
        loading={loading}
        onChange={onChange}
        type="filter"
      />
    </div>
  </div>
);

CategoryMenu.propTypes = {
  category: string.isRequired,
  options: arrayOf(shape({
    value: string.isRequired,
    label: string.isRequired,
  })).isRequired,
  defaultOption: shape({
    value: string.isRequired,
    label: string.isRequired,
  }).isRequired,
  loading: bool.isRequired,
  onChange: func.isRequired,
};

export default CategoryMenu;
