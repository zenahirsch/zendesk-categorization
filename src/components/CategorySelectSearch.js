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
export default class CategorySelectSearch extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        const {
            subcategories,
            value,
            suggestions,
            subcategory,
            changeState,
            setSubcategoryOnTicket,
        } = this.props;

        const onChange = (event, { newValue }) => changeState({ value: newValue });

        const onSuggestionsFetchRequested = ({ value }) => changeState({ suggestions: getSuggestions(value) });

        const onSuggestionsClearRequested = () => changeState({ suggestions: [] });

        const onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
            setSubcategoryOnTicket(suggestion.value);

        };

        const getSuggestions = (value) => {
            const inputValue = value.trim().toLowerCase();
            const inputLength = inputValue.length;

            const options = {
                shouldSort: true,
                threshold: 0.6,
                location: 0,
                distance: 100,
                maxPatternLength: 32,
                minMatchCharLength: 1,
                keys: [
                    'name',
                    'categories'
                ]
            };

            const fuse = new Fuse(subcategories, options);

            const results = fuse.search(value);
        
            return inputLength === 0 ? subcategories : results;
        };

        const getSuggestionValue = (suggestion) => suggestion.name;

        const renderSuggestion = (suggestion) => {
            const cat_tags = suggestion.categories.map((cat) => `[${cat}]`);

            return (
                <div>
                    <strong>{suggestion.name}</strong>
                </div>
            );
        };

        const renderInputComponent = (inputProps) => {
            return (
                <div>
                    <CategoryMenu />
                    <input {...inputProps} />
                </div>
            );
        };

        const inputProps = {
            placeholder: 'Search for a category or subcategory',
            value,
            onChange,
        };

        return (
            <Autosuggest
                suggestions={suggestions}
                alwaysRenderSuggestions={true}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                onSuggestionSelected={onSuggestionSelected}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                renderInputComponent={renderInputComponent}
                inputProps={inputProps}
            />
        );
    }
}
