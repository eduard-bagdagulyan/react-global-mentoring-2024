import React, {createElement} from 'react';

export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 0};
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    componentDidMount() {
        this.setState({value: this.props.value})
    }

    increase() {
        this.setState({value: this.state.value + 1})
    }

    decrease() {
        this.setState({value: this.state.value - 1})
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