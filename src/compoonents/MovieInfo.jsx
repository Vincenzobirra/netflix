
import { useParams } from "react-router-dom";
import { getMovieId } from "../function/movies";
import  {useState, React} from "react";

export default function MovieInfo (props) {
    const { movieId } = useParams();
    const [_movie , setMovie] = useState({});
    

    getMovieId(movieId)
    .then(movie => setMovie(movie))
    
        return(
            <div className="card" style={{width : "18rem"}}>
                <img className="card-img-top" src={_movie.image} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{_movie.title}</h5>
                    <p className="card-text">{_movie.description}</p>
                </div>
            </div>
        )
    
    
}