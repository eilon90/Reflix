import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Movie extends Component {

    chooseMovie = () => {
        this.props.movie.isRented ? this.props.removeMovie(this.props.movie.id) : this.props.addMovie(this.props.movie.id);
    }
    
    render() {
        return (
            <div className = 'movie'>
                <Link to = {`/movies/${this.props.movie.id}`}>
                    <img src = {this.props.movie.img}/>
                </Link>
                    <i className={this.props.movie.isRented ? "fas fa-minus-circle" : "fas fa-plus-circle"} onClick = {this.chooseMovie}></i>
            </div>
        )
    }
}

export default Movie;