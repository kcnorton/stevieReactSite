import React, { Component } from 'react';
import DogList from './DogList.js';

class DogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
    };
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breed/retriever/golden/images/random/5').then((results) => results.json()).then((data) => {this.setState({ dogs: data.message })
    })
  }

  render() {
    return (
      <div className="container-fluid">
      	<div className="container dogs">
          
          <DogList dogs={this.state.dogs} />
        

      	</div>
      </div>
    )
  }
}

export default DogPage;