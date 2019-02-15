import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import uuidv1 from 'uuid/v1';

import {
  setSubcategoryTicketField,
} from '../actions';

import groupData from '../groupData';
import categoryData from '../categoryData';

const styles = {
  width: '100%',
  marginBottom: '10px',
  height: '30px',
};

const mapStateToProps = state => ({
  groups: state.groups,
  category: state.category,
  subcategory: state.subcategory,
});

class SubcategoryMenu extends React.Component {
  constructor(props) {
    super(props);

    this.getOptions = this.getOptions.bind(this);
  }

  getOptions() {
    const { category, groups } = this.props;

    const categories = [];
    let options = [];

    if (categoryData[category]) {
      options = categoryData[category].subcategories;
    }

    // if not filtered
    if (category === '') {
      groups.forEach((group) => {
        if (group.id in groupData) {
          categories.push(...groupData[group.id].categories);
        }
      });

      categories.forEach((category) => {
        if (category.value in categoryData) {
          options.push(...categoryData[category.value].subcategories);
        }
      });
    }

    options.sort((a, b) => {
      if (a.label < b.label) {
        return -1;
      }

      if (a.label > b.label) {
        return 1;
      }

      return 0;
    });

    // remove duplicates
    options = options.filter((option, index, self) => (
      index === self.findIndex(o => o.value === option.value)
    ));

    options = options.map(option => (
      <option value={option.value} key={uuidv1()}>{option.label}</option>
    ));

    return options;
  }

  render() {
    const {
      subcategory,
    } = this.props;

    return (
      <select
        placeholder="Choose a subcategory"
        onChange={e => setSubcategoryTicketField(e.target.value)}
        style={styles}
        value={subcategory || ''}
      >
        <option value="" disabled>Select a subcategory</option>
        {this.getOptions()}
      </select>
    );
  }
}

SubcategoryMenu.propTypes = {
  category: PropTypes.string.isRequired,
  groups: PropTypes.arrayOf(PropTypes.object).isRequired,
  subcategory: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(SubcategoryMenu);
