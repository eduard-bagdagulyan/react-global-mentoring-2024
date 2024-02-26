import React, {createElement} from 'react';

export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {initialValue: this.props.initialValue};
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    increase() {
        this.setState((state) => ({initialValue: state.initialValue + 1}))
    }

    decrease() {
        this.setState((state) => ({initialValue: state.initialValue - 1}))
    }

    render() {
        return createElement(
            'div',
            null,
            createElement('h1', null, 'Counter'),
            createElement('p', null, this.state.initialValue),
            createElement('button', {onClick: this.increase}, '+'),
            createElement('button', {onClick: this.decrease}, '-')
        );
    }
}