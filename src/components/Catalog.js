import { Component } from "react";
import Movie from './Movie';
import Rented from './Rented'

class Catalog extends Component {

    constructor() {
        super();
        this.state = {
            search: '',
            budget: 10
        } 
    }

    updateSearch = (e) => {
        this.setState({search: e.target.value}) 
    }

    manngeAdding = (movieID) => {
        if (this.state.budget < 3){
            alert("You don't have enough money for renting another movie");
            return;
        }
        this.props.addMovie(movieID);
        this.setState({budget: this.state.budget - 3})
    }

    mannageRemoving = (movieID) =>{
        this.props.removeMovie(movieID);
        this.setState({budget: this.state.budget + 3})
    }

    render() {
        return (
            <div>
                <input type = "text" placeholder = "Search" value = {this.state.search} onChange = {this.updateSearch} id = "search"/>
                <h3 id = "budget">Budget: {this.state.budget}$</h3>
                {this.props.movies.some(m => m.isRented === true) ? <Rented movies = {this.props.movies.filter(m => m.isRented === true).filter(m => m.title.toLowerCase().includes(this.state.search.toLowerCase()))} removeMovie = {this.mannageRemoving}/> : <div></div>}
                <h3 className = "section-title">Catalog:</h3>
                <div id = "catalog-section">
                    {this.props.movies.filter(m => m.title.toLowerCase().includes(this.state.search.toLowerCase())).map(m => <Movie key = {m.id} movie = {m} addMovie = {this.manngeAdding} removeMovie = {this.mannageRemoving}/>)}
                </div>
            </div>
        )
    }
}

export default Catalog;