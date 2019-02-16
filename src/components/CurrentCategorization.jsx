import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';

import {
  changeState,
} from '../actions';

const mapStateToProps = state => ({
  subcategories: state.subcategories,
  savedSubcategory: state.savedSubcategory,
  ticketStatus: state.ticketStatus,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    changeState,
  }, dispatch),
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
      changeState,
      ticketStatus,
    } = this.props;

    return (
      <div>
        {savedSubcategory
          ? <p className="small">This ticket is categorized as <strong>{this.getSubcategoryName()}</strong>.</p>
          : <p className="small">This ticket is uncategorized.</p>
        }

        {(ticketStatus !== 'closed') && (
          <Button
            variant="outline-secondary"
            size="sm"
            block
            onClick={() => changeState({
              savedSubcategory: '',
              subcategory: '',
            })}
          >
            Change
          </Button>
        )}
      </div>
    );
  }
}

CurrentCategorization.propTypes = {
  subcategories: PropTypes.arrayOf(PropTypes.object).isRequired,
  savedSubcategory: PropTypes.string.isRequired,
  changeState: PropTypes.func.isRequired,
  ticketStatus: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentCategorization);
