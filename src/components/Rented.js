import {Component} from 'react';
import Movie from './Movie'

class Rented extends Component {

    render() {
        return (
            <div>
                <h3 className = "section-title">Rented:</h3>
                <div id = "rented-section">
                    {this.props.movies.map(m => <Movie key = {m.id} movie = {m} removeMovie = {this.props.removeMovie}/>)}
                </div>
            </div>
        )
    }
}

export default Rented