import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';
import Select from 'react-select';

import { changeState } from '../actions';

import { dropdownStyles } from './dropdownStyles';

import { groupData } from '../groupData';

@connect(
    state => ({
        category: state.category,
        groups: state.groups,
    }),
    dispatch => ({
        ...bindActionCreators({ changeState }, dispatch),
    })
)
export default class CategoryMenu extends React.Component {

    constructor (props) {
        super(props);
    }

    getOptions (groups) {
        const options = [];

        groups.forEach((group) => {
            if (group.id in groupData) {
                options.push(...groupData[group.id].categories);
            }
        });

        return options;
    }

    render () {
        const {
            category,
            groups,
            changeState,
        } = this.props;

        return (
            <Select
                placeholder='Choose a category'
                value={category ? category.value : ''}
                options={this.getOptions(groups)}
                onChange={(category) => changeState({ category: category.value, subcategory: null })}
                styles={dropdownStyles}
                className="react-select"
                classNamePrefix="react-select"
            />
        );
    }
}
