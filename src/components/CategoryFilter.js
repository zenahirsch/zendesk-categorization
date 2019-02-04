import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import uuidv1 from  'uuid/v1';
import { Dropdown } from 'semantic-ui-react';

import { changeState } from '../actions';

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
export default class CategoryFilter extends React.Component {

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

        options = options.map((option) => {
            return <Dropdown.Item key={uuidv1()} text={option.label} value={option.value} />
        })

        return options;
    }

    render () {
        const {
            category,
            groups,
            changeState,
        } = this.props;

        return (
            <Dropdown
                text={'Categories'}
                value={category}
                onChange={(e, { value }) => {
                    changeState({ category: data.value, subcategory: '' });
                }}
            >
                <Dropdown.Menu>
                    {this.getOptions(groups)}
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}
