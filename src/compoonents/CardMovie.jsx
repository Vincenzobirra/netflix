import React from "react";
import { Link } from "react-router-dom";

export default class CardMovie extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="card" style={{width : "18rem"}}>
            <img className="card-img-top" src={this.props.movie.image} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{this.props.movie.title}</h5>
                <p className="card-text tronca">{this.props.movie.description}</p>
                <Link className="btn btn-primary" to={`/movies/${this.props.movie.id}`} >Details</Link>
            </div>
            </div>
        )
    }
}