import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.onClick(this.props.children);
    }

    render() {
        return (
            <>
                <button className="btn btn-primary btn-lg" onClick={this.onClick}>
                    {this.props.children}
                </button>
            </>
        );
    }
}

export default Button;