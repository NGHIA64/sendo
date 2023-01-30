import React, { Component } from "react";
import { product } from "./data";
class AllProduct extends Component {
  render() {
    console.log(product)
    return (
      <div className="all-product">
        {product.map((item, index) => {
          return (
            <>
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
            </>
          );
        })}
      </div>
    );
  }
}

export default AllProduct;
