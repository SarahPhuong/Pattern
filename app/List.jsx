import React, { Component } from 'react';
import { connect } from 'react-redux';

class List extends Component {
    render() {
        return (
            <ul>
                { this.props.arrNum.map((n, i) => <li key={i}>{n}</li>) }
            </ul>
        );
    }
}

const mapStateToProps = state => ({ arrNum: state.arrNum });

export default connect(mapStateToProps)(List);