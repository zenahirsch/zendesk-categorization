import React from 'react';
import { connect } from 'react-redux';

import Alert from 'react-bootstrap/Alert';

@connect(
    state => ({
        subcategory: state.subcategory,
        subcategories: state.subcategories,
        saved_subcategory: state.saved_subcategory,
    }),
    dispatch => ({})
)
export default class CurrentCategorization extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        const {
            saved_subcategory,
            subcategories,
        } = this.props;

        const getSubcategoryName = (subcategory) => {
            const record = subcategories.find((subcat) => subcat.value === subcategory);
            return record ? record.name : '';
        };

        if (!saved_subcategory) {
            return (
                <p><small>This ticket is <strong>uncategorized</strong>.</small></p>
            );
        }

        return (
            <p><small>This ticket is categorized as <strong>{getSubcategoryName(saved_subcategory)}</strong>.</small></p>
        );
    }
}
