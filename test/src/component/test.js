import React, { Component } from 'react';

class Test extends Component {
    state = {
        arr: [],
        data: []
    }
    addArr = (value) => {
        let a = this.state.arr
        a.push(value)
        this.setState({
            arr: a
        })
        console.log(this.state.arr)
    }
    async componentDidMount() {
        try{
          const response = await fetch('http://localhost:3001/products')
          const product = await response.json()
            this.setState({ data: product });
        }catch(err){
          console.log(err)
        }
    }
    render() {
        var arr = [1, 2]
        var item = 1
        console.log(arr.includes(item))
        console.log(this.state.data)
        console.log('jdsahfjkds')
        const array1 = this.state.data;

// Pass a function to map
const map1 = this.state.data.map(x => x);

console.log(map1[0]?.name);
        return (
            <>
            <button onClick={() => this.addArr('123')}>
                click
            </button>
            {this.state.data.map( (item, index) => {
                return <div>1</div>
            })}</>
        );
    }
}

export default Test;
