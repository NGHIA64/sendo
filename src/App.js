import "./App.css";
import logo from './img/logo.svg'
import menu from './img/menu.svg'
import cart from './img/cart.svg'
function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="top-header">
          <div className="content">
            <div>
              <span>Tải ứng dụng</span>
            </div>
            <div>
              <span>Chăm sóc khách hàng</span>
            </div>
            <div>
              <span>Kiểm tra đơn hàng</span>
            </div>
          </div>
        </div>
        <div className="bottom-header">
          <div className="content">
            <div className="logo">
              <img src={logo} height="48px" width="100%" />
            </div>
            <div className="form-search">
              <div className="menu">
                <img src={menu} />
              </div>
              <form className="search-form">
                <input className="input-search" value='giày nam'/>
                <button className="btn-search">
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
            <div className="sign-in">
              <div className="cart">
                <img src={cart}/>
              </div>
              <button className="btn-sign-in">Đăng nhập</button>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="content">
          <div className="main-header">
            <div className="main-header-1">
              <a>Sendo.vn</a>
              <span className="text-[#6f787e]"> / Kết quả tìm kiếm</span>
            </div>
            <div className="main-header-2">
              <span>giày nam</span>
            </div>
          </div>
          <div className="main-body">
            <div className="sidebar-left">
              <div></div>
            </div>
            <div className="sidebar-right">
              <div className="sort"></div>
              <div className="ads-products"></div>
              <div className="all-products"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="content">
          <div className="footer-ads">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="footer-about">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="footer-contact">
            <div></div>
            <div></div>
          </div>
          <div className="footer-top-search">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
