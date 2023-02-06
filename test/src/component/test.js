import React, { Component } from 'react';
import ScrollToTop from "react-scroll-to-top";
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
var homes = [
    {
        "h_id": "3",
        "city": "Dallas",
        "state": "TX",
        "zip": "75201",
        "price": "7"
    }, {
        "h_id": "4",
        "city": "Bevery Hills",
        "state": "CA",
        "zip": "90210",
        "price": "4"
    }, {
        "h_id": "5",
        "city": "New York",
        "state": "NY",
        "zip": "00010",
        "price": "9"
    }
];
var t = homes.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
homes.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
console.log(t)
        return (
            <>
            <button onClick={() => this.addArr('123')}>
                click
            </button>
            {/* <div> */}
      {/* <h1>Hello, world!</h1> */}
      {/* <div style={{ marginTop: "150vh" }} /> */}
      <ScrollToTop smooth />
    {/* </div> */}

            {this.state.data.map( (item, index) => {
                return <div>1</div>
            })}</>
        );
    }
}

export default Test;
