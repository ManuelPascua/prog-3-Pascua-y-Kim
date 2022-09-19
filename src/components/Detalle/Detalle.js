import React from'react'
import './detalle.css'
import { Component } from 'react'

class Detalle extends Component{
    constructor(props){
        super(props)
        this.state={
            movie: {}
        }
    }
    
    componentDidMount(){
        const id = this.props.match.params.id;

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a21964bccbb974a7f0bb1668b14f27bd&language=en-US`)
        .then(res=>res.json())
        .then(data=>this.setState({
            movie: data
        }))
        .catch()
    }
    render() {
        return(
            <>
                <h2 className='name'>{this.state.movie.title}</h2> 
                <img className='movie' src={'https://image.tmdb.org/t/p/w342' + this.state.movie.poster_path} alt=""></img>
                <p className='resumen'>Resumen: {this.state.movie.overview}</p>
                <h2 className='rating'>Rating: {this.state.movie.vote_average}</h2>
                <h2 className='estreno'>Fecha de estreno: {this.state.movie.release_date}</h2>
            
            </>
        )
    }    
}
export default Detalle