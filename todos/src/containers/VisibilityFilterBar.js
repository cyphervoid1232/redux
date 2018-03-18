import React from 'react'
import { VisibilityFilters, setVisibilityFilter } from '../actions/index';
import { connect } from 'react-redux';

const VisibilityFilterBar = ({setFilter}) => (
    <div>
        <button onClick = {() => setFilter(VisibilityFilters.SHOW_ALL)}>All</button>
        <button onClick = {() => setFilter(VisibilityFilters.SHOW_COMPLETED)}>Completed</button>
        <button onClick = {() => setFilter(VisibilityFilters.SHOW_ACTIVE)}>Active</button>
    </div>
)


const mapDispatchToProps = (dispatch) => ({
    setFilter : (filter) => dispatch(setVisibilityFilter(filter))
})

export default connect(null, mapDispatchToProps) (VisibilityFilterBar)