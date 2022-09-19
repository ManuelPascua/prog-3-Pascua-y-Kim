import React, { Component } from 'react'
import Card from'../../components/Card/Card'
import './popular.css'


class Popular extends Component{
    constructor(props){
        super(props)
        this.state={
            movies:[],
            value:'',
            masUno: 1
            
        }
    }
    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=a21964bccbb974a7f0bb1668b14f27bd&language=en-US&page=1')
            .then( res => res.json())
            .then( data => this.setState({
                movies: data.results.concat(this.state.movies),
                
            }))
            .catch()
    }
   
    traerMas(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=a21964bccbb974a7f0bb1668b14f27bd&language=en-US&page=${this.state.masUno}`)
            .then( res => res.json())
            .then( data => this.setState({
                movies: data.results.concat(this.state.movies),
                masUno:this.state.masUno+1 ,
                
            }))
            .catch()
    }
    render(){
        console.log(this.state.movies);
        return(
            

            <React.Fragment>
                <h2 className='peliculasPop'>Peliculas Populares</h2>
                <button className='botonTraer' onClick={()=>this.traerMas()}> Traer más </button>
                <section className='cardContainer'>
                 { 
                    this.state.movies.map( (unPelicula, idx) => <Card key={unPelicula.title + idx} datosPelicula={unPelicula}/>)
                 }
                </section>
                
                
                
            </React.Fragment>        
            
        )
    }

}
export default Popular;