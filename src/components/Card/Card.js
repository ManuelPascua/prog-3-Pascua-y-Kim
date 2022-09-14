import React, {Component} from 'react';
import {Link}from 'react-router-dom'

class Card extends Component{
    constructor(props){
        super(props)
        this.state={ 

        }
    }
    render(){
        return(
            <article className='movies-card'>

                <img src={'https://image.tmdb.org/t/p/w342' + this.props.datosPelicula.poster_path} alt=""></img>
                <h2>{this.props.datosPelicula.title}</h2>   
                <p>{this.props.datosPelicula.overview}</p>
                <Link to={`/detalle/id/${this.props.datosPelicula.id}`}>Ver Mas</Link>
                        
                
            </article>

        )
    }

}
export default Card