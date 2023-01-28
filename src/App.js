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
            <div className="right-body">
              <div className="item-filter">
                <div className="header-filter">
                  <span>Địa điểm</span>
                  <button className="block">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-w34diS"
                    >
                      <path
                        fill="#3f4b53"
                        fill-rule="nonzero"
                        d="M12 10.786L6.476 16 5 14.607 12 8l7 6.607L17.524 16z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="body-filter">
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>Hà Nội</span>
                  </div>
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>Hồ Chí Minh</span>
                  </div>
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>Lâm Đồng</span>
                  </div>
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>Đà Nẵng</span>
                  </div>
                </div>
                <div className="footer-filter">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xlink="http://www.w3.org/1999/xlink"
                    class="d7ed-SwZDZ2 d7ed-w34diS"
                  >
                    <path
                      fill="#3f4b53"
                      fill-rule="nonzero"
                      d="M13 11h9v2h-9v9h-2v-9H2v-2h9V2h2z"
                    ></path>
                  </svg>
                  <span>Xem thêm</span>
                </div>
              </div>
              <hr />
              <div className="item-filter">
                <div className="header-filter">
                  <span>Phương thức vận chuyển</span>
                  <button className="block">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-w34diS"
                    >
                      <path
                        fill="#3f4b53"
                        fill-rule="nonzero"
                        d="M12 10.786L6.476 16 5 14.607 12 8l7 6.607L17.524 16z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="body-filter">
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>Hỏa tốc</span>
                  </div>
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>Nhanh</span>
                  </div>
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>Tiêu chuẩn</span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="item-filter">
                <div className="header-filter">
                  <span>Loại shop</span>
                  <button className="block">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-w34diS"
                    >
                      <path
                        fill="#3f4b53"
                        fill-rule="nonzero"
                        d="M12 10.786L6.476 16 5 14.607 12 8l7 6.607L17.524 16z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="body-filter">
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>SenMall</span>
                  </div>
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>Shop+</span>
                  </div>
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>Shop tự giao</span>
                  </div>
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>Shop uy tín</span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="item-filter">
                <div className="header-filter">
                  <span>Ưu đãi</span>
                  <button className="block">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-w34diS"
                    >
                      <path
                        fill="#3f4b53"
                        fill-rule="nonzero"
                        d="M12 10.786L6.476 16 5 14.607 12 8l7 6.607L17.524 16z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="body-filter">
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>SALE RỘN RÀNG</span>
                  </div>
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>NÂNG TẦM KHÔNG GIAN SỐNG</span>
                  </div>
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>Siêu voucher tháng 1</span>
                  </div>
                </div>
                <div className="footer-filter">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xlink="http://www.w3.org/1999/xlink"
                    class="d7ed-SwZDZ2 d7ed-w34diS"
                  >
                    <path
                      fill="#3f4b53"
                      fill-rule="nonzero"
                      d="M13 11h9v2h-9v9h-2v-9H2v-2h9V2h2z"
                    ></path>
                  </svg>
                  <span>Xem thêm</span>
                </div>
              </div>
              <hr />
              <div className="item-filter">
                <div className="header-filter">
                  <span>Ưu đãi</span>
                  <button className="block">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-w34diS"
                    >
                      <path
                        fill="#3f4b53"
                        fill-rule="nonzero"
                        d="M12 10.786L6.476 16 5 14.607 12 8l7 6.607L17.524 16z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="body-filter">
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>SALE RỘN RÀNG</span>
                  </div>
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>NÂNG TẦM KHÔNG GIAN SỐNG</span>
                  </div>
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>Siêu voucher tháng 1</span>
                  </div>
                </div>
                <div className="footer-filter">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xlink="http://www.w3.org/1999/xlink"
                    class="d7ed-SwZDZ2 d7ed-w34diS"
                  >
                    <path
                      fill="#3f4b53"
                      fill-rule="nonzero"
                      d="M13 11h9v2h-9v9h-2v-9H2v-2h9V2h2z"
                    ></path>
                  </svg>
                  <span>Xem thêm</span>
                </div>
              </div>
              <hr />
              <div className="item-filter">
                <div className="header-filter">
                  <span>Độ cao</span>
                  <button className="block">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-w34diS"
                    >
                      <path
                        fill="#3f4b53"
                        fill-rule="nonzero"
                        d="M12 10.786L6.476 16 5 14.607 12 8l7 6.607L17.524 16z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="body-filter">
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>Đế bệt</span>
                  </div>
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>Đế cao</span>
                  </div>
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>Đế bánh mì</span>
                  </div>
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>Đế độn</span>
                  </div>
                </div>
                <div className="footer-filter">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xlink="http://www.w3.org/1999/xlink"
                    class="d7ed-SwZDZ2 d7ed-w34diS"
                  >
                    <path
                      fill="#3f4b53"
                      fill-rule="nonzero"
                      d="M13 11h9v2h-9v9h-2v-9H2v-2h9V2h2z"
                    ></path>
                  </svg>
                  <span>Xem thêm</span>
                </div>
              </div>
              <hr />
              <div className="item-filter">
                <div className="header-filter">
                  <span>Chiều cao</span>
                  <button className="block">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-w34diS"
                    >
                      <path
                        fill="#3f4b53"
                        fill-rule="nonzero"
                        d="M12 10.786L6.476 16 5 14.607 12 8l7 6.607L17.524 16z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="body-filter">
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>Dưới 3cm</span>
                  </div>
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>3cm</span>
                  </div>
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>5cm</span>
                  </div>
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>4cm</span>
                  </div>
                </div>
                <div className="footer-filter">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xlink="http://www.w3.org/1999/xlink"
                    class="d7ed-SwZDZ2 d7ed-w34diS"
                  >
                    <path
                      fill="#3f4b53"
                      fill-rule="nonzero"
                      d="M13 11h9v2h-9v9h-2v-9H2v-2h9V2h2z"
                    ></path>
                  </svg>
                  <span>Xem thêm</span>
                </div>
              </div>
              <hr />
              <div className="item-filter">
                <div className="header-filter">
                  <span>Chất liệu</span>
                  <button className="block">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-w34diS"
                    >
                      <path
                        fill="#3f4b53"
                        fill-rule="nonzero"
                        d="M12 10.786L6.476 16 5 14.607 12 8l7 6.607L17.524 16z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="body-filter">
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>Vải</span>
                  </div>
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>Nhiều chất liệu</span>
                  </div>
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>Cao su</span>
                  </div>
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>Da bò</span>
                  </div>
                </div>
                <div className="footer-filter">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xlink="http://www.w3.org/1999/xlink"
                    class="d7ed-SwZDZ2 d7ed-w34diS"
                  >
                    <path
                      fill="#3f4b53"
                      fill-rule="nonzero"
                      d="M13 11h9v2h-9v9h-2v-9H2v-2h9V2h2z"
                    ></path>
                  </svg>
                  <span>Xem thêm</span>
                </div>
              </div>
              <hr />
              <div className="item-filter">
                <div className="header-filter">
                  <span>Kích thước</span>
                  <button className="block">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-w34diS"
                    >
                      <path
                        fill="#3f4b53"
                        fill-rule="nonzero"
                        d="M12 10.786L6.476 16 5 14.607 12 8l7 6.607L17.524 16z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="body-filter">
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>35</span>
                  </div>
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>37</span>
                  </div>
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>38</span>
                  </div>
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>42</span>
                  </div>
                </div>
                <div className="footer-filter">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xlink="http://www.w3.org/1999/xlink"
                    class="d7ed-SwZDZ2 d7ed-w34diS"
                  >
                    <path
                      fill="#3f4b53"
                      fill-rule="nonzero"
                      d="M13 11h9v2h-9v9h-2v-9H2v-2h9V2h2z"
                    ></path>
                  </svg>
                  <span>Xem thêm</span>
                </div>
              </div>
              <hr />
              <div className="item-filter">
                <div className="header-filter">
                  <span>Xuất xứ</span>
                  <button className="block">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-w34diS"
                    >
                      <path
                        fill="#3f4b53"
                        fill-rule="nonzero"
                        d="M12 10.786L6.476 16 5 14.607 12 8l7 6.607L17.524 16z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="body-filter">
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>Thái Lan</span>
                  </div>
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>Việt Nam</span>
                  </div>
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>Hàn Quốc</span>
                  </div>
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>Indonesia</span>
                  </div>
                </div>
                <div className="footer-filter">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xlink="http://www.w3.org/1999/xlink"
                    class="d7ed-SwZDZ2 d7ed-w34diS"
                  >
                    <path
                      fill="#3f4b53"
                      fill-rule="nonzero"
                      d="M13 11h9v2h-9v9h-2v-9H2v-2h9V2h2z"
                    ></path>
                  </svg>
                  <span>Xem thêm</span>
                </div>
              </div>
              <hr />
              <div className="item-filter">
                <div className="header-filter">
                  <span>Bộ lọc khác</span>
                  <button className="block">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-w34diS"
                    >
                      <path
                        fill="#3f4b53"
                        fill-rule="nonzero"
                        d="M12 10.786L6.476 16 5 14.607 12 8l7 6.607L17.524 16z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="body-filter">
                  <div className="body-filter-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-ong_OF"
                    >
                      <path
                        d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
                        fill="#6F787E"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                    <span>Có video</span>
                  </div>
                </div>
              </div>
              <hr />
            </div>
            <div className="left-body">
              <div className="sort">
                <span>Sắp xếp theo:</span>
                <div className="block">
                  <div>Đề cử</div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xlink="http://www.w3.org/1999/xlink"
                    class="d7ed-SwZDZ2 d7ed-OBpTEp"
                  >
                    <path
                      fill="#6F787E"
                      fill-rule="nonzero"
                      d="M12 13.214 17.524 8 19 9.393 12 16 5 9.393 6.476 8z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="ads-product">
                <span>Sản phẩm được tài trợ</span>
                <div>
                  <a className="product-item">
                    <img src="https://media3.scdn.vn/img4/2020/05_08/aiYrDbNiFownCTqcSBgq_simg_de2fe0_250x250_maxb.jpg" />
                    <div className="info-product">
                      <div className="branch">
                        <img src="https://media3.scdn.vn/img4/2021/10_21/mFcIndYzGOkBpNH6w5oN.png" />
                      </div>
                      <div className="name">
                        <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />
                        <span>Giày nam họa tiết nổi bật</span>
                      </div>
                      <div className="sale">
                        <span>150.000đ</span>
                        <div>-48%</div>
                      </div>
                      <div className="price">79.000đ</div>
                      <div className="sold">Đã bán 331</div>
                      <div className="quality">
                        <div>
                          <span>4.6/5</span>
                          <svg
                            width="12"
                            height="12"
                            aria-hidden="true"
                            fill="#ffc600"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>First star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        </div>
                        <div className="adress">TP.HCM</div>
                      </div>
                    </div>
                  </a>
                  <a className="product-item">
                    <img src="https://media3.scdn.vn/img4/2020/07_26/7ZSuo1R35kwN4WxYnzND_simg_de2fe0_250x250_maxb.jpg" />
                    <div className="info-product">
                      <div className="branch">
                        <img src="https://media3.scdn.vn/img4/2021/10_21/mFcIndYzGOkBpNH6w5oN.png" />
                      </div>
                      <div className="name">
                        <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />
                        <span>Giày nam họa tiết nổi bật</span>
                      </div>
                      <div className="sale">
                        <span>150.000đ</span>
                        <div>-48%</div>
                      </div>
                      <div className="price">79.000đ</div>
                      <div className="sold">Đã bán 331</div>
                      <div className="quality">
                        <div>
                          <span>4.6/5</span>
                          <svg
                            width="12"
                            height="12"
                            aria-hidden="true"
                            fill="#ffc600"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>First star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        </div>
                        <div className="adress">TP.HCM</div>
                      </div>
                    </div>
                  </a>
                  <a className="product-item">
                    <img src="https://media3.scdn.vn/img4/2022/06_09/yg9JxBY4MHB5UQw2nGeb_simg_de2fe0_250x250_maxb.jpg" />
                    <div className="info-product">
                      <div className="branch">
                        <img src="https://media3.scdn.vn/img4/2021/10_21/mFcIndYzGOkBpNH6w5oN.png" />
                      </div>
                      <div className="name">
                        <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />
                        <span>Giày nam họa tiết nổi bật</span>
                      </div>
                      <div className="sale">
                        <span>150.000đ</span>
                        <div>-48%</div>
                      </div>
                      <div className="price">79.000đ</div>
                      <div className="sold">Đã bán 331</div>
                      <div className="quality">
                        <div>
                          <span>4.6/5</span>
                          <svg
                            width="12"
                            height="12"
                            aria-hidden="true"
                            fill="#ffc600"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>First star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        </div>
                        <div className="adress">TP.HCM</div>
                      </div>
                    </div>
                  </a>
                  <a className="product-item">
                    <img src="https://media3.scdn.vn/img2/2018/7_3/K3fPdi_simg_de2fe0_250x250_maxb.jpg" />
                    <div className="info-product">
                      <div className="branch">
                        <img src="https://media3.scdn.vn/img4/2021/10_21/mFcIndYzGOkBpNH6w5oN.png" />
                      </div>
                      <div className="name">
                        <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />
                        <span>Giày nam họa tiết nổi bật</span>
                      </div>
                      <div className="sale">
                        <span>150.000đ</span>
                        <div>-48%</div>
                      </div>
                      <div className="price">79.000đ</div>
                      <div className="sold">Đã bán 331</div>
                      <div className="quality">
                        <div>
                          <span>4.6/5</span>
                          <svg
                            width="12"
                            height="12"
                            aria-hidden="true"
                            fill="#ffc600"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>First star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        </div>
                        <div className="adress">TP.HCM</div>
                      </div>
                    </div>
                  </a>
                  <a className="product-item">
                    <img src="https://media3.scdn.vn/img3/2019/5_18/RQpHK2_simg_de2fe0_250x250_maxb.jpg" />
                    <div className="info-product">
                      <div className="branch">
                        <img src="https://media3.scdn.vn/img4/2021/10_21/mFcIndYzGOkBpNH6w5oN.png" />
                      </div>
                      <div className="name">
                        <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />
                        <span>Giày nam họa tiết nổi bật</span>
                      </div>
                      <div className="sale">
                        <span>150.000đ</span>
                        <div>-48%</div>
                      </div>
                      <div className="price">79.000đ</div>
                      <div className="sold">Đã bán 331</div>
                      <div className="quality">
                        <div>
                          <span>4.6/5</span>
                          <svg
                            width="12"
                            height="12"
                            aria-hidden="true"
                            fill="#ffc600"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>First star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        </div>
                        <div className="adress">TP.HCM</div>
                      </div>
                    </div>
                  </a>
                  <a className="product-item">
                    <img src="https://media3.scdn.vn/img4/2020/01_05/AkD0atvmuni9xt0UDGuI_simg_de2fe0_250x250_maxb.jpg" />
                    <div className="info-product">
                      <div className="branch">
                        <img src="https://media3.scdn.vn/img4/2021/10_21/mFcIndYzGOkBpNH6w5oN.png" />
                      </div>
                      <div className="name">
                        <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />
                        <span>Giày nam họa tiết nổi bật</span>
                      </div>
                      <div className="sale">
                        <span>150.000đ</span>
                        <div>-48%</div>
                      </div>
                      <div className="price">79.000đ</div>
                      <div className="sold">Đã bán 331</div>
                      <div className="quality">
                        <div>
                          <span>4.6/5</span>
                          <svg
                            width="12"
                            height="12"
                            aria-hidden="true"
                            fill="#ffc600"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>First star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        </div>
                        <div className="adress">TP.HCM</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="all-product">
                <a className="product-item">
                  <img src="https://media3.scdn.vn/img3/2019/8_16/PBto9D_simg_de2fe0_250x250_maxb.jpg" />
                  <div className="info-product">
                    <div className="branch">
                      <img src="https://media3.scdn.vn/img4/2021/10_21/mFcIndYzGOkBpNH6w5oN.png" />
                    </div>
                    <div className="name">
                      <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />
                      <span>Giày nam họa tiết nổi bật</span>
                    </div>
                    <div className="sale">
                      <span>150.000đ</span>
                      <div>-48%</div>
                    </div>
                    <div className="price">79.000đ</div>
                    <div className="tra-gop">
                      <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" />
                      Trả góp Kredivo
                    </div>
                    <div className="sold">Đã bán 331</div>
                    <div className="quality">
                      <div>
                        <span>4.6/5</span>
                        <svg
                          width="12"
                          height="12"
                          aria-hidden="true"
                          fill="#ffc600"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                      <div className="adress">TP.HCM</div>
                    </div>
                  </div>
                </a>
                <a className="product-item">
                  <img src="https://media3.scdn.vn/img4/2020/08_06/M1FXe7xj06pU4U9ygUg9_simg_de2fe0_250x250_maxb.jpg" />
                  <div className="info-product">
                    <div className="branch">
                      <img src="https://media3.scdn.vn/img4/2021/10_21/mFcIndYzGOkBpNH6w5oN.png" />
                    </div>
                    <div className="name">
                      <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />
                      <span>Giày nam họa tiết nổi bật</span>
                    </div>
                    <div className="sale">
                      <span>150.000đ</span>
                      <div>-48%</div>
                    </div>
                    <div className="price">79.000đ</div>
                    <div className="tra-gop">
                      <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" />
                      Trả góp Kredivo
                    </div>
                    <div className="sold">Đã bán 331</div>
                    <div className="quality">
                      <div>
                        <span>4.6/5</span>
                        <svg
                          width="12"
                          height="12"
                          aria-hidden="true"
                          fill="#ffc600"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                      <div className="adress">TP.HCM</div>
                    </div>
                  </div>
                </a>
                <a className="product-item">
                  <img src="https://media3.scdn.vn/img3/2019/5_20/MC5K1f_simg_de2fe0_250x250_maxb.jpg" />
                  <div className="info-product">
                    <div className="branch">
                      <img src="https://media3.scdn.vn/img4/2021/10_21/mFcIndYzGOkBpNH6w5oN.png" />
                    </div>
                    <div className="name">
                      <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />
                      <span>Giày nam họa tiết nổi bật</span>
                    </div>
                    <div className="sale">
                      <span>150.000đ</span>
                      <div>-48%</div>
                    </div>
                    <div className="price">79.000đ</div>
                    <div className="tra-gop">
                      <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" />
                      Trả góp Kredivo
                    </div>
                    <div className="sold">Đã bán 331</div>
                    <div className="quality">
                      <div>
                        <span>4.6/5</span>
                        <svg
                          width="12"
                          height="12"
                          aria-hidden="true"
                          fill="#ffc600"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                      <div className="adress">TP.HCM</div>
                    </div>
                  </div>
                </a>
                <a className="product-item">
                  <img src="https://media3.scdn.vn/img4/2020/08_06/M1FXe7xj06pU4U9ygUg9_simg_de2fe0_250x250_maxb.jpg" />
                  <div className="info-product">
                    <div className="branch">
                      <img src="https://media3.scdn.vn/img4/2021/10_21/mFcIndYzGOkBpNH6w5oN.png" />
                    </div>
                    <div className="name">
                      <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />
                      <span>Giày nam họa tiết nổi bật</span>
                    </div>
                    <div className="sale">
                      <span>150.000đ</span>
                      <div>-48%</div>
                    </div>
                    <div className="price">79.000đ</div>
                    <div className="tra-gop">
                      <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" />
                      Trả góp Kredivo
                    </div>
                    <div className="sold">Đã bán 331</div>
                    <div className="quality">
                      <div>
                        <span>4.6/5</span>
                        <svg
                          width="12"
                          height="12"
                          aria-hidden="true"
                          fill="#ffc600"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                      <div className="adress">TP.HCM</div>
                    </div>
                  </div>
                </a>
                <a className="product-item">
                  <img src="https://media3.scdn.vn/img4/2022/06_09/yg9JxBY4MHB5UQw2nGeb_simg_de2fe0_250x250_maxb.jpg" />
                  <div className="info-product">
                    <div className="branch">
                      <img src="https://media3.scdn.vn/img4/2021/10_21/mFcIndYzGOkBpNH6w5oN.png" />
                    </div>
                    <div className="name">
                      <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />
                      <span>Giày nam họa tiết nổi bật</span>
                    </div>
                    <div className="sale">
                      <span>150.000đ</span>
                      <div>-48%</div>
                    </div>
                    <div className="price">79.000đ</div>
                    <div className="tra-gop">
                      <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" />
                      Trả góp Kredivo
                    </div>
                    <div className="sold">Đã bán 331</div>
                    <div className="quality">
                      <div>
                        <span>4.6/5</span>
                        <svg
                          width="12"
                          height="12"
                          aria-hidden="true"
                          fill="#ffc600"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                      <div className="adress">TP.HCM</div>
                    </div>
                  </div>
                </a>
                <a className="product-item">
                  <img src="https://media3.scdn.vn/img4/2020/11_28/cLh8IP0cc6RjSSvPxDQ8_simg_de2fe0_250x250_maxb.jpg" />
                  <div className="info-product">
                    <div className="branch">
                      <img src="https://media3.scdn.vn/img4/2021/10_21/mFcIndYzGOkBpNH6w5oN.png" />
                    </div>
                    <div className="name">
                      <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />
                      <span>Giày nam họa tiết nổi bật</span>
                    </div>
                    <div className="sale">
                      <span>150.000đ</span>
                      <div>-48%</div>
                    </div>
                    <div className="price">79.000đ</div>
                    <div className="tra-gop">
                      <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" />
                      Trả góp Kredivo
                    </div>
                    <div className="sold">Đã bán 331</div>
                    <div className="quality">
                      <div>
                        <span>4.6/5</span>
                        <svg
                          width="12"
                          height="12"
                          aria-hidden="true"
                          fill="#ffc600"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                      <div className="adress">TP.HCM</div>
                    </div>
                  </div>
                </a>
                <a className="product-item">
                  <img src="https://media3.scdn.vn/img3/2019/12_5/NmrVtZ_simg_de2fe0_250x250_maxb.jpg" />
                  <div className="info-product">
                    <div className="branch">
                      <img src="https://media3.scdn.vn/img4/2021/10_21/mFcIndYzGOkBpNH6w5oN.png" />
                    </div>
                    <div className="name">
                      <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />
                      <span>Giày nam họa tiết nổi bật</span>
                    </div>
                    <div className="sale">
                      <span>150.000đ</span>
                      <div>-48%</div>
                    </div>
                    <div className="price">79.000đ</div>
                    <div className="tra-gop">
                      <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" />
                      Trả góp Kredivo
                    </div>
                    <div className="sold">Đã bán 331</div>
                    <div className="quality">
                      <div>
                        <span>4.6/5</span>
                        <svg
                          width="12"
                          height="12"
                          aria-hidden="true"
                          fill="#ffc600"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                      <div className="adress">TP.HCM</div>
                    </div>
                  </div>
                </a>
                <a className="product-item">
                  <img src="https://media3.scdn.vn/img4/2021/01_11/qBQ5zqgldrkq20RnBlaL_simg_de2fe0_250x250_maxb.jpg" />
                  <div className="info-product">
                    <div className="branch">
                      <img src="https://media3.scdn.vn/img4/2021/10_21/mFcIndYzGOkBpNH6w5oN.png" />
                    </div>
                    <div className="name">
                      <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />
                      <span>Giày nam họa tiết nổi bật</span>
                    </div>
                    <div className="sale">
                      <span>150.000đ</span>
                      <div>-48%</div>
                    </div>
                    <div className="price">79.000đ</div>
                    <div className="tra-gop">
                      <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" />
                      Trả góp Kredivo
                    </div>
                    <div className="sold">Đã bán 331</div>
                    <div className="quality">
                      <div>
                        <span>4.6/5</span>
                        <svg
                          width="12"
                          height="12"
                          aria-hidden="true"
                          fill="#ffc600"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                      <div className="adress">TP.HCM</div>
                    </div>
                  </div>
                </a>
                <a className="product-item">
                  <img src="https://media3.scdn.vn/img4/2020/07_30/ls4e7DBeVxAVESKkI1XQ_simg_de2fe0_250x250_maxb.jpg" />
                  <div className="info-product">
                    <div className="branch">
                      <img src="https://media3.scdn.vn/img4/2021/10_21/mFcIndYzGOkBpNH6w5oN.png" />
                    </div>
                    <div className="name">
                      <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />
                      <span>Giày nam họa tiết nổi bật</span>
                    </div>
                    <div className="sale">
                      <span>150.000đ</span>
                      <div>-48%</div>
                    </div>
                    <div className="price">79.000đ</div>
                    <div className="tra-gop">
                      <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" />
                      Trả góp Kredivo
                    </div>
                    <div className="sold">Đã bán 331</div>
                    <div className="quality">
                      <div>
                        <span>4.6/5</span>
                        <svg
                          width="12"
                          height="12"
                          aria-hidden="true"
                          fill="#ffc600"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                      <div className="adress">TP.HCM</div>
                    </div>
                  </div>
                </a>
                <a className="product-item">
                  <img src="https://media3.scdn.vn/img4/2020/01_11/acfypuznMG5UTGbEA32M_simg_de2fe0_250x250_maxb.jpg" />
                  <div className="info-product">
                    <div className="branch">
                      <img src="https://media3.scdn.vn/img4/2021/10_21/mFcIndYzGOkBpNH6w5oN.png" />
                    </div>
                    <div className="name">
                      <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />
                      <span>Giày nam họa tiết nổi bật</span>
                    </div>
                    <div className="sale">
                      <span>150.000đ</span>
                      <div>-48%</div>
                    </div>
                    <div className="price">79.000đ</div>
                    <div className="tra-gop">
                      <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" />
                      Trả góp Kredivo
                    </div>
                    <div className="sold">Đã bán 331</div>
                    <div className="quality">
                      <div>
                        <span>4.6/5</span>
                        <svg
                          width="12"
                          height="12"
                          aria-hidden="true"
                          fill="#ffc600"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                      <div className="adress">TP.HCM</div>
                    </div>
                  </div>
                </a>
                <a className="product-item">
                  <img src="https://media3.scdn.vn/img4/2022/12_08/33VPQJ7R2v04NK1j2b77_simg_de2fe0_250x250_maxb.jpg" />
                  <div className="info-product">
                    <div className="branch">
                      <img src="https://media3.scdn.vn/img4/2021/10_21/mFcIndYzGOkBpNH6w5oN.png" />
                    </div>
                    <div className="name">
                      <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />
                      <span>Giày nam họa tiết nổi bật</span>
                    </div>
                    <div className="sale">
                      <span>150.000đ</span>
                      <div>-48%</div>
                    </div>
                    <div className="price">79.000đ</div>
                    <div className="tra-gop">
                      <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" />
                      Trả góp Kredivo
                    </div>
                    <div className="sold">Đã bán 331</div>
                    <div className="quality">
                      <div>
                        <span>4.6/5</span>
                        <svg
                          width="12"
                          height="12"
                          aria-hidden="true"
                          fill="#ffc600"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                      <div className="adress">TP.HCM</div>
                    </div>
                  </div>
                </a>
                <a className="product-item">
                  <img src="https://media3.scdn.vn/img4/2021/10_01/k6gxZ49ZbqomgSHIhGGJ_simg_de2fe0_250x250_maxb.jpg" />
                  <div className="info-product">
                    <div className="branch">
                      <img src="https://media3.scdn.vn/img4/2021/10_21/mFcIndYzGOkBpNH6w5oN.png" />
                    </div>
                    <div className="name">
                      <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />
                      <span>Giày nam họa tiết nổi bật</span>
                    </div>
                    <div className="sale">
                      <span>150.000đ</span>
                      <div>-48%</div>
                    </div>
                    <div className="price">79.000đ</div>
                    <div className="tra-gop">
                      <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" />
                      Trả góp Kredivo
                    </div>
                    <div className="sold">Đã bán 331</div>
                    <div className="quality">
                      <div>
                        <span>4.6/5</span>
                        <svg
                          width="12"
                          height="12"
                          aria-hidden="true"
                          fill="#ffc600"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                      <div className="adress">TP.HCM</div>
                    </div>
                  </div>
                </a>
                <a className="product-item">
                  <img src="https://media3.scdn.vn/img4/2020/07_23/e9LM74KTD7dQ7QDRUWni_simg_de2fe0_250x250_maxb.jpg" />
                  <div className="info-product">
                    <div className="branch">
                      <img src="https://media3.scdn.vn/img4/2021/10_21/mFcIndYzGOkBpNH6w5oN.png" />
                    </div>
                    <div className="name">
                      <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />
                      <span>Giày nam họa tiết nổi bật</span>
                    </div>
                    <div className="sale">
                      <span>150.000đ</span>
                      <div>-48%</div>
                    </div>
                    <div className="price">79.000đ</div>
                    <div className="tra-gop">
                      <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" />
                      Trả góp Kredivo
                    </div>
                    <div className="sold">Đã bán 331</div>
                    <div className="quality">
                      <div>
                        <span>4.6/5</span>
                        <svg
                          width="12"
                          height="12"
                          aria-hidden="true"
                          fill="#ffc600"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                      <div className="adress">TP.HCM</div>
                    </div>
                  </div>
                </a>
                <a className="product-item">
                  <img src="https://media3.scdn.vn/img4/2020/11_28/cLh8IP0cc6RjSSvPxDQ8_simg_de2fe0_250x250_maxb.jpg" />
                  <div className="info-product">
                    <div className="branch">
                      <img src="https://media3.scdn.vn/img4/2021/10_21/mFcIndYzGOkBpNH6w5oN.png" />
                    </div>
                    <div className="name">
                      <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />
                      <span>Giày nam họa tiết nổi bật</span>
                    </div>
                    <div className="sale">
                      <span>150.000đ</span>
                      <div>-48%</div>
                    </div>
                    <div className="price">79.000đ</div>
                    <div className="tra-gop">
                      <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" />
                      Trả góp Kredivo
                    </div>
                    <div className="sold">Đã bán 331</div>
                    <div className="quality">
                      <div>
                        <span>4.6/5</span>
                        <svg
                          width="12"
                          height="12"
                          aria-hidden="true"
                          fill="#ffc600"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                      <div className="adress">TP.HCM</div>
                    </div>
                  </div>
                </a>
                <a className="product-item">
                  <img src="https://media3.scdn.vn/img4/2022/09_13/Ky7VpL7csjYimQklWEbG_simg_de2fe0_250x250_maxb.jpg" />
                  <div className="info-product">
                    <div className="branch">
                      <img src="https://media3.scdn.vn/img4/2021/10_21/mFcIndYzGOkBpNH6w5oN.png" />
                    </div>
                    <div className="name">
                      <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />
                      <span>Giày nam họa tiết nổi bật</span>
                    </div>
                    <div className="sale">
                      <span>150.000đ</span>
                      <div>-48%</div>
                    </div>
                    <div className="price">79.000đ</div>
                    <div className="tra-gop">
                      <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" />
                      Trả góp Kredivo
                    </div>
                    <div className="sold">Đã bán 331</div>
                    <div className="quality">
                      <div>
                        <span>4.6/5</span>
                        <svg
                          width="12"
                          height="12"
                          aria-hidden="true"
                          fill="#ffc600"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                      <div className="adress">TP.HCM</div>
                    </div>
                  </div>
                </a>
                <a className="product-item">
                  <img src="https://media3.scdn.vn/img3/2019/11_8/npNqIr_simg_de2fe0_250x250_maxb.jpg" />
                  <div className="info-product">
                    <div className="branch">
                      <img src="https://media3.scdn.vn/img4/2021/10_21/mFcIndYzGOkBpNH6w5oN.png" />
                    </div>
                    <div className="name">
                      <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />
                      <span>Giày nam họa tiết nổi bật</span>
                    </div>
                    <div className="sale">
                      <span>150.000đ</span>
                      <div>-48%</div>
                    </div>
                    <div className="price">79.000đ</div>
                    <div className="tra-gop">
                      <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" />
                      Trả góp Kredivo
                    </div>
                    <div className="sold">Đã bán 331</div>
                    <div className="quality">
                      <div>
                        <span>4.6/5</span>
                        <svg
                          width="12"
                          height="12"
                          aria-hidden="true"
                          fill="#ffc600"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                      <div className="adress">TP.HCM</div>
                    </div>
                  </div>
                </a>
                <a className="product-item">
                  <img src="https://media3.scdn.vn/img4/2021/02_18/aIaFwW0UuSyHGL3JPrrz_simg_de2fe0_250x250_maxb.jpg" />
                  <div className="info-product">
                    <div className="branch">
                      <img src="https://media3.scdn.vn/img4/2021/10_21/mFcIndYzGOkBpNH6w5oN.png" />
                    </div>
                    <div className="name">
                      <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />
                      <span>Giày nam họa tiết nổi bật</span>
                    </div>
                    <div className="sale">
                      <span>150.000đ</span>
                      <div>-48%</div>
                    </div>
                    <div className="price">79.000đ</div>
                    <div className="tra-gop">
                      <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" />
                      Trả góp Kredivo
                    </div>
                    <div className="sold">Đã bán 331</div>
                    <div className="quality">
                      <div>
                        <span>4.6/5</span>
                        <svg
                          width="12"
                          height="12"
                          aria-hidden="true"
                          fill="#ffc600"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                      <div className="adress">TP.HCM</div>
                    </div>
                  </div>
                </a>
                <a className="product-item">
                  <img src="https://media3.scdn.vn/img4/2022/06_09/pHLg51eqGGrn5y4KDHvg_simg_de2fe0_250x250_maxb.jpg" />
                  <div className="info-product">
                    <div className="branch">
                      <img src="https://media3.scdn.vn/img4/2021/10_21/mFcIndYzGOkBpNH6w5oN.png" />
                    </div>
                    <div className="name">
                      <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />
                      <span>Giày nam họa tiết nổi bật</span>
                    </div>
                    <div className="sale">
                      <span>150.000đ</span>
                      <div>-48%</div>
                    </div>
                    <div className="price">79.000đ</div>
                    <div className="tra-gop">
                      <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" />
                      Trả góp Kredivo
                    </div>
                    <div className="sold">Đã bán 331</div>
                    <div className="quality">
                      <div>
                        <span>4.6/5</span>
                        <svg
                          width="12"
                          height="12"
                          aria-hidden="true"
                          fill="#ffc600"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                      <div className="adress">TP.HCM</div>
                    </div>
                  </div>
                </a>
                <a className="product-item">
                  <img src="https://media3.scdn.vn/img4/2022/06_09/yg9JxBY4MHB5UQw2nGeb_simg_de2fe0_250x250_maxb.jpg" />
                  <div className="info-product">
                    <div className="branch">
                      <img src="https://media3.scdn.vn/img4/2021/10_21/mFcIndYzGOkBpNH6w5oN.png" />
                    </div>
                    <div className="name">
                      <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />
                      <span>Giày nam họa tiết nổi bật</span>
                    </div>
                    <div className="sale">
                      <span>150.000đ</span>
                      <div>-48%</div>
                    </div>
                    <div className="price">79.000đ</div>
                    <div className="tra-gop">
                      <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" />
                      Trả góp Kredivo
                    </div>
                    <div className="sold">Đã bán 331</div>
                    <div className="quality">
                      <div>
                        <span>4.6/5</span>
                        <svg
                          width="12"
                          height="12"
                          aria-hidden="true"
                          fill="#ffc600"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                      <div className="adress">TP.HCM</div>
                    </div>
                  </div>
                </a>
                <a className="product-item">
                  <img src="https://media3.scdn.vn/img4/2022/12_08/LQSZB5a2u3YqZGhuzFxN_simg_de2fe0_250x250_maxb.jpg" />
                  <div className="info-product">
                    <div className="branch">
                      <img src="https://media3.scdn.vn/img4/2021/10_21/mFcIndYzGOkBpNH6w5oN.png" />
                    </div>
                    <div className="name">
                      <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />
                      <span>Giày nam họa tiết nổi bật</span>
                    </div>
                    <div className="sale">
                      <span>150.000đ</span>
                      <div>-48%</div>
                    </div>
                    <div className="price">79.000đ</div>
                    <div className="tra-gop">
                      <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" />
                      Trả góp Kredivo
                    </div>
                    <div className="sold">Đã bán 331</div>
                    <div className="quality">
                      <div>
                        <span>4.6/5</span>
                        <svg
                          width="12"
                          height="12"
                          aria-hidden="true"
                          fill="#ffc600"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                      <div className="adress">TP.HCM</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="footer-sidebar">
                <button className="btn-xem-them-product">Xem thêm</button>
              </div>
            </div>
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
      <div className="footer">
        <div className="footer-ads">
          <div className="content section">
          <a className="footer-ads-item">
              <img src="https://media3.scdn.vn/img4/2020/12_16/gJwXr6FFZKZCGKWaz4RB.png" />
              <div className="title-footer-ads">Siêu nhiều hàng tốt</div>
              <div className="detail-footer-ads">
                Cần gì cũng có 26 ngành hàng & 10 triệu sản phẩm
              </div>
            </a>
            <a className="footer-ads-item">
              <img src="https://media3.scdn.vn/img4/2020/12_16/EfZWQVfV6nQzu2vMmnwC.png" />
              <div className="title-footer-ads">Siêu yên tâm</div>
              <div className="detail-footer-ads">Miễn phí đổi trả 48h</div>
            </a>
            <a className="footer-ads-item">
              <img src="https://media3.scdn.vn/img4/2020/12_16/j5C6IQz7gIXPgjFJxmRz.png" />
              <div className="title-footer-ads">Siêu tiện lợi</div>
              <div className="detail-footer-ads">
                Mang thế giới mua sắm của Sendo trong tầm tay bạn
              </div>
            </a>
            <a className="footer-ads-item">
              <img src="https://media3.scdn.vn/img4/2020/12_16/7AJFQGQ5qvS7gGOz8P7a.png" />
              <div className="title-footer-ads">Siêu tiết kiệm</div>
              <div className="detail-footer-ads">
                Giá hợp lý, vừa túi tiền. Luôn có nhiều chương trình khuyến mãi
              </div>
            </a>
          </div>
        </div>
        <div className="footer-about">
          <div className="content section footer-item-about">
          <div className="about-item">
                <div className="title-about">VỀ CHÚNG TÔI</div>
                <div>
                  <div className="detail-about">Giới thiệu Sendo.vn</div>
                  <div className="detail-about">Giới thiệu SenMall</div>
                  <div className="detail-about">Quy chế hoạt động</div>
                  <div className="detail-about">Chính sách bảo mật</div>
                  <div className="detail-about">Giao hàng và nhận hàng</div>
                </div>
              </div>
              <div className="about-item">
                <div className="title-about">DÀNH CHO NGƯỜI MUA</div>
                <div>
                  <div className="detail-about">Giài quyết khiếu nại</div>
                  <div className="detail-about">Hướng dẫn mua hàng</div>
                  <div className="detail-about">Chính sách đổi trả</div>
                  <div className="detail-about">Chăm sóc khách hàng</div>
                  <div className="detail-about">Nạp tiền điện thoại</div>
                </div>
              </div>
              <div className="about-item">
                <div className="title-about">DÀNH CHO NGƯỜI BÁN</div>
                <div>
                  <div className="detail-about">Quy định với người bán</div>
                  <div className="detail-about">Chính sách bán hàng</div>
                  <div className="detail-about">Hệ thống tiêu chí kiểm duyệt</div>
                  <div className="detail-about">Mở shop trên Sendo</div>
                </div>
              </div>
              <div className="about-item">
                <div className="title-about">TẢI ỨNG DỤNG SENDO</div>
                <div>
                  <div className="detail-about">Mang thế giới mua sắm của Sendo trong tầm tay bạn</div>
                  <div className="list-img-about">
                    <img
                      src="https://media3.scdn.vn/img4/2020/12_16/5lUTWdk3DXr8nlC9MDII.png"
                      className="img-about"
                    />
                    <img
                      src="https://media3.scdn.vn/img4/2021/10_26/0ZARLASzVrfL92924rzW.png"
                      className="img-about"
                    />
                    <img
                      src="https://media3.scdn.vn/img4/2021/03_19/AMV086JNpEbm4OGAvVng.png"
                      className="img-about"
                    />
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className="footer-contact">
          <div className="content section footer-item-contact">
          <div className="left-contact">
                <div className="name-company">
                  Công ty Cổ phần Công nghệ Sen Đỏ, thành viên của Tập đoàn FPT
                </div>
                <div className="detail-company">
                  Số ĐKKD: 0312776486 - Ngày cấp: 13/05/2014, được sửa đổi lần
                  thứ 20, ngày 26/04/2022.
                </div>
                <div className="detail-company">
                  Cơ quan cấp: Sở Kế hoạch và Đầu tư TPHCM.
                </div>
                <div className="detail-company">
                  Địa chỉ: Tầng 5, Tòa nhà A, Vườn Ươm Doanh Nghiệp, Lô D.01,
                  Đường Tân Thuận, Khu chế xuất Tân Thuận, Phường Tân Thuận
                  Đông, Quận 7, Thành phố Hồ Chí Minh, Việt Nam.
                </div>
                <div className="detail-company">Email: lienhe@sendo.vn</div>
                <div className="detail-company">
                  <div className="policy">
                    <img src="https://media3.scdn.vn/img4/2020/12_16/XhpGDnvWqrlKeHLst3aS.png" />
                    <img src="https://media3.scdn.vn/img4/2020/12_16/h6lEMGIAt4Uapd0Mls34.png" />
                  </div>
                </div>
              </div>
              <div className="right-contact">
                <div className="title-contact">
                  Đăng ký nhận bản tin ưu đãi khủng từ Sendo
                </div>
                <form className="form-contact">
                  <input
                    placeholder="Email của bạn là"
                    type="text"
                    inputMode="email"
                  />
                  <button>Đăng ký</button>
                </form>
              </div>
          </div>
        </div>
        <div className="footer-top-search">
          <div className="content section footer-item-search">
            <div className="search-title">
                  <span>TOP TÌM KIẾM</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xlink="http://www.w3.org/1999/xlink"
                    class="d7ed-SwZDZ2"
                  >
                    <path
                      fill="#0f1e29"
                      fill-rule="nonzero"
                      d="M12 13.214 17.524 8 19 9.393 12 16 5 9.393 6.476 8z"
                    ></path>
                  </svg>
                </div>
                <div className="key-word">
                  <span>Đồng Hồ</span>
                  <span>SHOPPING Mall</span>
                  <span>Thế Giới Di Động</span>
                  <span>Bánh Trung Thu Kinh Đô</span>
                  <span>Black Friday</span>
                  <span>Tivi</span>
                  <span>Mỹ phẩm hàn quốc</span>
                  <span>Kem chống nắng</span>
                  <span>Chợ Tốt</span>
                  <span>Shopee</span>
                  <span>Corona Virus</span>
                  <span>Đồ chơi nấu ăn</span>
                  <span>Laptop</span>
                  <span>iPhone 6</span>
                  <span>Bàn phím</span>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
