import React, { Component } from 'react'

export default class Pokemon extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            image: ''
        }
    }

    getPokemon = async (name) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const data = await response.json()
        console.log(data)
        

        this.setState({
            name: data.name,
            image: data.sprites.versions['generation-v']['black-white'].animated.front_default,
            type: data.types[0].type.name
        })
    }

    componentDidMount = () => {
        this.getPokemon()
    }

    searchPokemon = (event) => {
        event.preventDefault()
        const pokeName = event.target.poke.value
        this.getPokemon(pokeName)
    }

    render() {
    return (
        <>
            <div>
                <h1>Pokemon Page</h1>
                <form on submit={this.searchPokemon}>
                    <input name='poke' placeholder='Search a pokemon'/>
                    <button>Search</button>
                </form>
                <div>
                    <a className="card text-decoration-none text-dark" style={{width:"25rem"}} href="{{url_for('posts.view_single_post', post_id=post.id)}}">
                        <img className="card-img-top" src={this.state.image} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">{this.state.name}</h5>
                            <p className="card-text">{this.state.type}</p>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
    }
}
