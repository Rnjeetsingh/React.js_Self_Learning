import './App.css';
import Header from './Components/Header';
import Movie from './Components/Movie';
import Movies from './movie.json'

function App() {
  return (
    <div className="App">
    <Header/>
    <div className='main'>
    {
      Movies.map((ele,index) => {

        return(
          <Movie 
        key={index}
        title={ele.Title}
         year={ele.Year}
         img={ele.Poster}
         />
        )
        
      })
    }
      
    </div>
    </div>
  );
}

export default App;
