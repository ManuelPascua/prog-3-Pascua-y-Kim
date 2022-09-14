import React from'react'
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
             <img src={'https://image.tmdb.org/t/p/w342' + this.state.movie.poster_path} alt=""></img>
                <h2>{this.state.movie.title}</h2>   
                <p>{this.state.movie.overview}</p>
            </>
        )
    }     
}
export default Detalle