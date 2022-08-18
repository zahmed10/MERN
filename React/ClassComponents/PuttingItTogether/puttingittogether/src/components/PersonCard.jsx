import React, {Component} from 'react';

class PersonCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }

    birthdayButton = () => {
        this.setState({age: this.state.age + 1});

        // if( this.state.position === "On" ) {
        //     this.setState({ position: "Off" });
        // } else {
        //     this.setState({ position: "On" });
        // }
    }


    render() {

        return (
            <div>
            <h1>{this.props.last}, {this.props.first}</h1>
            <h3>Age: {this.state.age}</h3>
            <h3>Hair Color: {this.props.color}</h3>
            <button onClick={this.birthdayButton}>Birthday Button for {this.props.first} {this.props.last}</button>
            </div>
        );
    }
}

export default PersonCard;