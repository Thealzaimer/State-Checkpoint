import React, { Component } from "react";

export default class Profile extends Component {
    // state accept all dataTypes
    state = {
        fullName: "Mehdi",
        bio:"i love nature",
        imgSrc:"https://anas.digital/community/wp-content/themes/cera/assets/images/avatars/user-avatar.png",
        profession:"student",
        counter: 0,
        timer: null,
    };
    // access to value nameOfObject.key
    componentDidMount() {
        this.setState({
            timer: setInterval(() => {
                this.setState({
                    counter: this.state.counter + 1,
                });
            }, 1000),
        });
    }
    render() {
        return (
            <div>
                <h1>{this.state.fullName}</h1>
                <p>{this.state.bio}</p> 
                <img src={this.state.imgSrc} alt="error" />
                <p>{this.state.profession}</p>
                <h2>{this.state.counter}</h2>
            </div>
        );
    }
}
