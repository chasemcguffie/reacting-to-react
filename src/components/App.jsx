import React, {Component, Fragment} from 'react';

class App extends Component {
    constructor () {
        super()
        this.state = {text: "", hasLoaded: false}
    }
    onInputChange = (value) => {
        this.setState({ text: value });
    }
    onButtonClick = () => {
        this.setState({ hasLoaded: true })
        console.log(this.state.hasLoaded)
    }
    componentDidMount = () => {
        this.setState({hasLoaded: true})
    }
    render () {
        if (this.state.hasLoaded === true) {
        return (
            <Fragment>
            <h1> Hello this is the {this.props.name} </h1>
            <input 
            placeholder={this.state.text}
            value = {this.state.text}
            onChange = { (event) => this.onInputChange(event.target.value)}
            />
            <button
            onClick = { (event) => this.onButtonClick()}
            >Click Me</button>
            <h2> Here is a state: {this.state.text} </h2>
            </Fragment>
        )
        } else {
        return (
            <Fragment>
            <h1>Loading...</h1>
            <button
            onClick = { (event) => this.onButtonClick()}
            >Click Me</button>
            </Fragment>
        )
        }
    }
}

export default App;