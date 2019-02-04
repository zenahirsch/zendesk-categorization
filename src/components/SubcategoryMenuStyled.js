import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';
import Select from 'react-select';

import {
    changeState,
    setAppHeight,
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
        setAppHeight,
    })
)
export default class SubcategoryMenu extends React.Component {

    constructor (props) {
        super(props);
    }

    getOptions (category) {
        let options = [];

        if (categoryData[category]) {
            options = categoryData[category].subcategories;
        }

        options.sort((a, b) => {
            if (a.label < b.label) {
                return -1;
            }

            if (a.label > b.label) {
                return 1;
            }

            return 0;
        });

        return options;
    }

    render () {
        const {
            category,
            subcategory,
            changeState,
            setAppHeight,
        } = this.props;

        return (
            <Select
                placeholder='Choose a subcategory'
                value={subcategory ? subcategory.value : ''}
                options={this.getOptions(category)}
                onChange={(subcategory) => changeState({ subcategory: subcategory.value })}
                styles={dropdownStyles}
                onMenuOpen={() => {
                    const height = document.getElementById('app').clientHeight;
                    setAppHeight(height + 150);
                }}
                onMenuClose={() => {
                    const height = document.getElementById('app').clientHeight;
                    setAppHeight(height);
                }}
            />
        );
    }
}
