import React from 'react';
import { connect } from 'react-redux';

import {
  arrayOf,
  string,
  object,
} from 'prop-types';

import SubcategoryMenu from '../components/SubcategoryMenu';

import {
  setSubcategoryTicketField,
} from '../actions';

const mapStateToProps = state => ({
  subcategory: state.subcategory,
  allSubcategories: state.allSubcategories,
  subcategories: state.subcategories,
});

class SubcategoryMenuContainer extends React.Component {
  static formatOptions(subcategories) {
    let options = [];

    if (subcategories && subcategories.length) {
      options = subcategories.map(s => ({
        label: s.attributes.label,
        value: s.attributes.value,
      }));
    }

    return options;
  }

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subcategory: '',
      loading: false,
      defaultOption: {
        value: '',
        label: 'Choose a subcategory',
      },
      options: SubcategoryMenuContainer.formatOptions(props.allSubcategories),
      onChange: this.handleChange,
    };
  }

  componentWillReceiveProps(nextProps) {
    const {
      subcategory,
      subcategories,
    } = this.props;

    if (nextProps.subcategory !== subcategory) {
      this.setState({
        subcategory: nextProps.subcategory,
      });
    }

    if (nextProps.subcategories !== subcategories) {
      this.setState({
        options: SubcategoryMenuContainer.formatOptions(nextProps.subcategories),
      });
    }
  }

  handleChange(e) {
    setSubcategoryTicketField(e.target.value);
  }

  render() {
    return (
      <SubcategoryMenu {...this.state} />
    );
  }
}

SubcategoryMenuContainer.propTypes = {
  subcategories: arrayOf(object),
  allSubcategories: arrayOf(object),
  subcategory: string.isRequired,
};

export default connect(mapStateToProps)(SubcategoryMenuContainer);
