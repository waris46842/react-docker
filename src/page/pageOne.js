import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

export default class PageOne extends Component {
    constructor(props) {
        super(props);
        this.getKeyData = this.getKeyData.bind(this)
        this.state = {
            key: "",
            value: [],
            showButton: true,
            listItems: ""
        };
    }
    getKeyData() {
        axios
            .get('https://asia-east2-candidateplayground.cloudfunctions.net/key')
            .then(res => {
                const data = res.data

                this.setState({
                    key: data.key,
                })

                this.getValueData(data.key)

            })
            .catch((error) => {
                console.log(error)
            })

    }
    getValueData(key){
        axios
            .get('https://asia-east2-candidateplayground.cloudfunctions.net/value',{headers: {'Authorization': key}})
            .then(res => {
                const data = res.data
                
                this.setState({
                    value: data.value,
                    showButton: !this.state.showButton,
                    listItems: data.value.map((val) => <li>{val}</li>)
                })

                console.log(this.state.value)

            })
            .catch((error) => {
                console.log(error)
            })
    }
    render() {

        return (
            <div>
                {this.state.showButton ? <button onClick={this.getKeyData}>Load</button> :  <Link to={{pathname: "/pageTwo", state: {key: this.state.key, value: this.state.value}}}><button>Calculate</button></Link>}
                <ul>{this.state.listItems}</ul>
            </div>
        )
    }
}