import "./App.css";
import logo from "./img/logo.svg";
import menu from "./img/menu.svg";
import cart from "./img/cart.svg";
import btnScrollToTop from "./img/btn-scroll-to-top.svg";
function App() {
  return (
    <div className="App">
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
            <div className="form-search section">
              <div className="menu">
                <img src={menu} />
              </div>
              <form className="search-form">
                <input className="input-search block" value="giày nam" />
                <button className="btn-search block">
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
      <div className="body">
        <div className="content">
          <div className="top-body">
            <div className="top-body-title">
              <a>Sendo.vn</a>/<span>Kết quả tìm kiếm</span>
            </div>
            <div className="top-body-result">
              <span>giày nam</span>Tìm thấy hơn 10.000 sản phẩm
            </div>
          </div>
          <div className="main-body">
            <div className="right-body"></div>
            <div className="left-body"></div>
          </div>
        </div>
        <div className="btn-scroll-to-top block">
          <img src={btnScrollToTop} />
        </div>
        <div className="btn-chat-support block">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xlink="http://www.w3.org/1999/xlink"
            color="#fff"
            class="d7ed-SwZDZ2"
          >
            <path
              d="M20 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7.913L6 21.804V18H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16Zm0 2H4v12h4v2.196L11.513 16H20V4Zm-6 7v2H7v-2h7Zm2-4v2H7V7h9Z"
              fill="#fff"
              fill-rule="nonzero"
            ></path>
          </svg>
          <span>Chat</span>
        </div>
      </div>
    </div>
  );
}

export default App;
