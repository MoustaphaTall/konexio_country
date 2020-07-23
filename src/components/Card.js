import React, { Component } from 'react';

class Card extends Component {
    renderCard() {
        if (this.props.name.length === 0) {
            return null;
        }

        return (
            <div className="card mt-2">
                <img src={this.props.flag} alt="flag" className="card-img-top" />

                <div className="card-body">
                    <ul style={{ listStyleType: "none" }}>
                        <li><h2 className="card-title">Country : {this.props.name}</h2></li>
                        <li><strong>Capital : {this.props.capital}</strong></li>
                        <li>Region : {this.props.region}</li>
                        <li>Population : {this.props.population.toLocaleString("en-US")}</li>
                    </ul>
                </div>
            </div>
        );
    }

    render() {
        return this.renderCard();
    }
}

export default Card;