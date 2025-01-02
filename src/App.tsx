import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SimpleCount from './Pages/SimpleCount';
import './style/styles.css'
import Movie from './Pages/Movie';
import MovieDetails from './Pages/MovieDetails';
import Contact from './Pages/Contact';
import NewRelease from './Pages/NewRelease';
import LogIn from './Pages/LogIn';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path='' element={<SimpleCount/>} /> */}
          <Route path='' element={<Movie/>} />
          <Route path="/movie_details/:id" element={<MovieDetails/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/newRelease" element={<NewRelease/>} />
          <Route path="/login" element={<LogIn/>} />



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
