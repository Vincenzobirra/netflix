import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MoviesContainer from './compoonents/MoviesContainer';
import NavBar from './compoonents/NavBar';
import { Routes, Route, Outlet } from 'react-router-dom';
import MovieInfo from './compoonents/MovieInfo';

function App() {
  return (
    <div className="App">
     

      <Routes>
        <Route path="/" element={<MoviesContainer/>} />
        <Route path="/movies/:movieId" element={<MovieInfo/>} />
        <Route path="/movies/genre/:genre" element={<MoviesContainer/>} />
      </Routes>
      
    </div>
  );
}

export default App;
