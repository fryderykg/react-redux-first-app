import React, {Component} from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

import './Counter.css';

class Counter extends Component {

    render() {
        const resultsArr = this.props.results.map(result => {
            return (
                <li className="CounterResult"
                    onClick={() => this.props.onDeleteResult(result.id)}
                    key={result.id}>
                    {result.value}
                </li>
            )
        });

        return (
            <div>
                <CounterOutput value={this.props.ctr}/>
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter}/>
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}/>
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}/>
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}/>
                <hr/>
                <button className="CounterStoreBtn"
                        onClick={this.props.onStoreResult}>
                    Store Result
                </button>
                <ul className="CounterResultsList">
                    {resultsArr}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        results: state.results
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, value: 10}),
        onSubtractCounter: () => dispatch({type: actionTypes.SUBTRACT, value: 15}),
        onStoreResult: () => dispatch({type: actionTypes.STORE_RESULT}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, id: id})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);