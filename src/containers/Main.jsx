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
  getSubcategories,
  getSavedSubcategoryFromTicket,
  getTicketData,
} from '../actions';

import CurrentCategorization from '../components/CurrentCategorization';
import CategoryMenu from '../components/CategoryMenu';
import SubcategoryMenu from '../components/SubcategoryMenu';

const mapStateToProps = state => ({
  ticket_status: state.ticket_status,
  savedSubcategory: state.savedSubcategory,
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    applyListeners,
    getSavedSubcategoryFromTicket,
    changeState,
  }, dispatch),
});

class Main extends React.Component {
  componentDidMount() {
    const {
      getSavedSubcategoryFromTicket,
      applyListeners,
      changeState,
    } = this.props;

    getTicketData()
      .then((data) => {
        changeState({
          ticketStatus: data['ticket.status'],
          groups: data['currentUser.groups'],
          subcategory: data['ticket.customField:custom_field_360016232092'],
          ticketId: data['ticket.id'],
        });
      })
      .then(getSavedSubcategoryFromTicket)
      .then((data) => {
        const { custom_fields: customFields } = data.ticket;
        const subcategoryField = customFields.filter(field => field.id === 360016232092)[0];
        const savedSubcategory = subcategoryField.value;
        changeState({ savedSubcategory });
      })
      .then(getSubcategories)
      .then((data) => {
        const subcategories = data.ticket_field.custom_field_options;
        changeState({ subcategories });
      })
      .then(applyListeners)
      .then(() => changeState({ loading: false }));
  }

  componentDidUpdate() {
    const height = document.getElementById('app').clientHeight;

    setAppHeight(height);
  }

  render() {
    const {
      loading,
      ticketStatus,
      savedSubcategory,
      changeState,
    } = this.props;

    if (loading) {
      return (
        <div>
          <small>Loading...</small>
        </div>
      );
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
  changeState: PropTypes.func.isRequired,
  getSavedSubcategoryFromTicket: PropTypes.func.isRequired,
  applyListeners: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  ticketStatus: PropTypes.string,
  savedSubcategory: PropTypes.string,

};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
