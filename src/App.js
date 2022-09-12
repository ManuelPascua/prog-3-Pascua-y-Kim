import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Footer from './components/Footer/Footer.js'
import Navbar from './components/Navbar/Navbar.js'
import PopularMovies from './screens/PopularMoviesScreen/PopularMoviesScreen'
import Favoritos from './screens/Favoritos/FavoritosScreen'
import Home from './screens/Home/Home'
import TheaterMovies from './screens/TheaterMovies/TheaterMoviesScreen'



function App() {
  return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/favoritos' component={Favoritos}/>
          <Route path='/popular' component={PopularMovies}/>
          <Route path='/theater' component={TheaterMovies}/>
        </Switch>
        {/* <h2>Popular Movies</h2>
        <PopularMovies />
        <h2>Theater Movies</h2>
        <TheaterMovies />  */}
        <Footer />
      </React.Fragment>
    
  );
}

export default App;
