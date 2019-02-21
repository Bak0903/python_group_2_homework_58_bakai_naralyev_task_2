import React, {Component} from 'react';
import './ChuckNorris.css';
import Joke from '../../components/Joke/Joke.js';
import Button from '../../components/Button/Button.js';


class ChuckNorris extends Component {
    state = {
        posts: []
    };

    getJoke = () => {
        const P_URL = 'https://api.chucknorris.io/jokes/random';
        let Array = [];
        let count = 5;
        for (let i = 0; Array.length < count; i++) {
            let promise = fetch(P_URL).then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Something went wrong with network request');
            }).catch(error => {
                console.log(error);
            });
            Array.push(promise)
        }
        Promise.all(Array).then(posts => {
            this.setState({posts: posts});
        }).catch(error => {
            console.log(error);
        })
    };

    componentDidMount() {
        this.getJoke();
    }

    render() {
        return (
            <div className="about_chuck">
                {this.state.posts.map(joke => (
                        <Joke
                            key={joke.id}
                            text={joke.value}
                        />
                    ))}
                <Button
                Click = {this.getJoke}
            />
            </div>
        )
    }
}


export default ChuckNorris;