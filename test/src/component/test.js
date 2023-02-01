import React, { Component } from 'react';

class Test extends Component {
    state = {
        arr: []
    }
    addArr = (value) => {
        let a = this.state.arr
        a.push(value)
        this.setState({
            arr: a
        })
        console.log(this.state.arr)
    }
    render() {
        var arr = [1, 2]
        var item = 1
        console.log(arr.includes(item))
        return (
            <button onClick={() => this.addArr('123')}>
                click
            </button>
        );
    }
}

export default Test;
