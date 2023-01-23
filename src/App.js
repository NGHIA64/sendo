import "./App.css";
import logo from "./img/logo.svg";
import menu from "./img/menu.svg";
import cart from "./img/cart.svg";
function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="top-header">
          <div className="grid">
            <div className="top-header-item">Tải ứng dụng</div>
            <div className="top-header-item">Chăm sóc khách hàng</div>
            <div className="top-header-item">Kiểm tra đơn hàng</div>
          </div>
        </div>
        <div className="bottom-header">
          <div className="grid">
            <div className="logo">
              <img className="" />
            </div>
            <div className="main-search">
              <img className="" />
              <form className="form-search">
                <input className="" />
                <button className="">
                  <img className="" />
                </button>
              </form>
            </div>
            <div className="sign-in">
              <img className="" />
              <button className="">Đăng nhập</button>
            </div>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="grid">
          <div className="top-body">
            <a className="">
              Sendo.vn<span> / Kết quả tìm kiếm</span>
            </a>
            <div className="">
              giày nam<span> Tìm thấy hơn 10.000 sản phẩm</span>
            </div>
          </div>
          <div className="main-body">
            <div className="sidebar-left">
              <div className="sidebar-left-item">
                <div className="title-filter">
                  <span>Địa điểm</span>
                  <img />
                </div>
                <div className="body-filter"></div>
                <div className="footer-filter">
                  <img />
                  <span></span>
                </div>
              </div>
            </div>
            <div className="sidebar-right">
              <div className="sort-product">
                <span>Sắp xếp theo: </span>
                <div className="sort-value">
                  <div>Đề cử</div>
                  <img />
                </div>
              </div>
              <div className="ads-products"></div>
              <div className="products"></div>
              <div className="more-products"></div>
            </div>
          </div>
          <div className="footer-body"></div>
        </div>
      </div>
      <div className="footer">
        <div className="grid">
          <div className="ads-footer"></div>
          <div className="about-footer"></div>
          <div className="contact-footer"></div>
          <div className="keyword-footer"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
