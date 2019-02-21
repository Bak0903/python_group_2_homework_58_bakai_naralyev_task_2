import React, {PureComponent} from 'react';
import './Button.css';

class Button extends PureComponent {
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