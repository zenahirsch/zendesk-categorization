import React from 'react';

import {
  string,
  arrayOf,
  shape,
  bool,
  func,
  oneOf,
} from 'prop-types';

import uuidv1 from 'uuid/v1';

const styles = {
  filter: {
    fontSize: '12px',
    width: '100%',
    opacity: 0.65,
  },
  menu: {
    width: '100%',
    height: '30px',
  },
};

const sortOptions = options => (
  options.sort((a, b) => {
    if (a.label < b.label) {
      return -1;
    }

    if (a.label > b.label) {
      return 1;
    }

    return 0;
  })
);

const Menu = ({
  value,
  options,
  defaultOption,
  loading,
  onChange,
  type,
}) => (
  <div>
    <select
      onChange={onChange}
      style={styles[type]}
      value={value}
      disabled={loading}
    >
      <option value={defaultOption.value}>{loading ? 'Loading...' : defaultOption.label}</option>
      {sortOptions(options).map(o => <option value={o.value} key={uuidv1()}>{o.label}</option>)}
    </select>
  </div>
);

Menu.propTypes = {
  value: string.isRequired,
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
  type: oneOf(['filter', 'menu']).isRequired,
};

export default Menu;
