
import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [text , setText] = useState("");
  const [moviesData , setMoviesData] = useState([]);

  const searchMovies = async () => {
     
    try{
      let apiPath = `http://www.omdbapi.com/?apikey=cb18cda1&s=${text}`;
    console.log(apiPath);
    let response= await axios.get(apiPath);
    console.log(response);
    setMoviesData([...response.data.Search]);
    }
    catch(ex){
      alert("not there");
    }
  }

  return (
    <div>
      <center>
           <h1 className='name'>Movies Search</h1>
           <div className='container'>
               <input type="text" onChange={e => setText(e.target.value)} className='form-control' placeholder='search'/>
               <button onClick={e => searchMovies()} className='btn btn-primary'>Search</button>
           </div>
      </center>
      {
        moviesData.map( movie =>(
          <div className='card mt-4 border-0 shadow-5m' key={movie.imdbID}>
             <div className='row gap-0'>
                 <div className='col-md-1'>
                     <img src={movie.Poster} className='img-fluid rounded-start'/>
                 </div>
                <div className='col-md-10'>
                  <div className='top'>
                  <a href={'view/' + movie.imbdID} target='_blank' className='link'> <h5>{movie.Title}</h5></a>
                   <div >Year : {movie.Year}</div>
                   <div >Type : {movie.Type}</div>
                </div>
                </div>   
             </div>
             
          </div>
        ))
      }
    </div>
  )
}

export default App
