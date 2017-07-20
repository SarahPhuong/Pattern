import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import getHomeAPI from './getHome.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.onGetHome = this.onGetHome.bind(this);
        this.onPostData = this.onPostData.bind(this);
    }

    onGetHome() {
        getHomeAPI()
        .then(text => console.log(text))
        .catch(err => console.log(err.toString()));
    }

    onPostData() {
        fetch('http://localhost:3000/xuly', {
            method: 'post',
            body: JSON.stringify({ num: this.refs.txtNumber.value })
        })
        .then(res => res.text())
        .then(resText => console.log(resText));
    }

    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <input className="form-control" ref="txtNumber"/>
                    <br />
                    <button type="button" className="btn btn-large btn-block btn-default" onClick={this.onGetHome}>
                        SEND REQUEST
                    </button>
                    <button type="button" className="btn btn-large btn-block btn-primary" onClick={this.onPostData}>
                        SEND POST
                    </button>
                </div>
            </div>
        );
    }
}

const divRoot = document.getElementById('root');
ReactDOM.render(<App />, divRoot);

