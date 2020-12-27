import React, {Component} from 'react';

class MovieDetail extends Component {

    render() {
        const movie = this.props.movies.find(m => m.id === parseInt(this.props.match.params.movieID));
        return (
            <div id = "movieDetail">
                <h1 id = "movie-title">{movie.title} ({movie.year}) </h1>
                <img id = "descImg" src = {movie.img}/>
                <p id = "movie-desc">{movie.descrShort}</p>
            </div>
        )
    }
}

export default MovieDetail;