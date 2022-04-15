import React from "react";
import { Link } from "react-router-dom";

    export default class NavBarOptionGenre extends React.Component {
        constructor(props) {
            super(props);
        }

    render() {
        return(
            <Link  to={`/movies/genre/${this.props.genre.uuid}`} >
                <button className="btn btn-dark" onClick={() => {(this.props.oc(this.props.genre.uuid))} } value={this.props.genre.uuid}>{this.props.genre.name}</button> 
            </Link>
        )
    }
}