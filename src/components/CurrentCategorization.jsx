import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({
  subcategories: state.subcategories,
  savedSubcategory: state.savedSubcategory,
});

class CurrentCategorization extends React.Component {
  constructor(props) {
    super(props);

    this.getSubcategoryName = this.getSubcategoryName.bind(this);
  }

  getSubcategoryName() {
    const {
      savedSubcategory,
      subcategories,
    } = this.props;

    const record = subcategories.find(s => s.attributes.value === savedSubcategory);
    return record ? record.attributes.label : '';
  }

  render() {
    const {
      savedSubcategory,
    } = this.props;

    if (!savedSubcategory) {
      return (
        <p className="small">
          This ticket is <strong>uncategorized</strong>.
        </p>
      );
    }

    return (
      <p className="small">
        This ticket is categorized as <strong>{this.getSubcategoryName()}</strong>.
      </p>
    );
  }
}

CurrentCategorization.propTypes = {
  subcategories: PropTypes.arrayOf(PropTypes.object).isRequired,
  savedSubcategory: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(CurrentCategorization);
