import React, { Component } from "react";
import { data } from "../data";

class Product extends Component {
  state = {
    name: "",
  };
  props = {
    test: ''
  }
  changeSate(event) {
    // console.log(event.target.value);
    this.setState({
      name: this.props,
    });
  }
  render() {
    var filter;
    // console.log(this.props);
    console.log(this.props.test);
    filter = data.filter(notification => notification.name.includes(this.props.test));
    console.log(filter)
    return (
      <div className="product">
        {filter.map( (item, index) => {
            return <>
            <div>{item}</div>
            </>
        })}
      </div>
    );
  }
}
export default Product;
