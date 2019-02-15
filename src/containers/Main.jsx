/* eslint-env browser */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';

import {
  applyListeners,
  changeState,
  setAppHeight,
  getSavedSubcategoryFromTicket,
  getTicketData,
  getAllSubcategories,
} from '../actions';

import CurrentCategorization from '../components/CurrentCategorization';
import CategoryMenu from '../components/CategoryMenu';
import SubcategoryMenu from '../components/SubcategoryMenu';

const mapStateToProps = state => ({
  ticketStatus: state.ticketStatus,
  savedSubcategory: state.savedSubcategory,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    getTicketData,
    getAllSubcategories,
    applyListeners,
    getSavedSubcategoryFromTicket,
    changeState,
  }, dispatch),
});

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    const {
      getTicketData,
      getAllSubcategories,
      getSavedSubcategoryFromTicket,
      applyListeners,
    } = this.props;

    getTicketData()
      .then(getAllSubcategories)
      .then(getSavedSubcategoryFromTicket)
      .then(applyListeners)
      .then(() => this.setState({ loading: false }));
  }

  componentDidUpdate() {
    const height = document.getElementById('app').clientHeight;

    setAppHeight(height);
  }

  render() {
    const {
      ticketStatus,
      savedSubcategory,
      changeState,
    } = this.props;

    const { loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (ticketStatus === 'closed') {
      return (
        <div>
          <CurrentCategorization />
          <small>This ticket is closed. Categorization cannot be changed.</small>
        </div>
      );
    }

    if (savedSubcategory) {
      return (
        <div style={{ height: '100px' }}>
          <CurrentCategorization />
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
        </div>
      );
    }

    return (
      <div>
        <CategoryMenu />
        <SubcategoryMenu />
      </div>
    );
  }
}

Main.propTypes = {
  getTicketData: PropTypes.func.isRequired,
  changeState: PropTypes.func.isRequired,
  getSavedSubcategoryFromTicket: PropTypes.func.isRequired,
  applyListeners: PropTypes.func.isRequired,
  ticketStatus: PropTypes.string,
  savedSubcategory: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
