import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Menu from './Menu';

import {
  changeState,
  getSubcategoriesByCategory,
  getCategoriesForGroups,
} from '../actions';

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
        <div className="small font-weight-light text-muted mr-2">
          Filter by:
        </div>
        <div className="flex-grow-1">
          <Menu
            value={category}
            options={this.getOptions()}
            defaultOption={{
              value: '',
              label: 'None',
            }}
            loading={loading}
            onChange={this.handleChange}
            type="filter"
          />
        </div>
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
