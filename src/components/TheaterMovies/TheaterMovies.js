import React, {Component} from "react";
import Card from '../Card/Card';


class TheaterMovies extends Component{
    constructor(){
        super()
        this.state={
            movies:[]
            
        }
    }
    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=a21964bccbb974a7f0bb1668b14f27bd&language=en-US&page=1')
        .then(res=>res.json())
        .then(data=>this.setState({
            movies:data.results
        
        }))
        .catch()
    }
    render(){
        return(
            <React.Fragment>
                <section className='cardContainer'>
                    { 
                        this.state.movies.map( (unPelicula, idx) => <Card key={unPelicula.title+idx} datosPelicula={unPelicula}/>)
                    }
                </section>
            </React.Fragment>
        )
    }
}
export default TheaterMovies