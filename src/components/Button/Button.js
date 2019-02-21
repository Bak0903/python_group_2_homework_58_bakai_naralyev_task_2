import React, {Component} from 'react';
import './Button.css';

class Button extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.Click !== this.props.Click;
    }

    render() {
        return (
            <button
                className="Button"
                onClick={this.props.Click}
            >
                <h1>Get new joke</h1>
            </button>
        );
    }
}

export default Button;