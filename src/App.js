import "./App.css";
import logo from './img/logo.svg'
import menu from './img/menu.svg'
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
              <img src={logo} height='48px' width='100%' />
            </div>
            <div className="form-search">
              <div>
                <img src={menu}/>
              </div>
              <form>
                <input />
                <button></button>
              </form>
            </div>
            <div className="sign-in">
              <div></div>
              <button>Dang Nhap</button>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="content">
          <div className="main-header">
            <div></div>
            <div></div>
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
