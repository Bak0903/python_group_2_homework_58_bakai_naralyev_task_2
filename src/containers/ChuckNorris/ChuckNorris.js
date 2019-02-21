import React, {Component} from 'react';
import './ChuckNorris.css';
import Joke from '../../components/Joke/Joke.js';
import Button from '../../components/Button/Button.js';


class ChuckNorris extends Component {
    state = {
        posts: []
    };

    getJoke = () => {
        const P_UR = 'https://api.chucknorris.io/jokes/random';
        fetch(P_UR).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something went wrong with network request');
        }).then(posts => {this.setState({posts: posts})}).catch(error => {console.log(error);});
    };

    componentDidMount() {
        this.getJoke();
    }

    render() {
        return (
            <div className="about_chuck">
                <Joke
                    key={this.state.posts.id}
                    text={this.state.posts.value}
                />
                <Button
                Click = {this.getJoke}
            />
            </div>
        )
    }
}


export default ChuckNorris;