import { createElement, Component } from 'react'

type CounterProps = { initialValue: number };
type CounterState = { value: number };

export class Counter extends Component<CounterProps, CounterState> {
    constructor(props: { initialValue: number }) {
        super(props)
        this.state = { value: this.props.initialValue }
        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)
    }

    increase() {
        this.setState((state) => ({ value: state.value + 1 }))
    }

    decrease() {
        this.setState((state) => ({ value: state.value - 1 }))
    }

    render() {
        return createElement(
            'div',
            null,
            createElement('h1', null, 'Counter'),
            createElement('p', null, this.state.value),
            createElement('button', { onClick: this.increase }, '+'),
            createElement('button', { onClick: this.decrease }, '-')
        )
    }
}