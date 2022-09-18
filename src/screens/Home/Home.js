import React, { Component } from 'react'
import PopularMovies from "../../components/PopularMovies/PopularMovies"
import TheaterMovies from '../../components/TheaterMovies/TheaterMovies'
import Card from '../../components/Card/Card'

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
            this.busqueda() 
        });
    
    }
    
        busqueda () {
        if(this.state.input !== ''){ 
                fetch(`https://api.themoviedb.org/3/search/movie?api_key=a21964bccbb974a7f0bb1668b14f27bd&language=en-US&page=1&query=${this.state.input}`)
                .then(res => res.json())
                .then(data => {
                this.setState({data: data.results}, () => console.log(data.results))
                })
            .catch(e => console.log(e))
            }
        }
    
        render(){
            return(
                this.state.input.length === 0 ?
                
                    <React.Fragment> 
                        <h2>Home</h2>
                        <form onSubmit={(event)=>this.evitarSubmit(event)}>
                        <div className="group">
                            
                            <input onChange={(event)=> this.guardarCambios(event)} value={this.state.input} placeholder="Search" type="search" className="input"/>
                        </div> 
                        </form>
                        
                        <PopularMovies/>
                        <TheaterMovies/>
                    
                     </React.Fragment>
    
                :
                    <React.Fragment> 
                        <h2>Resultados de Búsqueda</h2>
                        <form onSubmit={(event)=>this.evitarSubmit(event)}>
                        <div className="group">
                           
                            <input onChange={(event)=> this.guardarCambios(event)} value={this.state.input} placeholder="Search" type="search" className="input"/>
                        </div> 
                        </form>
                        
                        {this.state.data===[] ? <h3>Cargando</h3>:
                        this.state.data.map((unaPelicula,idx) => <Card key={idx} datosPelicula = {unaPelicula}/>)
                    
                    
                    
                    }
                    
                     </React.Fragment>                       
            )
        }
    }
    
export default Home;
   
    