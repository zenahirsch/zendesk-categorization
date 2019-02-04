import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from 'react-bootstrap/Button';

import {
    applyListeners,
    resetStore,
    changeState,
    setAppHeight,
    getSubcategories,
    getSavedSubcategoryFromTicket,
    setSubcategoryOnTicket,
    getTicketData,
} from '../actions';

import CurrentCategorization from '../components/CurrentCategorization';
import CategoryMenu from '../components/CategoryMenu';
import CategoryFilter from '../components/CategoryFilter';
import SubcategoryMenu from '../components/SubcategoryMenu';

@connect(
    state => ({
        category: state.category,
        subcategory: state.subcategory,
        ticket_status: state.ticket_status,
        saved_subcategory: state.saved_subcategory,
        subcat_field_value: state.subcat_field_value,
        loading: state.loading,
    }),
    dispatch => ({
        ...bindActionCreators({
            resetStore,
            applyListeners,
            getSavedSubcategoryFromTicket,
            setSubcategoryOnTicket,
            changeState,
        }, dispatch),
        setAppHeight,
        getSubcategories,
        getTicketData,
    })
)
export default class Main extends React.Component {

    constructor (props) {
        super(props);
        props.resetStore();
    }

    componentDidMount () {
        const {
            getTicketData,
            getSavedSubcategoryFromTicket,
            getSubcategories,
            applyListeners,
            changeState,
        } = this.props;

        getTicketData()
            .then((data) => {
                changeState({
                    ticket_status: data['ticket.status'],
                    groups: data['currentUser.groups'],
                    subcat_field_value: data['ticket.customField:custom_field_360016232092'],
                    ticket_id: data['ticket.id'],
                }); 
            })
            .then(getSavedSubcategoryFromTicket)
            .then((data) => {
                const { custom_fields } = data.ticket;
                const subcategory_field = custom_fields.filter((field) => field.id === 360016232092)[0];
                const saved_subcategory = subcategory_field.value;
                changeState({ saved_subcategory }); 
            })
            .then(getSubcategories)
            .then((data) => {
                const subcategories = data.ticket_field.custom_field_options;
                changeState({ subcategories });
            })
            .then(applyListeners)
            .then(() => changeState({ loading: false }));
    }

    componentDidUpdate () {
        const height = document.getElementById('app').clientHeight;

        this.props.setAppHeight(height);
    }

    render () {
        const {
            loading,
            ticket_status,
            category,
            subcategory,
            saved_subcategory,
            subcat_field_value,
            changeState,
            setSubcategoryOnTicket,
        } = this.props;

        if (loading) {
            return (
                <div>
                    <small>Loading...</small>
                </div>
            );
        }

        if (ticket_status === 'closed') {
            return (
                <div>
                    <CurrentCategorization />
                    <small>This ticket is closed. Categorization cannot be changed.</small>
                </div>
            );
        }

        if (saved_subcategory) {
            return (
                <div style={{ height: '100px' }}>
                    <CurrentCategorization />
                    <Button
                        variant="outline-secondary"
                        size="sm"
                        block
                        onClick={() => changeState({
                            saved_subcategory: '',
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
                <br />
                <Button
                    variant="primary"
                    size="sm"
                    block
                    onClick={() => {
                        setSubcategoryOnTicket(subcategory);
                        changeState({
                            saved_subcategory: subcategory,
                            category: '',
                            subcategory: '',
                        });
                    }}
                    disabled={!subcategory}
                >
                    Save
                </Button>
            </div>
        );
    }
}
