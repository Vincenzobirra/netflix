import React from "react";
import { getMovies } from "../function/movies";
import CardMovie from  "./CardMovie";
import NavBar from "./NavBar";



export default class MoviesContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies : [],
            genre : ""
        };
    };
    
    
    goGenre = (genre) => {
        getMovies(genre).then(movies => this.setState({movies, genre}));
    };

    render() {
        const cards = this.state.movies.map(movie => <CardMovie movie={movie} key={movie.id}/>);

        return(
            <div className="bg-dark">
                <NavBar goGenre={this.goGenre}/>
                <div className="container">
                    <div className="row">
                        {cards}
                    </div>
                </div>
            </div>         
        )       
    }
}