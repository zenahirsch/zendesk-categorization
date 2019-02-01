import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';
import Select from 'react-select';

import {
    changeState,
} from '../actions';

import { dropdownStyles } from './dropdownStyles';

import { categoryData } from '../categoryData';

@connect(
    state => ({
        category: state.category,
        subcategory: state.subcategory,
    }),
    dispatch => ({
        ...bindActionCreators({ changeState }, dispatch),
    })
)
export default class SubcategoryMenu extends React.Component {

    constructor (props) {
        super(props);
    }

    getOptions (category) {
        return categoryData[category] ? categoryData[category].subcategories : [];
    }

    render () {
        const {
            category,
            subcategory,
            changeState,
        } = this.props;

        console.log('category:', category);
        console.log('subcategory:', subcategory);

        return (
            <Select
                placeholder='Choose a subcategory'
                value={subcategory ? subcategory.value : ''}
                options={this.getOptions(category)}
                onChange={(subcategory) => changeState({ subcategory: subcategory.value })}
                styles={dropdownStyles}
            />
        );
    }
}