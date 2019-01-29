import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetStore } from '../actions';

import CategorySelect from '../components/CategorySelect';

@connect(
    state => ({
        category: state.category
    }),
    dispatch => ({
        ...bindActionCreators({ resetStore }, dispatch),
    })
)
export default class Main extends React.Component {

    constructor (props) {
        super(props);

        props.resetStore();

        this.ref = React.createRef();
    }

    render () {
        const { category } = this.props;

        return (
            <div ref={this.ref}>
                <CategorySelect />
                <CategorySelect />
                <CategorySelect />
            </div>
        );
    }
}
