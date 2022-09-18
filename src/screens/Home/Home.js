import React from "react"
import PopularMovies from "../../components/PopularMovies/PopularMovies"
import TheaterMovies from '../../components/TheaterMovies/TheaterMovies'
import './home.css'


function Home(){
    return(
        <React.Fragment>
            <h2 className='home'>Inicio</h2>
            <PopularMovies/>
            <TheaterMovies/>
        </React.Fragment>
    )

}
export default Home;