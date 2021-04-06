import React, {Component} from 'react'
import { Link } from 'react-router-dom';


export default class PageTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "",
            value: [],
        };
    }

    componentDidMount(){
        this.setState({
            key: this.props.location.state.key,
            value: this.props.location.state.value
        })
    }
    render() {

        return (
            <div>
                <div>{'Key: ' + this.state.key}</div>
                <div>{'Sum:' + this.state.value.reduce(function(a, b){return a + b;}, 0)}</div>
                <Link to={{pathname: "/"}}><button>Back</button></Link>
            </div>
        )
    }
}
