import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Fuse from 'fuse.js';

import {
    changeState,
    setAppHeight,
    setSubcategoryOnTicket,
} from '../actions';

import Autosuggest from 'react-autosuggest';

import CategoryMenu from './CategoryMenu';
import SubcategoryMenu from './SubcategoryMenu';

import './theme.css';

@connect(
    state => ({
        subcategories: state.subcategories,
        value: state.value,
        suggestions: state.suggestions,
        subcategory: state.subcategory,
    }),
    dispatch => ({
        ...bindActionCreators({ changeState, setSubcategoryOnTicket }, dispatch),
        setAppHeight
    })
)
export default class CategorySelect extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>
                <CategoryMenu />
                <br />
                <SubcategoryMenu />
            </div>
        );
    }
}
