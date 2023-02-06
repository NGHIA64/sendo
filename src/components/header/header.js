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
                Tải ứng dụng
                <div className="block qr" id="qr">
                  <img src="https://media3.scdn.vn/img2/2018/5_23/R842FO.png" />
                  <span>Quét để tải ứng dụng</span>
                </div>
              </div>
              <div
                id="customerCare"
                onClick={(event) => this.showContactHeader(event)}
              >
                Chăm sóc khách hàng
                <div className="block" id="header-contact">
                  <div>Trung tâm hỗ trợ</div>
                  <div>Trả hàng hoàn tiền</div>
                </div>
              </div>
              <div
                className="checkDonHang"
                onClick={(event) => this.showCheckDonHang(event)}
              >
                Kiểm tra đơn hàng
                <div id="checkDonHang" className="block">
                  <form>
                    <input placeholder="Nhập mã đơn hàng" className="block" />
                    <input
                      placeholder="Email / Số điện thoại"
                      className="block"
                    />
                    <button className="block">Kiểm tra</button>
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
                      <div className="proposal-item" onClick={(value) => this.proposal('giày nam thể thao')}>giày nam thể thao</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('giày nam sneaker')}>giày nam sneaker</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('giày nam cao cấp')}>giày nam cao cấp</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('giày nam da bò')}>giày nam da bò</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('giày nam trắng')}>giày nam trắng</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('giày nam nike')}>giày nam nike</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('giày nam cổ cao')}>giày nam cổ cao</div>
                      <hr/>
                      <div className="proposal-title">Tìm kiếm cửa hàng</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('giày nam order')}>giày nam order</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('Giày Nam 2H')}>Giày Nam 2H</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('Giày Nam Đep')}>Giày Nam Đep</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('Giày Nam Đẹp')}>Giày Nam Đẹp</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('Giày Đức Nam')}>Giày Đức Nam</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('Giày Nam FenShoes')}>Giày Nam FenShoes</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('GIÀY NAM ZATA')}>GIÀY NAM ZATA</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('Giày Nam ROSI')}>Giày Nam ROSI</div>
                      <hr/>
                      <div className="proposal-title">Xu hướng tìm kiếm</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('tai nghe bluetooth')}>tai nghe bluetooth</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('vay tiền nhanh')}>vay tiền nhanh</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('giàn phun viên')}>giàn phun viên</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('thẻ game garena')}>thẻ game garena</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('quần lót nữ')}>quần lót nữ</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('máy massage cầm tay')}>máy massage cầm tay</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('giày lười nam')}>giày lười nam</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('khẩu trang')}>khẩu trang</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('máy rửa xe cao áp')}>máy rửa xe cao áp</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('giày nam')}>giày nam</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('pháo hoa 36 quả')}>pháo hoa 36 quả</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('quần đùi nam')}>quần đùi nam</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('máy bay điều khiển')}>máy bay điều khiển</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('giày thể thao nam')}>giày thể thao nam</div>
                      <div className="proposal-item" onClick={(value) => this.proposal('loa vi tính')}>loa vi tính</div>

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
                  <button className="block">Đăng nhập</button>
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
