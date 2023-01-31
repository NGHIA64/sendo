import React, { Component } from "react";
import { data } from "../data.js";
import Product from "./product.js";
class Input extends Component {
    state = {
        input: ''
    }
    changeSate(value){
        // console.log(event.target.value);
        this.setState(
            {
                input: value
            }
        )
    }
    checkInput(event){
        event.preventDefault()
        var form = document.getElementById("myForm");
        var data = document.getElementById('input').value
        console.log(data);
        this.changeSate(data)
form.reset();
    }
  render() {
    return (
      <div>
        <form id="myForm">
          <input id="input" type='text'/>
          <button onClick={(event) => this.checkInput(event)}>Submit</button>
        </form>
        <Product test={this.state.input}/>
      </div>
    );
  }
}

export default Input;
