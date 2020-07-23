import React, { Component } from 'react';
import Button from './components/Button';
import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: 0,
      region: ""
    }

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(buttonTerm) {
    fetch(`https://restcountries.eu/rest/v2/name/${buttonTerm}`)
      .then(result => result.json())
      .then(result => {
        this.setState({
          name: result[0].name,
          capital: result[0].capital,
          flag: result[0].flag,
          population: result[0].population,
          region: result[0].region
        })
      });
  }

  renderTitle() {
    return (
      <div className="row">
        <div className="col-6 mb-3">
          <h1 style={{ fontSize: "3.5em", textAlign: "center" }}>Country selector</h1>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        {this.renderTitle()}
        <div className="row">
          <div className="col-6 d-flex justify-content-between text-align-center">
            <Button onClick={this.onButtonClick}>France</Button>
            <Button onClick={this.onButtonClick}>Brazil</Button>
            <Button onClick={this.onButtonClick}>Croatia</Button>
          </div>
        </div>
        <div className="row">
          <div className="col-4 offset-1">
            <Card
              name={this.state.name}
              capital={this.state.capital}
              flag={this.state.flag}
              population={this.state.population}
              region={this.state.region}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;