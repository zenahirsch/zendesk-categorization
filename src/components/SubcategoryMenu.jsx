import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Menu from './Menu';

import {
  getAllSubcategories,
  setSubcategoryTicketField,
} from '../actions';

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
      <Menu
        value={subcategory || ''}
        options={this.getOptions()}
        defaultOption={{
          value: '',
          label: 'Choose a subcategory',
        }}
        loading={false}
        onChange={this.handleChange}
        type="menu"
      />
    );
  }
}

SubcategoryMenu.propTypes = {
  subcategories: PropTypes.arrayOf(PropTypes.object),
  subcategory: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SubcategoryMenu);
