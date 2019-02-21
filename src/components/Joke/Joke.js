import React, {Component} from 'react';
import './Joke.css';

class Joke extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.text !== this.props.text
    }

    render() {
        return (
            <div className="joke">
                <h1>{this.props.text}</h1>
            </div>
        );
    }
}

export default Joke;