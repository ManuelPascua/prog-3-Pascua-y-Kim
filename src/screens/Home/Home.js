import React from "react"
import PopularMovies from "../../components/PopularMovies/PopularMovies"
import TheaterMovies from '../../components/TheaterMovies/TheaterMovies'


function Home(){
    return(
        <React.Fragment>
            <h2>este es el home</h2>
            <PopularMovies/>
            <TheaterMovies/>
        </React.Fragment>
    )

}
export default Home;