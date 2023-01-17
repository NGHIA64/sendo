import "./App.css";
import logo from "./img/logo.svg";
import menu from "./img/menu.svg";
import cart from "./img/cart.svg";
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
                <input className="input-search" value="giày nam" />
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
                <img src={cart} />
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
              <span> / Kết quả tìm kiếm</span>
            </div>
            <div className="main-header-2">
              <span>giày nam </span>Tìm thấy hơn 10.000 sản phẩm
            </div>
          </div>
          <div className="main-body">
            <div className="sidebar-left">
              <div className="sidebar-left-item">
                <div className="top-sidebar-left-item">
                  <span>Địa điểm</span>
                  <button className="button-item-sidebar-left">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                    >
                      <path
                        fill="#3f4b53"
                        fill-rule="nonzero"
                        d="M12 10.786L6.476 16 5 14.607 12 8l7 6.607L17.524 16z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="bottom-sidebar-left-item">
                  <div>
                    <div className="item-deitail-sidebar">
                      <label>
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
                        <input
                          readOnly
                          type="checkbox"
                          value="Hà Nội"
                          className="input-checkbox-sidebar"
                        />
                      </label>
                    </div>
                    <div className="item-deitail-sidebar">
                      <label>
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
                        <input
                          readOnly
                          type="checkbox"
                          value="Hà Nội"
                          className="input-checkbox-sidebar"
                        />
                      </label>
                    </div>
                    <div className="item-deitail-sidebar">
                      <label>
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
                        <input
                          readOnly
                          type="checkbox"
                          value="Hà Nội"
                          className="input-checkbox-sidebar"
                        />
                      </label>
                    </div>
                    <div className="item-deitail-sidebar">
                      <label>
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
                        <input
                          readOnly
                          type="checkbox"
                          value="Hà Nội"
                          className="input-checkbox-sidebar"
                        />
                      </label>
                    </div>
                    <button className="btn-xem-them">
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
                    </button>
                  </div>
                </div>
              </div>
              <hr className="hr-divide-sidebar-item"></hr>
              <div className="sidebar-left-item">
                <div className="top-sidebar-left-item">
                  <span>Phương thức vận chuyển</span>
                  <button className="button-item-sidebar-left">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                    >
                      <path
                        fill="#3f4b53"
                        fill-rule="nonzero"
                        d="M12 10.786L6.476 16 5 14.607 12 8l7 6.607L17.524 16z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="bottom-sidebar-left-item"></div>
              </div>
            </div>
            <div className="sidebar-right">
              <div className="sort">
                <span>Sắp xếp theo: </span>
                <div>
                  <div className="sort-input">
                    <span>Đề cử</span>
                    <input type="hidden" />
                    <div>
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
                </div>
              </div>
              <div className="ads-products">
                <div className="branch-ads-name">Sản phẩm được tài trợ</div>
                <div className="list-ads-product">
                  <div className="ads-product-item">
                    <a>
                      <div>
                        <div className="img-ads-product">
                          <img src="https://media3.scdn.vn/img2/2017/12_27/FUoShO_simg_3eb0ac_844-844-37-9_cropf_simg_de2fe0_250x250_maxb.jpg" />
                        </div>
                        <div className="deitail-product">
                          <span className="branch-ads">
                            <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />{" "}
                            Giày Sneaker VNS Old Màu Đen Nam
                          </span>
                          <div className="old-price"></div>
                          <div className="price">175.000đ</div>
                          <div className="numbers-sale">Đã bán 125</div>
                          <div className="star">
                            <span>
                              4.6/5{" "}
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
                            </span>
                            <div className="adress">TP.HCM</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="ads-product-item">
                    <a>
                      <div>
                        <div className="img-ads-product">
                          <img src="https://media3.scdn.vn/img4/2021/03_20/a4wA6d4nJ4WM3f33Cjv8_simg_de2fe0_250x250_maxb.jpg" />
                        </div>
                        <div className="deitail-product">
                          <span className="branch-ads">
                            <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />{" "}
                            Giày Sneaker VNS Old Màu Đen Nam
                          </span>
                          <div className="old-price"></div>
                          <div className="price">175.000đ</div>
                          <div className="numbers-sale">Đã bán 125</div>
                          <div className="star">
                            <span>
                              4.6/5{" "}
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
                            </span>
                            <div className="adress">TP.HCM</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="ads-product-item">
                    <a>
                      <div>
                        <div className="img-ads-product">
                          <img src="https://media3.scdn.vn/img4/2021/01_01/HfV0lvYLJZjqZCOzH9t0_simg_de2fe0_250x250_maxb.jpg" />
                        </div>
                        <div className="deitail-product">
                          <span className="branch-ads">
                            <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />{" "}
                            Giày Sneaker VNS Old Màu Đen Nam
                          </span>
                          <div className="old-price"></div>
                          <div className="price">175.000đ</div>
                          <div className="numbers-sale">Đã bán 125</div>
                          <div className="star">
                            <span>
                              4.6/5{" "}
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
                            </span>
                            <div className="adress">TP.HCM</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="ads-product-item">
                    <a>
                      <div>
                        <div className="img-ads-product">
                          <img src="https://media3.scdn.vn/img4/2021/04_03/9zhzd88dsrFURZdnoqyl_simg_de2fe0_250x250_maxb.jpg" />
                        </div>
                        <div className="deitail-product">
                          <span className="branch-ads">
                            <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />{" "}
                            Giày Sneaker VNS Old Màu Đen Nam
                          </span>
                          <div className="old-price"></div>
                          <div className="price">175.000đ</div>
                          <div className="numbers-sale">Đã bán 125</div>
                          <div className="star">
                            <span>
                              4.6/5{" "}
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
                            </span>
                            <div className="adress">TP.HCM</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="ads-product-item">
                    <a>
                      <div>
                        <div className="img-ads-product">
                          <img src="https://media3.scdn.vn/img4/2021/02_20/a4u8ix3clwWA4csAB7V7_simg_de2fe0_250x250_maxb.jpg" />
                        </div>
                        <div className="deitail-product">
                          <span className="branch-ads">
                            <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />{" "}
                            Giày Sneaker VNS Old Màu Đen Nam
                          </span>
                          <div className="old-price"></div>
                          <div className="price">175.000đ</div>
                          <div className="numbers-sale">Đã bán 125</div>
                          <div className="star">
                            <span>
                              4.6/5{" "}
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
                            </span>
                            <div className="adress">TP.HCM</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <button className="previous-ads">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-w34diS"
                    >
                      <path
                        fill="#6F787E"
                        fill-rule="nonzero"
                        d="M10.786 12 16 17.524 14.607 19 8 12l6.607-7L16 6.476z"
                      ></path>
                    </svg>
                  </button>
                  <button className="next-ads">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      class="d7ed-SwZDZ2 d7ed-w34diS"
                    >
                      <path
                        fill="#6F787E"
                        fill-rule="nonzero"
                        d="M13.214 12 8 6.476 9.393 5 16 12l-6.607 7L8 17.524z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="all-products">
                <div className="ads-product-item">
                  <a className="main-product">
                    <div>
                      <div className="img-ads-product">
                        <img src="https://media3.scdn.vn/img4/2021/02_20/a4u8ix3clwWA4csAB7V7_simg_de2fe0_250x250_maxb.jpg" />
                      </div>
                      <div className="deitail-product">
                        <span className="branch-ads">
                          <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />{" "}
                          Giày Sneaker VNS Old Màu Đen Nam
                        </span>
                        <div className="old-price"></div>
                        <div className="price">175.000đ</div>
                        <div className="tra-gop">
                          <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" />
                          Trả góp Kredivo
                        </div>
                        <div className="numbers-sale">Đã bán 125</div>
                        <div className="star">
                          <span>
                            4.6/5{" "}
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
                          </span>
                          <div className="adress">TP.HCM</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="ads-product-item">
                  <a className="main-product">
                    <div>
                      <div className="img-ads-product">
                        <img src="https://media3.scdn.vn/img4/2021/02_20/a4u8ix3clwWA4csAB7V7_simg_de2fe0_250x250_maxb.jpg" />
                      </div>
                      <div className="deitail-product">
                        <span className="branch-ads">
                          <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />{" "}
                          Giày Sneaker VNS Old Màu Đen Nam
                        </span>
                        <div className="old-price"></div>
                        <div className="price">175.000đ</div>
                        <div className="tra-gop">
                          <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" />
                          Trả góp Kredivo
                        </div>
                        <div className="numbers-sale">Đã bán 125</div>
                        <div className="star">
                          <span>
                            4.6/5{" "}
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
                          </span>
                          <div className="adress">TP.HCM</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="ads-product-item">
                  <a className="main-product">
                    <div>
                      <div className="img-ads-product">
                        <img src="https://media3.scdn.vn/img4/2021/02_20/a4u8ix3clwWA4csAB7V7_simg_de2fe0_250x250_maxb.jpg" />
                      </div>
                      <div className="deitail-product">
                        <span className="branch-ads">
                          <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />{" "}
                          Giày Sneaker VNS Old Màu Đen Nam
                        </span>
                        <div className="old-price"></div>
                        <div className="price">175.000đ</div>
                        <div className="tra-gop">
                          <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" />
                          Trả góp Kredivo
                        </div>
                        <div className="numbers-sale">Đã bán 125</div>
                        <div className="star">
                          <span>
                            4.6/5{" "}
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
                          </span>
                          <div className="adress">TP.HCM</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="ads-product-item">
                  <a className="main-product">
                    <div>
                      <div className="img-ads-product">
                        <img src="https://media3.scdn.vn/img4/2021/02_20/a4u8ix3clwWA4csAB7V7_simg_de2fe0_250x250_maxb.jpg" />
                      </div>
                      <div className="deitail-product">
                        <span className="branch-ads">
                          <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />{" "}
                          Giày Sneaker VNS Old Màu Đen Nam
                        </span>
                        <div className="old-price"></div>
                        <div className="price">175.000đ</div>
                        <div className="tra-gop">
                          <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" />
                          Trả góp Kredivo
                        </div>
                        <div className="numbers-sale">Đã bán 125</div>
                        <div className="star">
                          <span>
                            4.6/5{" "}
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
                          </span>
                          <div className="adress">TP.HCM</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="ads-product-item">
                  <a className="main-product">
                    <div>
                      <div className="img-ads-product">
                        <img src="https://media3.scdn.vn/img4/2021/02_20/a4u8ix3clwWA4csAB7V7_simg_de2fe0_250x250_maxb.jpg" />
                      </div>
                      <div className="deitail-product">
                        <span className="branch-ads">
                          <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />{" "}
                          Giày Sneaker VNS Old Màu Đen Nam
                        </span>
                        <div className="old-price"></div>
                        <div className="price">175.000đ</div>
                        <div className="tra-gop">
                          <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" />
                          Trả góp Kredivo
                        </div>
                        <div className="numbers-sale">Đã bán 125</div>
                        <div className="star">
                          <span>
                            4.6/5{" "}
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
                          </span>
                          <div className="adress">TP.HCM</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="ads-product-item main-product">
                  <a className="main-product">
                    <div>
                      <div className="img-ads-product">
                        <img src="https://media3.scdn.vn/img4/2021/02_20/a4u8ix3clwWA4csAB7V7_simg_de2fe0_250x250_maxb.jpg" />
                      </div>
                      <div className="deitail-product">
                        <span className="branch-ads">
                          <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />{" "}
                          Giày Sneaker VNS Old Màu Đen Nam
                        </span>
                        <div className="old-price"></div>
                        <div className="price">175.000đ</div>
                        <div className="tra-gop">
                          <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" />
                          Trả góp Kredivo
                        </div>
                        <div className="numbers-sale">Đã bán 125</div>
                        <div className="star">
                          <span>
                            4.6/5{" "}
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
                          </span>
                          <div className="adress">TP.HCM</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="ads-product-item main-product">
                  <a className="main-product">
                    <div>
                      <div className="img-ads-product">
                        <img src="https://media3.scdn.vn/img4/2021/02_20/a4u8ix3clwWA4csAB7V7_simg_de2fe0_250x250_maxb.jpg" />
                      </div>
                      <div className="deitail-product">
                        <span className="branch-ads">
                          <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />{" "}
                          Giày Sneaker VNS Old Màu Đen Nam
                        </span>
                        <div className="old-price"></div>
                        <div className="price">175.000đ</div>
                        <div className="tra-gop">
                          <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" />
                          Trả góp Kredivo
                        </div>
                        <div className="numbers-sale">Đã bán 125</div>
                        <div className="star">
                          <span>
                            4.6/5{" "}
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
                          </span>
                          <div className="adress">TP.HCM</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="ads-product-item main-product">
                  <a className="main-product">
                    <div>
                      <div className="img-ads-product">
                        <img src="https://media3.scdn.vn/img4/2021/02_20/a4u8ix3clwWA4csAB7V7_simg_de2fe0_250x250_maxb.jpg" />
                      </div>
                      <div className="deitail-product">
                        <span className="branch-ads">
                          <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />{" "}
                          Giày Sneaker VNS Old Màu Đen Nam
                        </span>
                        <div className="old-price"></div>
                        <div className="price">175.000đ</div>
                        <div className="tra-gop">
                          <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" />
                          Trả góp Kredivo
                        </div>
                        <div className="numbers-sale">Đã bán 125</div>
                        <div className="star">
                          <span>
                            4.6/5{" "}
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
                          </span>
                          <div className="adress">TP.HCM</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="ads-product-item main-product">
                  <a className="main-product">
                    <div>
                      <div className="img-ads-product">
                        <img src="https://media3.scdn.vn/img4/2021/02_20/a4u8ix3clwWA4csAB7V7_simg_de2fe0_250x250_maxb.jpg" />
                      </div>
                      <div className="deitail-product">
                        <span className="branch-ads">
                          <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />{" "}
                          Giày Sneaker VNS Old Màu Đen Nam
                        </span>
                        <div className="old-price"></div>
                        <div className="price">175.000đ</div>
                        <div className="tra-gop">
                          <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" />
                          Trả góp Kredivo
                        </div>
                        <div className="numbers-sale">Đã bán 125</div>
                        <div className="star">
                          <span>
                            4.6/5{" "}
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
                          </span>
                          <div className="adress">TP.HCM</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="ads-product-item main-product">
                  <a className="main-product">
                    <div>
                      <div className="img-ads-product">
                        <img src="https://media3.scdn.vn/img4/2021/02_20/a4u8ix3clwWA4csAB7V7_simg_de2fe0_250x250_maxb.jpg" />
                      </div>
                      <div className="deitail-product">
                        <span className="branch-ads">
                          <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />{" "}
                          Giày Sneaker VNS Old Màu Đen Nam
                        </span>
                        <div className="old-price"></div>
                        <div className="price">175.000đ</div>
                        <div className="tra-gop">
                          <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" />
                          Trả góp Kredivo
                        </div>
                        <div className="numbers-sale">Đã bán 125</div>
                        <div className="star">
                          <span>
                            4.6/5{" "}
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
                          </span>
                          <div className="adress">TP.HCM</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="ads-product-item main-product">
                  <a className="main-product">
                    <div>
                      <div className="img-ads-product">
                        <img src="https://media3.scdn.vn/img4/2021/02_20/a4u8ix3clwWA4csAB7V7_simg_de2fe0_250x250_maxb.jpg" />
                      </div>
                      <div className="deitail-product">
                        <span className="branch-ads">
                          <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />{" "}
                          Giày Sneaker VNS Old Màu Đen Nam
                        </span>
                        <div className="old-price"></div>
                        <div className="price">175.000đ</div>
                        <div className="tra-gop">
                          <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" />
                          Trả góp Kredivo
                        </div>
                        <div className="numbers-sale">Đã bán 125</div>
                        <div className="star">
                          <span>
                            4.6/5{" "}
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
                          </span>
                          <div className="adress">TP.HCM</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                
              </div>
              <div className="footer-sidebar">
                <button className="btn-xem-them-product">Xem thêm</button>
              </div>
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
