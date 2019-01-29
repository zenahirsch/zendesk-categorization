import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetStore } from '../actions';
import { SelectField, Label, Hint, Select, Item } from '@zendeskgarden/react-select';

@connect(
    state => ({
        category: state.category
    }),
    dispatch => ({
        ...bindActionCreators({ resetStore }, dispatch),
    })
)
export default class CategorySelect extends React.Component {

    constructor (props) {
        super(props);

        props.resetStore();

        this.ref = React.createRef();
    }

    render () {
        const { category } = this.props;

        return (
            <SelectField>
                <Label>Example Select</Label>
                <Select
                    selectedKey={category}
                    onChange={selectedKey => setState({ category })}
                    options={[<Item key="item-1">Item 1</Item>, <Item key="item-2">Item 2</Item>]}
                >
                    {category}
                </Select>
            </SelectField>
        );
    }
}
