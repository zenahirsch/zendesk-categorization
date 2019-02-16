import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  arrayOf,
  object,
  string,
  func,
} from 'prop-types';

import CategoryMenu from '../components/CategoryMenu';

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

class CategoryMenuContainer extends React.Component {
  static formatOptions(categories) {
    let options = [];

    if (categories && categories.length) {
      options = categories.map(c => ({
        value: c.id,
        label: c.attributes.label,
      }));
    }

    return options;
  }

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      category: '',
      loading: true,
      defaultOption: {
        value: '',
        label: 'None',
      },
      options: [],
      onChange: this.handleChange,
    };
  }

  componentDidMount() {
    const {
      getCategoriesForGroups,
    } = this.props;

    getCategoriesForGroups()
      .then(() => this.setState({ loading: false }));
  }

  componentWillReceiveProps(nextProps) {
    const {
      category,
      categories,
    } = this.props;

    if (nextProps.category !== category) {
      this.setState({
        category: nextProps.category,
      });
    }

    if (nextProps.categories !== categories) {
      this.setState({
        options: CategoryMenuContainer.formatOptions(nextProps.categories),
      });
    }
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
    return (
      <CategoryMenu {...this.state} />
    );
  }
}

CategoryMenuContainer.propTypes = {
  categories: arrayOf(object).isRequired,
  allSubcategories: arrayOf(object).isRequired,
  category: string.isRequired,
  changeState: func.isRequired,
  getCategoriesForGroups: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryMenuContainer);
