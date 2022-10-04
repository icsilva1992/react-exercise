import axios from 'axios'
import React, { Component } from 'react'

export default class Dog extends Component {

    state = {
        listOfImages: []
    }

    getBreed(dogBreed) {
        axios.get(`https://dog.ceo/api/breed/${dogBreed}/images/random`).then(res => {
            this.setState((prevState) => ({
                listOfImages: [...prevState.listOfImages, res.data.message]
            }))
        })
    }
    

    render() {
        
        return (
        <div>
            <h1 onClick={() => this.getBreed(this.props.breed)}>{this.props.breed}</h1>

            {this.state.listOfImages.map((image, i) => 
                <img className='cenas' width="100" height="100" key={i} alt="dog" src={image} />
            )}
        </div>
        )
    }
}
