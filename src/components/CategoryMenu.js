import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import uuidv1 from  'uuid/v1';

import { changeState } from '../actions';

import { groupData } from '../groupData';

import './menus.css';

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
        let options = [];

        // get the options for each group
        groups.forEach((group) => {
            if (group.id in groupData) {
                options.push(...groupData[group.id].categories);
            }
        });

        // alphabetize
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

        // turn into option elements
        options = options.map((option) => <option value={option.value} key={uuidv1()}>{option.label}</option>);

        return options;
    }

    render () {
        const {
            category,
            groups,
            changeState,
        } = this.props;

        return (
            <div>
                <small><strong>Filter by category: </strong></small>
                <select
                    placeholder='Choose a Category'
                    onChange={(e) => changeState({ category: e.target.value, subcategory: '' })}
                    className='filter'
                    value={category}
                >   
                    <option value=''>None</option>
                    {this.getOptions(groups)}
                </select>
            </div>
        );
    }
}
