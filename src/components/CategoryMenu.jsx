import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import uuidv1 from 'uuid/v1';

import { changeState } from '../actions';

import groupData from '../groupData';

const styles = {
  width: '50%',
  fontSize: '12px',
  marginBottom: '18px',
  opacity: 0.65,
};

const mapStateToProps = state => ({
  category: state.category,
  groups: state.groups,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ changeState }, dispatch),
});

class CategoryMenu extends React.Component {
  constructor(props) {
    super(props);

    this.getOptions = this.getOptions.bind(this);
  }

  getOptions() {
    const { groups } = this.props;

    let options = [];

    // get the options for each group
    groups.forEach((group) => {
      if (group.id in groupData) {
        options.push(...groupData[group.id].categories);
      }
    });

    // alphabetize
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

    // turn into option elements
    options = options.map(option => (
      <option value={option.value} key={uuidv1()}>{option.label}</option>
    ));

    return options;
  }

  render() {
    const {
      category,
      changeState,
    } = this.props;

    return (
      <div>
        <small><strong>Filter by category: </strong></small>
        <select
          placeholder="Choose a Category"
          onChange={e => changeState({ category: e.target.value, subcategory: '' })}
          style={styles}
          value={category}
        >
          <option value="">None</option>
          {this.getOptions()}
        </select>
      </div>
    );
  }
}

CategoryMenu.propTypes = {
  category: PropTypes.string.isRequired,
  groups: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeState: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryMenu);
