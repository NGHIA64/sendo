import React, { Component } from "react";
import { data } from "./data";
class AllProduct extends Component {
  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  checkPercent(x) {
    if (x) {
      return `-${x}%`;
    } else {
      return;
    }
  }
  checkPrice(x) {
    if (x) {
      return `${this.numberWithCommas(x)}đ`;
    } else {
      return;
    }
  }
  state = {
    name: "",
  };
  props = {
    test: ''
  }
  changeSate(event) {
    // console.log(event.target.value);
    this.setState({
      name: this.props,
    });
  }
  render() {
    var filter;
    // console.log(this.props);
    console.log(this.props.test);
    filter = data.allProduct.filter(item => item.name.includes(this.props.test));
    console.log(filter)
    return (
      <>
        <div className="ads-product">
          <span>Sản phẩm được tài trợ</span>
          <div>
            {data.adsProduct.map((item, index) => {
              return (
                <>
                  <a className="product-item">
                    <img src={item.image} />
                    <div className="info-product">
                      <div className="branch">
                        <img src="https://media3.scdn.vn/img4/2021/10_21/mFcIndYzGOkBpNH6w5oN.png" />
                      </div>
                      <div className="name">
                        <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />
                        <span>{item.name}</span>
                      </div>
                      <div className="sale">
                        <span>{`${this.numberWithCommas(
                        item.default_price_min
                      )}đ`}</span>
                        <div>{this.checkPercent(item.sale_percent)}</div>
                      </div>
                      <div className="price">{`${this.numberWithCommas(
                      item.sale_price_max
                    )}đ`}</div>
                      <div className="sold">Đã bán {item.sold}</div>
                      <div className="quality">
                        <div>
                          <span>{item.rated.star}/5</span>
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
                        <div className="adress">{item.shop.ware_house_region_name}</div>
                      </div>
                    </div>
                  </a>
                </>
              );
            })}
          </div>
        </div>
        <div className="all-product">
          {data.allProduct.map((item, index) => {
            return (
              <>
                <a className="product-item">
                  <img src={item.image} />
                  <div className="info-product">
                    <div className="branch">
                      <img src="https://media3.scdn.vn/img4/2021/10_21/mFcIndYzGOkBpNH6w5oN.png" />
                    </div>
                    <div className="name">
                      <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />
                      <span>{item.name}</span>
                    </div>
                    <div className="sale">
                      <span>{`${this.numberWithCommas(
                        item.default_price_min
                      )}đ`}</span>
                      <div>{this.checkPercent(item.sale_percent)}</div>
                    </div>
                    <div className="price">{`${this.numberWithCommas(
                      item.sale_price_max
                    )}đ`}</div>
                    <div className="tra-gop">
                      <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" />
                      Trả góp Kredivo
                    </div>
                    <div className="sold">Đã bán {item.sold}</div>
                    <div className="quality">
                      <div>
                        <span>{item.rated.star}/5</span>
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
                      <div className="adress">
                        {item.shop.ware_house_region_name}
                      </div>
                    </div>
                  </div>
                </a>
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default AllProduct;
