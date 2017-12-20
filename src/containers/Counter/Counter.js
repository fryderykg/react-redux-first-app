import React, {Component} from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions/actions';

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
                        onClick={() => this.props.onStoreResult(this.props.ctr)}>
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
        ctr: state.ctr.counter,
        results: state.res.results
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: () => dispatch(actionCreators.add(10)),
        onSubtractCounter: () => dispatch(actionCreators.subtract(15)),
        onStoreResult: (value) => dispatch(actionCreators.storeResult(value)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);