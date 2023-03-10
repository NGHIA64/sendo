import React, { Component } from "react";
import logo from "../../img/logo.svg";
import menu from "../../img/menu.svg";
import cart from "../../img/cart.svg";
import Body from "../body/body";
class Header extends Component {
  state = {
    input: "",
    qr: false,
    contactHeader: false,
    checkDonHang: false,
    proposal: false
  };
  changeSate(value) {
    // console.log(event.target.value);
    this.setState({
      input: value,
      data: [],
    });
  }

  checkInput(event) {
    event.preventDefault();
    var form = document.getElementById("myForm");
    var data = document.getElementById("input").value;
    console.log(data);
    this.changeSate(data);
    document.getElementById("ads-product").style.display = "none";
  }
  showQR(event) {
    if (this.state.qr == false) {
      this.setState({
        qr: true,
        contactHeader: false,
        checkDonHang: false,
      });
      document.getElementById("qr").style.display = "flex";
      document.getElementById("checkDonHang").style.display = "none";
      document.getElementById("header-contact").style.display = "none";
    } else {
      this.setState({
        qr: false,
      });
      document.getElementById("qr").style.display = "none";
    }
  }
  showContactHeader(event) {
    if (this.state.contactHeader == false) {
      this.setState({
        contactHeader: true,
        qr: false,
        checkDonHang: false,
      });
      document.getElementById("header-contact").style.display = "block";
      document.getElementById("checkDonHang").style.display = "none";
      document.getElementById("qr").style.display = "none";
    } else {
      this.setState({
        contactHeader: false,
      });
      document.getElementById("header-contact").style.display = "none";
    }
  }
  showProposal(event) {
    console.log("ok");
    if (this.state.proposal == false) {
      this.setState({
        proposal: true,
      });
      document.getElementById("proposal").style.display = "block";
    } else {
      this.setState({
        proposal: false,
      });
      document.getElementById("proposal").style.display = "none";
    }
  }
  proposal(value){
    document.getElementById('input').value = value
    this.setState({
      proposal: false,
    });
    document.getElementById("proposal").style.display = "none";
  }
  showCheckDonHang(event) {
    console.log("ok");
    if (this.state.checkDonHang == false) {
      this.setState({
        checkDonHang: true,
        contactHeader: false,
        qr: false,
      });
      document.getElementById("checkDonHang").style.display = "grid";
      document.getElementById("header-contact").style.display = "none";
      document.getElementById("qr").style.display = "none";
    } else {
      this.setState({
        checkDonHang: false,
      });
      document.getElementById("checkDonHang").style.display = "none";
    }
  }
  render() {
    return (
      <>
        <div className="header">
          <div className="top-header">
            <div className="content top-header-item section .not-black-out">
              <div id="down-app" onClick={(event) => this.showQR(event)}>
                T???i ???ng d???ng
                <div className="block qr" id="qr">
                  <img src="https://media3.scdn.vn/img2/2018/5_23/R842FO.png" />
                  <span>Qu??t ????? t???i ???ng d???ng</span>
                </div>
              </div>
              <div
                id="customerCare"
                onClick={(event) => this.showContactHeader(event)}
              >
                Ch??m s??c kh??ch h??ng
                <div className="block" id="header-contact">
                  <div>Trung t??m h??? tr???</div>
                  <div>Tr??? h??ng ho??n ti???n</div>
                </div>
              </div>
              <div
                className="checkDonHang"
                onClick={(event) => this.showCheckDonHang(event)}
              >
                Ki???m tra ????n h??ng
                <div id="checkDonHang" className="block">
                  <form>
                    <input placeholder="Nh???p m?? ????n h??ng" className="block" />
                    <input
                      placeholder="Email / S??? ??i???n tho???i"
                      className="block"
                    />
                    <button className="block">Ki???m tra</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-header">
            <div className="bottom-header-item content section">
              <div className="logo">
                <img src={logo} />
              </div>
              <div className="form-search section">
                <div className="menu">
                  <img src={menu} />
                </div>
                <form className="search-form" id="myForm">
                  <div>
                    <input className="input-search block" id="input" onClick={(event) => this.showProposal(event)} autoComplete="off" type="search"/>
                    <div id="proposal" className="block">
                      <div className="proposal-item" onClick={(value) => this.proposal('gi??y nam th??? thao')}>gi??y nam th??? thao</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('gi??y nam sneaker')}>gi??y nam sneaker</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('gi??y nam cao c???p')}>gi??y nam cao c???p</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('gi??y nam da b??')}>gi??y nam da b??</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('gi??y nam tr???ng')}>gi??y nam tr???ng</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('gi??y nam nike')}>gi??y nam nike</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('gi??y nam c??? cao')}>gi??y nam c??? cao</div>
                      <hr/>
                      <div className="proposal-title">T??m ki???m c???a h??ng</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('gi??y nam order')}>gi??y nam order</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('Gi??y Nam 2H')}>Gi??y Nam 2H</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('Gi??y Nam ??ep')}>Gi??y Nam ??ep</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('Gi??y Nam ?????p')}>Gi??y Nam ?????p</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('Gi??y ?????c Nam')}>Gi??y ?????c Nam</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('Gi??y Nam FenShoes')}>Gi??y Nam FenShoes</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('GI??Y NAM ZATA')}>GI??Y NAM ZATA</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('Gi??y Nam ROSI')}>Gi??y Nam ROSI</div>
                      <hr/>
                      <div className="proposal-title">Xu h?????ng t??m ki???m</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('tai nghe bluetooth')}>tai nghe bluetooth</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('vay ti???n nhanh')}>vay ti???n nhanh</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('gi??n phun vi??n')}>gi??n phun vi??n</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('th??? game garena')}>th??? game garena</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('qu???n l??t n???')}>qu???n l??t n???</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('m??y massage c???m tay')}>m??y massage c???m tay</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('gi??y l?????i nam')}>gi??y l?????i nam</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('kh???u trang')}>kh???u trang</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('m??y r???a xe cao ??p')}>m??y r???a xe cao ??p</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('gi??y nam')}>gi??y nam</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('ph??o hoa 36 qu???')}>ph??o hoa 36 qu???</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('qu???n ????i nam')}>qu???n ????i nam</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('m??y bay ??i???u khi???n')}>m??y bay ??i???u khi???n</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('gi??y th??? thao nam')}>gi??y th??? thao nam</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('loa vi t??nh')}>loa vi t??nh</div>

                    </div>
                  </div>
                  <button
                    className="btn-search block"
                    onClick={(event) => this.checkInput(event)}
                  >
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
                  <button className="block">????ng nh???p</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Body test={this.state.input} />
      </>
    );
  }
}

export default Header;
