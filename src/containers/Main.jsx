/* eslint-env browser */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { BarLoader } from 'react-spinners';

import CurrentCategorization from '../components/CurrentCategorization';
import CategoryMenuContainer from './CategoryMenuContainer';
import SubcategoryMenuContainer from './SubcategoryMenuContainer';

import {
  applyListeners,
  setAppHeight,
  getSavedSubcategoryFromTicket,
  getTicketData,
  getAllSubcategories,
} from '../actions';

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
    } = this.props;

    const { loading } = this.state;

    if (loading) {
      return (
        <BarLoader
          widthUnit="%"
          width={100}
          color="#36D7B7"
        />
      );
    }

    if (savedSubcategory || ticketStatus === 'closed') {
      return <CurrentCategorization />;
    }

    return (
      <div>
        <CategoryMenuContainer />
        <SubcategoryMenuContainer />
      </div>
    );
  }
}

Main.propTypes = {
  getTicketData: PropTypes.func.isRequired,
  getAllSubcategories: PropTypes.func.isRequired,
  getSavedSubcategoryFromTicket: PropTypes.func.isRequired,
  applyListeners: PropTypes.func.isRequired,
  ticketStatus: PropTypes.string,
  savedSubcategory: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
