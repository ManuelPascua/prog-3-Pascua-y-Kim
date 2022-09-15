import React, {Component} from 'react';
import {Link}from 'react-router-dom'

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
        //Tiene que agegar un id dentro de un Array y guardarlo en localstorage.
        // Si el id ya existe ofrecer al usuario la posibilidad de quitar el id del array de favoritos.
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage !== null){
            let favoritosToArray = JSON.parse(recuperoStorage);
            favoritos = favoritosToArray
        }

        //Preguntemos si el id ya está en el array.
        if(favoritos.includes(id)){ //includes retorna un booleano.
            favoritos = favoritos.filter(unId => unId !== id);
            //mostar al usuario un nuevo texto: agregar a favoritos
            this.setState({
                favsMessage: 'Agregar a favoritos'
            })
        } else {
            favoritos.push(id);
            //mostar un texto diferente al usuario. Quitar de favs
            this.setState({
                favsMessage: 'Quitar de favoritos'
            })
        }


        let favoritosToString = JSON.stringify(favoritos);
        localStorage.setItem('favoritos', favoritosToString);

        console.log(localStorage);

    }
    render(){
        return(
            <article className='movies-card'>
                 <p onClick={()=>this.agregarYQuitarDeFavoritos(this.props.datosPelicula.id)}>{this.state.favsMessage}</p>
                <img src={'https://image.tmdb.org/t/p/w342' + this.props.datosPelicula.poster_path} alt=""></img>
                <h2>{this.props.datosPelicula.title}</h2>   
                <p>{this.props.datosPelicula.overview}</p>
                <Link to={`/detalle/id/${this.props.datosPelicula.id}`}>Ver Mas</Link>
                        
                
            </article>

        )
    }

}
export default Card