import React, { Component } from "react";
import logo from "../../img/logo.svg";
import menu from "../../img/menu.svg";
import cart from "../../img/cart.svg";
import Body from "../body/body";
class Header extends Component {
  state = {
    input: "",
  };
  changeSate(value) {
    // console.log(event.target.value);
    this.setState({
      input: value,
    });
  }
  checkInput(event) {
    event.preventDefault();
    var form = document.getElementById("myForm");
    var data = document.getElementById("input").value;
    console.log(data);
    this.changeSate(data);
  }
  render() {
    return (
      <>
      <div className="header">
        <div className="top-header">
          <div className="content top-header-item section">
            <div>Tải ứng dụng</div>
            <div>Chăm sóc khách hàng</div>
            <div>Kiểm tra đơn hàng</div>
          </div>
        </div>
        <div className="bottom-header">
          <div className="bottom-header-item content section">
            <div className="logo">
              <img src={logo} />
            </div>
            <div className="form-search section" >
              <div className="menu">
                <img src={menu} />
              </div>
              <form className="search-form" id="myForm">
                <input className="input-search block" id="input" />
                <button className="btn-search block" onClick={(event) => this.checkInput(event)}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xlink="http://www.w3.org/1999/xlink"
                    className="svg-search"
                  >
                    <path
                      d="M10 2a8 8 0 0 1 6.32 12.905l5.387 5.388-1.414 1.414-5.388-5.386A8 8 0 1 1 10 2Zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"
                      fill="#445058"
                      fill-rule="nonzero"
                    ></path>
                  </svg>
                </button>
              </form>
            </div>
            <div className="sign-in section">
              <div className="cart">
                <img src={cart} />
              </div>
              <div className="btn-sign-in">
                <button className="block">Đăng nhập</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Body test={this.state.input}/></>
    );
  }
}

export default Header;
