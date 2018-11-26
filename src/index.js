import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: null,
            errorMessage: ''
        };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ latitude: position.coords.latitude })
            },
            error => {
                this.setState({ errorMessage: error.message });
            }
        );
    }

    render() {
        let content;

        if (this.state.errorMessage) {
            content = `Error: ${this.state.errorMessage}`;
        } else if (this.state.latitude){
            content = `Latitude: ${this.state.latitude}`;
        } else {
            content = 'Loading...';
        }

        return (
            <div>{content}</div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);