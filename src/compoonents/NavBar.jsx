import React from "react";
import { getGenres } from "../function/genres";
import NavBarOptionGenre from "./NavBarOptionGenre";
import { Link } from "react-router-dom";


export default class NavBar extends React.Component {
        constructor(props){
            super(props);

            this.state = {
                genres : []
            };
        };
    componentDidMount() {
        getGenres().then(genres => this.setState({ genres }));
    };

    handleSubmit = e => {
        this.props.goGenre(e);        
    }

    render() {
        const genres = this.state.genres.map(genre => <NavBarOptionGenre key={genre.uuid} oc={this.handleSubmit} genre={genre}/>);
        return(
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">NETMERD</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="btn btn-dark">
                            <Link  to="/" >
                                <button className="btn btn-dark" onClick={() => {this.handleSubmit("")}} >HOME</button> 
                            </Link>
                            </li>                       
                        </ul>
                    </div>
                </nav>
                <div className="col-md-12">           
                    {genres}
                </div>
            </>
        )
    }
}