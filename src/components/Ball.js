import React, { Component } from 'react';
import './ball.css';

class Ball extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBall: false,
            ballPosition: 0 // Initial position at left: 0px
        };
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        if (event.key === 'ArrowRight' || event.keyCode === 39) {
            // Move ball to the right by 5 pixels
            this.setState(prevState => ({
                ballPosition: prevState.ballPosition + 5
            }));
        }
    }

    buttonClickHandler = () => {
        this.setState({ showBall: true });
    }

    renderChoice = () => {
        if (!this.state.showBall) {
            return (
                <button className="start" onClick={this.buttonClickHandler}>Start</button>
            );
        } else {
            return (
                <div className="ball" style={{ left: `${this.state.ballPosition}px` }}></div>
            );
        }
    }

    render() {
        return (
            <div className="ball">
                {this.renderChoice()}
            </div>
        );
    }
}

export default Ball;
