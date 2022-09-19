import React, { Component } from 'react'
import PopularMovies from "../../components/PopularMovies/PopularMovies"
import TheaterMovies from '../../components/TheaterMovies/TheaterMovies'
import './home.css'
import Card from '../../components/Card/Card'
import {Link}from 'react-router-dom'


class Home extends Component{ 
    
    constructor(props){
        super(props)
        this.state={
            input:'',
            data:[],
        }
    }
    evitarSubmit(event){ 
        event.preventDefault()
    }
    guardarCambios(event){ 
        this.setState({input: event.target.value}, () => { 
            console.log(this.state.input); 
            this.buscar() 
        });
    
    }
    
        buscar () {
        if(this.state.input !== ''){ 
                fetch(`https://api.themoviedb.org/3/search/movie?api_key=a21964bccbb974a7f0bb1668b14f27bd&language=en-US&page=1&query=${this.state.input}`)
                .then(res => res.json())
                .then(data => {
                this.setState({data: data.results}, () => console.log(data.results))
                })
            .catch(error => console.log(error))
            }
        }
    
        render(){
            return(
                this.state.input.length === 0 ?
                
                    <React.Fragment> 
                        <h2 className='home'>Home</h2> 
                        <form onSubmit={(event)=>this.evitarSubmit(event)}>
                            <div className="group">
                                <input onChange={(event)=> this.guardarCambios(event)} value={this.state.input} placeholder="Busca una pelicula" type="search" className="input"/>
                            </div> 
                        </form>
                        
                        <li className='popular'>
                            <Link to='/popular'>Peliculas populares</Link>
                        </li>
                        <PopularMovies/>
                        <li className='cartelera' >
                            <Link to='/theater'>Cartelera</Link>
                        </li>
                        <TheaterMovies/>
                    
                     </React.Fragment>
    
                :
                    <React.Fragment> 
                        <h2 className='search'>Resultados de Búsqueda</h2>
                        <div className="group">
                        <form onSubmit={(event)=>this.evitarSubmit(event)}>
                            <input onChange={(event)=> this.guardarCambios(event)} value={this.state.input} placeholder="Search" type="search" className="input"/>
                        </form>
                        </div> 
                        
                        <section>
                        {this.state.data.length=== 0 ? <p>Cargando...</p>:
                        this.state.data.map((unaPelicula,idx) => <Card key={unaPelicula.name + idx} datosPelicula = {unaPelicula}/>)
                        }
                        </section>
                    
                     </React.Fragment>                       
            )
        }
    }
    
export default Home;
   
    
