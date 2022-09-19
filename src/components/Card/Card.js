import React, {Component} from 'react';
import {Link}from 'react-router-dom'
import './card.css'

class Card extends Component{
    constructor(props){
        super(props)
        this.state={ 
            favsMessage: 'Agregar a favoritos'

        }
    }
    componentDidMount(){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage !== null){
            let favoritosToArray = JSON.parse(recuperoStorage);
            favoritos = favoritosToArray
        }

        if(favoritos.includes(this.props.datosPelicula.id)){
            this.setState({
                favsMessage: 'Quitar de favoritos'
            })
        }

    }

    agregarYQuitarDeFavoritos(id){
     
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage !== null){
            let favoritosToArray = JSON.parse(recuperoStorage);
            favoritos = favoritosToArray
        }

        
        if(favoritos.includes(id)){ 
            favoritos = favoritos.filter(unId => unId !== id);
            
            this.setState({
                favsMessage: 'Agregar a favoritos'
            })
        } else {
            favoritos.push(id);
            
            this.setState({
                favsMessage: 'Quitar de favoritos'
            })
        }


        let favoritosToString = JSON.stringify(favoritos);
        localStorage.setItem('favoritos', favoritosToString);

        

    }
    render(){
        return(
            <article className='movies-card'>
                <p onClick={()=>this.agregarYQuitarDeFavoritos(this.props.datosPelicula.id)}>{this.state.favsMessage}</p>
                <img src={`https://image.tmdb.org/t/p/w342${this.props.datosPelicula.poster_path}`} alt=""></img>
                <h2 className='titulo'>{this.props.datosPelicula.title}</h2>   
                <p className='resumen'>Resumen: {this.props.datosPelicula.overview}</p>
                <Link to={`/detalle/id/${this.props.datosPelicula.id}`}>Ver Mas</Link>
            </article>

            

        )
    }

}
export default Card