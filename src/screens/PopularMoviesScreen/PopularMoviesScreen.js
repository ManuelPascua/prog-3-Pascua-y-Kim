import React, { Component } from 'react'

import Card from'../../components/Card/Card'


class Popular extends Component{
    constructor(props){
        super(props)
        this.state={
            movies:[]
           
            
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
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=a21964bccbb974a7f0bb1668b14f27bd&language=en-US&page=1')
            .then( res => res.json())
            .then( data => this.setState({
                movies: data.results.concat(this.state.movies),
                
            }))
            .catch()
    }
    render(){
        console.log(this.state.movies);
        return(
            

            <React.Fragment>
                <button onClick={()=>this.traerMas()}> Traer más </button>
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