import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import uuidv1 from 'uuid/v1';

import {
  changeState,
  getSubcategoriesByCategory,
  getCategoriesForGroups,
} from '../actions';

const styles = {
  width: '50%',
  fontSize: '12px',
  marginBottom: '18px',
  opacity: 0.65,
};

const mapStateToProps = state => ({
  categories: state.categories,
  category: state.category,
  allSubcategories: state.allSubcategories,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    changeState,
    getCategoriesForGroups,
  }, dispatch),
});

class CategoryMenu extends React.Component {
  constructor(props) {
    super(props);

    this.getOptions = this.getOptions.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    const {
      getCategoriesForGroups,
    } = this.props;

    getCategoriesForGroups()
      .then(() => this.setState({ loading: false }));
  }

  getOptions() {
    const {
      categories,
    } = this.props;

    let options = [];

    if (categories && categories.length) {
      options = categories.map(c => ({
        value: c.id,
        label: c.attributes.label,
      }));
    }

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

    // turn into option elements
    options = options.map(option => (
      <option value={option.value} key={uuidv1()}>{option.label}</option>
    ));

    return options;
  }

  handleChange(e) {
    const {
      changeState,
      allSubcategories,
    } = this.props;

    const { value: categoryId } = e.target;

    // If 'None' is selected
    if (!categoryId) {
      return changeState({
        category: '',
        subcategory: '',
        subcategories: allSubcategories,
      });
    }

    return getSubcategoriesByCategory(categoryId)
      .then((res) => {
        changeState({
          category: categoryId,
          subcategory: '',
          subcategories: res.data,
        });
      });
  }

  render() {
    const {
      category,
    } = this.props;

    const { loading } = this.state;

    return (
      <div className="d-flex mb-3">
        <small className="font-weight-light text-muted mr-2">Filter by category:</small>
        <select
          className="flex-grow-1 mb-0"
          onChange={this.handleChange}
          style={styles}
          value={category}
        >
          <option value="">{loading ? 'Loading...' : 'None'}</option>
          {!loading && this.getOptions()}
        </select>
      </div>
    );
  }
}

CategoryMenu.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  allSubcategories: PropTypes.arrayOf(PropTypes.object).isRequired,
  category: PropTypes.string.isRequired,
  changeState: PropTypes.func.isRequired,
  getCategoriesForGroups: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryMenu);
