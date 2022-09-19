import React, { Component } from 'react'
import Card from '../../components/Card/Card'
import './favoritos.css'

class Favoritos extends Component{
    constructor(){
        super();
        this.state = {
            peliculasFavs:[] //Es array de objetos literales con cada personaje.
        }
    }

    componentDidMount(){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage !== null){
            favoritos = JSON.parse(recuperoStorage) //es un array de ids
            

            //recorrer el array y pedirla al endpoint por los datos de cada personaje.
            favoritos.forEach(unIdFavorito => {
                //pedir por cada id los datos del personaje
                let url = `https://api.themoviedb.org/3/movie/${unIdFavorito}?api_key=a21964bccbb974a7f0bb1668b14f27bd&language=en-US&page=1`
                fetch(url)
                    .then(res => res.json())
                    .then(data => this.setState({ peliculasFavs: this.state.peliculasFavs.concat(data) }))
                    .catch(e => console.log(e))
                    
            })

            
        }
        
        
    }
   
    
    render(){
        return(
            <React.Fragment>
                
                <h2 className='favoritos'>Tus favoritos</h2>
                 <section className='card-container'>
                    { 
                        this.state.peliculasFavs.map( (unPelicula, idx) => <Card key={unPelicula.titel+idx} datosPelicula={unPelicula}/>)
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default Favoritos;