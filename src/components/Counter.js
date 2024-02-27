import React, {createElement} from 'react';

export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.initialValue};
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    increase() {
        this.setState((state) => ({value: state.value + 1}))
    }

    decrease() {
        this.setState((state) => ({value: state.value - 1}))
    }

    render() {
        return createElement(
            'div',
            null,
            createElement('h1', null, 'Counter'),
            createElement('p', null, this.state.value),
            createElement('button', {onClick: this.increase}, '+'),
            createElement('button', {onClick: this.decrease}, '-')
        );
    }
}