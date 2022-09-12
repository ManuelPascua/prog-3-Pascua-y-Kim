import React, {Component} from 'react';
 import { Link} from 'react-router-dom'



class PopularCards extends Component{
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
                <Link to='/detalle'>Ver mas</Link>
                
            </article>

        )
    }

}
export default PopularCards