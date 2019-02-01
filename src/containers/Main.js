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
    updateSubcategories,
    getSavedSubcategoryFromTicket,
    setSubcategoryOnTicket,
    getTicketStatus,
    getGroup,
    getTicketId,
} from '../actions';

import CurrentCategorization from '../components/CurrentCategorization';
import CategoryMenu from '../components/CategoryMenu';
import SubcategoryMenu from '../components/SubcategoryMenu';

@connect(
    state => ({
        category: state.category,
        subcategory: state.subcategory,
        ticket_status: state.ticket_status,
        saved_subcategory: state.saved_subcategory,
    }),
    dispatch => ({
        ...bindActionCreators({
            resetStore,
            applyListeners,
            updateSubcategories,
            getTicketStatus,
            getGroup,
            getTicketId,
            getSavedSubcategoryFromTicket,
            setSubcategoryOnTicket,
            changeState,
        }, dispatch),
        setAppHeight,
    })
)
export default class Main extends React.Component {

    constructor (props) {
        super(props);
        props.resetStore();
    }

    componentDidMount () {
        const height = document.getElementById('app').clientHeight;

        this.props.applyListeners();
        this.props.getTicketStatus();
        this.props.getGroup();
        this.props.getTicketId();
        this.props.updateSubcategories();
        this.props.getSavedSubcategoryFromTicket();
    }

    componentDidUpdate (prevProps) {
        const height = document.getElementById('app').clientHeight;
        
        if (this.props.saved_subcategory) {
            this.props.setAppHeight(height + 20);
        } else if (this.props.ticket_status === 'closed') {
            this.props.setAppHeight(height);
        } else {
            this.props.setAppHeight(height + 100);
        }
    }

    render () {
        const {
            ticket_status,
            category,
            subcategory,
            saved_subcategory,
            changeState,
            setSubcategoryOnTicket,
        } = this.props;

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
                <div>
                    <CurrentCategorization />
                    <Button
                        variant="outline-secondary"
                        size="sm"
                        block
                        onClick={() => changeState({
                            saved_subcategory: null,
                            subcategory: null
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
                <br />
                <SubcategoryMenu />
                <br />
                <Button
                    variant="outline-primary"
                    size="sm"
                    block
                    onClick={() => {
                        setSubcategoryOnTicket(subcategory);
                        changeState({
                            saved_subcategory: subcategory,
                            category: null,
                            subcategory: null,
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
