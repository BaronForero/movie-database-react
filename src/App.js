import './App.css';
import Section from './components/Section';
//import MovieItem from './components/MovieItem'
import movies from './components/MovieItem';

function App() {
  return (
    <div className="App">
      
      {movies.map((movie)=> 
        <Section 
        myTitle={movie.title}
        year={movie.year}
        director={movie.director}
        duration={movie.duration}
        genre={movie.genre}
        rate={movie.rate}
        />
      )}
    </div>
  );
}

export default App;
