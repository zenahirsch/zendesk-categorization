import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import uuidv1 from  'uuid/v1';

import {
    changeState,
    setSubcategoryTicketField,
} from '../actions';

import { groupData } from '../groupData';
import { categoryData } from '../categoryData';

import './menus.css';

@connect(
    state => ({
        groups: state.groups,
        category: state.category,
        subcategory: state.subcategory,
    }),
    dispatch => ({
        ...bindActionCreators({ changeState }, dispatch),
        setSubcategoryTicketField,
    })
)
export default class SubcategoryMenu extends React.Component {

    constructor (props) {
        super(props);
    }

    getOptions (category, groups) {
        let categories = [];
        let options = [];

        if (categoryData[category]) {
            options = categoryData[category].subcategories;
        }

        // if not filtered
        if (category === '') {
            groups.forEach((group) => {
                if (group.id in groupData) {
                    categories.push(...groupData[group.id].categories);
                }
            });

            categories.forEach((category) => {
                if (category.value in categoryData) {
                    options.push(...categoryData[category.value].subcategories);
                }
            });
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

        // remove duplicates
        options = options.filter((option, index, self) => {
            return index === self.findIndex((o) => o.value === option.value);
        });

        options = options.map((option) => <option value={option.value} key={uuidv1()}>{option.label}</option>);

        return options;
    }

    render () {
        const {
            groups,
            category,
            subcategory,
            changeState,
            setSubcategoryTicketField,
        } = this.props;

        return (
            <select
                placeholder='Choose a subcategory'
                onChange={(e) => setSubcategoryTicketField(e.target.value)}
                className='menu'
                value={subcategory || ''}
            >
                <option value='' disabled>Select a subcategory</option>
                {this.getOptions(category, groups)}
            </select>
        );
    }
}
