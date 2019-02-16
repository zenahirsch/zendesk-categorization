import React from 'react';

import {
  arrayOf,
  shape,
  string,
  bool,
  func,
} from 'prop-types';

import Menu from './Menu';

const SubcategoryMenu = ({
  subcategory,
  options,
  defaultOption,
  loading,
  onChange,
}) => (
  <Menu
    value={subcategory}
    options={options}
    defaultOption={defaultOption}
    loading={loading}
    onChange={onChange}
    type="menu"
  />
);

SubcategoryMenu.propTypes = {
  subcategory: string.isRequired,
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

export default SubcategoryMenu;
