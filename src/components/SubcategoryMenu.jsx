import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import uuidv1 from 'uuid/v1';

import {
  getAllSubcategories,
  setSubcategoryTicketField,
} from '../actions';

const styles = {
  width: '100%',
  marginBottom: '10px',
  height: '30px',
};

const mapStateToProps = state => ({
  subcategory: state.subcategory,
  subcategories: state.subcategories,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    getAllSubcategories,
  }, dispatch),
});

class SubcategoryMenu extends React.Component {
  constructor(props) {
    super(props);

    this.getOptions = this.getOptions.bind(this);
  }

  getOptions() {
    const {
      subcategories,
    } = this.props;

    let options = [];

    if (subcategories && subcategories.length) {
      options = subcategories.map(s => ({
        label: s.attributes.label,
        value: s.attributes.value,
      }));
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

    options = options.map(option => (
      <option value={option.value} key={uuidv1()}>{option.label}</option>
    ));

    return options;
  }

  handleChange(e) {
    setSubcategoryTicketField(e.target.value);
  }

  render() {
    const {
      subcategory,
    } = this.props;

    return (
      <select
        placeholder="Choose a subcategory"
        onChange={this.handleChange}
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
  subcategories: PropTypes.arrayOf(PropTypes.object),
  subcategory: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SubcategoryMenu);
