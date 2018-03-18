import React, {Component} from 'react'
import {withState, mapProps} from 'recompose'

const starWarsChars = [
    {name: 'Luke', side: 'light'},
    {name: 'Dummy', side: 'light'},
    {name: 'Vader', side: 'dark'},
    {name: 'Papaya', side: 'light'},
    {name: 'Gg', side: 'dark'}
]

const DisplayList = ({list, otherSide, stateHandler}) => (
    <div>
        <button onClick={() => {stateHandler(otherSide)}}>switch </button>
        {list.map(c => <div key={c.name}> {c.name} </div> )}
    </div>
)

// const withFilterProps = BaseComponent => ({list, side}) => {
//     const transformedProps = list.filter(c=> c.side == side) 
//         return <BaseComponent list={transformedProps}/>
// }

// const FiltertedList = withFilterProps(DisplayList)

// hoc

// const ToggleableFilteredList = compose(
//     withState('stateValue', 'stateHandler', 'dark'),
//     mapProps(({list, stateValue, stateHandler}) => ({
//         list : list.filter(c => c.side == stateValue),
//         otherSide : stateValue == 'dark' ? 'light' : 'dark',
//         stateHandler
//     }))
// )(DisplayList)

const withSimpleState = defaultState => BaseComponent => {
    return class withSimpleState extends Component {
        state = {value: defaultState}
        updateState = value => this.setState({value})
        render() {
            return <BaseComponent {...this.props} stateValue={this.state.value} stateHandler={this.updateState}/>
        }
    }
}

const compose = (...hocs) => BaseComponent => hocs.reduceRight((acc, hoc) => hoc(acc), BaseComponent)

const withTransformProps = tranformFunc => BaseComponent => (baseProps) => {
    const tranformProps = tranformFunc(baseProps)
    return <BaseComponent {...tranformProps}/>
}

const FiltertedList = withTransformProps(({list, stateValue, stateHandler}) => ({
    list : list.filter(c => c.side == stateValue),
    otherSide : stateValue == 'dark' ? 'light' : 'dark',
    stateHandler
}))(DisplayList)

const ToggleableFilteredList = compose(
    withSimpleState('dark'),
    withTransformProps(({list, stateValue, stateHandler}) => ({
        list : list.filter(c => c.side == stateValue),
        otherSide : stateValue == 'dark' ? 'light' : 'dark',
        stateHandler
    }))
)(DisplayList)


const StarwarApp = () => (
    <ToggleableFilteredList list={starWarsChars}/>
)

export default StarwarApp