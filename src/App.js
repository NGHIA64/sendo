import "./App.css";
import logo from "./img/logo.svg";
import menu from "./img/menu.svg";
import cart from "./img/cart.svg";
function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="top-header">
          <div className="">Tải ứng dụng</div>
          <div className="">Chăm sóc khách hàng</div>
          <div className="">Kiểm tra đơn hàng</div>
        </div>
        <div className="bottom-header">
          <div className="logo">
            <img className=""/>
          </div>
          <div className="main-search">
            <img className=""/>
            <form className="form-search">
              <input className=""/>
              <button className="">
                <img className=""/>
              </button>
            </form>
          </div>
          <div className="sign-in">
            <img className=""/>
            <button className="">Đăng nhập</button>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="top-body">
        <a className="">Sendo.vn<span> / Kết quả tìm kiếm</span></a>
        <div className="">giày nam<span> Tìm thấy hơn 10.000 sản phẩm</span></div>
        </div>
        <div className="main-body">
          <div className="sidebar-left">
            <div className="sidebar-left-item">
              <div className="sidebar-left-item-title">
                <span>Địa điểm</span>
                <img/>
              </div>
              <div className="sidebar-left-item-body"></div>
            </div>
          </div>
          <div className="sidebar-right"></div>
        </div>
        <div className="footer-body"></div>
      </div>
      <div className="footer">
        <div className="ads-footer"></div>
        <div className="about-footer"></div>
        <div className="contact-footer"></div>
        <div className="keyword-footer"></div>
      </div>
    </div>
  );
}

export default App;
