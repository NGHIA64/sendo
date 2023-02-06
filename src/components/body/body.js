import React, { Component } from "react";
import btnScrollToTop from "../../img/btn-scroll-to-top.svg";
import AdsProduct from "./adsProduct";
import UnChecked from "../../comon/component/UnChecked";
import Checked from "../../comon/component/Checked";
import CheckSort from "../../comon/component/checkSort";
import UnCheckSort from "../../comon/component/uncheckSort";
import Exspand from "../../comon/component/exspand";
import Collapse from "../../comon/component/collapse";
import { data_filter } from "./filter";
class Body extends Component {
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
    conditionFilter: [],
    sortSelect: false,
    sortValue: "Đề cử",
    data: [],
    isLoaded: false,
    exspand: [],
    viewAllFilter: [],
    showButton: false,
  };
  showSortSelect(event) {
    console.log("ok");
    if (this.state.sortSelect == false) {
      this.setState({
        sortSelect: true,
      });
      document.getElementById("sort-select").style = "display: block;";
      document.querySelector(".sort>div").style =
        "box-shadow: 0 0 0 1px #3f81fe;border-color: #3f81fe;";
    } else {
      this.setState({
        sortSelect: false,
      });
      document.getElementById("sort-select").style.display = "none";
      document.querySelector(".sort>div").style = "border: 1px solid #cfd2d4;";
    }
  }
  viewAllFilter(value){
    let pushArr = this.state.viewAllFilter;
    if (this.isInArray(value, pushArr)) {
      this.removeElement(pushArr, value);
    } else {
      pushArr.push(value);
    }
    this.setState({
      viewAllFilter: pushArr,
    });
  }
  exspand(value){
    let pushArr = this.state.exspand;
    if (this.isInArray(value, pushArr)) {
      this.removeElement(pushArr, value);
    } else {
      pushArr.push(value);
    }
    this.setState({
      exspand: pushArr,
    });
  }
  props = {
    test: "",
  };
  changeSate(event) {
    // console.log(event.target.value);
    this.setState({
      name: this.props,
    });
  }

  checkInput(event) {
    event.preventDefault();
    var data = document.getElementById("input").value;
    console.log(data);
    this.changeSate(data);
  }
  isInArray(value, array) {
    return array.indexOf(value) > -1;
  }
  removeElement(array, elem) {
    var index = array.indexOf(elem);
    if (index > -1) {
      array.splice(index, 1);
    }
  }
  async selectFilter(event, value) {
    this.setState({
      isLoaded: false
    })
    console.log(this.state.isLoaded)
    try {
      let pushArr = this.state.conditionFilter;
      if (this.isInArray(value, pushArr)) {
        this.removeElement(pushArr, value);
      } else {
        pushArr.push(value);
      }
      const response = await fetch("https://sendo-58uy.onrender.com/products/"+pushArr);
      const product = await response.json();
      this.setState({ data: product, isLoaded: true });
      document.getElementById("ads-product").style.display = "none";
    this.setState({
      conditionFilter: pushArr,
    });
    console.log(this.state.conditionFilter);
    console.log(event);
    } catch (err) {
      console.log(err);
    }
    
  }
 async selectSort(value) {
  this.setState({
    isLoaded: false
  })
    try {
      if(this.state.conditionFilter.length != 0){
        var response = await fetch(`https://sendo-58uy.onrender.com/sort/${value}/${this.state.conditionFilter}`);
      }else{
        var response = await fetch(`https://sendo-58uy.onrender.com/all/${value}`);
      }
      const product = await response.json();
      this.setState({ data: product, isLoaded: true, sortValue: value, sortSelect: false });
      document.getElementById('sort-select').style.display='none'
      document.querySelector(".sort>div").style = "border: 1px solid #cfd2d4;";
      document.getElementById("ads-product").style.display = "none";
    } catch (err) {
      console.log(err);
    }
  }
  async componentDidMount() {
    try {
      const response = await fetch("https://sendo-58uy.onrender.com/products");
      const product = await response.json();
      this.setState({ data: product, isLoaded: true });
    } catch (err) {
      console.log(err);
    }
  }
  render() {    
    const test = this.state.data.map((x) => x);
    var filter = test
    if(this.props.test!=''){  filter = test.filter((notification) =>
      notification.name.includes(this.props.test)
    );}
    // console.log(this.conditionFilter);
    return (
      <div className="body .not-black-out">
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
              {data_filter.map( (item, index) => {
                if(item.attribute_name && item.attribute_name != 'Màu sắc' && item.attribute_name != 'Khoảng giá' && item.attribute_name != 'Đánh giá'){
                  return <>
                  <div className="item-filter">
                <div className="header-filter">
                  <span>{item.attribute_name}</span>
                  <button className="block" onClick={(event) => this.exspand(item.attribute_name)}>
                  {this.state.exspand?.includes(item.attribute_name) ? (
                      <Exspand/>
                    ) : (
                      <Collapse/>
                    )}
                  </button>
                </div>
                {!this.state.exspand?.includes(item.attribute_name) ? (
                      <div className="body-filter">
                       {this.state.viewAllFilter?.includes(item.attribute_name) ? (<>
                        {item.attribute_value.map( (item, index) => {
                          return <div
                          className="body-filter-item"
                          onClick={(event) => this.selectFilter(event, item.option_name)}
                        >
                          {this.state.conditionFilter?.includes(item.option_name) ? (
                            <Checked />
                          ) : (
                            <UnChecked />
                          )}
                          <span>{item.option_name}</span>
                        </div>
                        })}</>) : (<>{item.attribute_value.slice(0, 4).map( (item, index) => {
                          return <div
                          className="body-filter-item"
                          onClick={(event) => this.selectFilter(event, item.option_name)}
                        >
                          {this.state.conditionFilter?.includes(item.option_name) ? (
                            <Checked />
                          ) : (
                            <UnChecked />
                          )}
                          <span>{item.option_name}</span>
                        </div>
                        })}</>)}
                    </div>
                    ) : (
                      <></>
                    )}
                
                {item.attribute_value.length < 5 ? (<></>) : (<><div className="footer-filter" onClick={() => this.viewAllFilter(item.attribute_name)}>
                {this.state.viewAllFilter?.includes(item.attribute_name) ? (
                          <div className="footer-filter-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1" xlink="http://www.w3.org/1999/xlink" class="d7ed-SwZDZ2 d7ed-w34diS"><path fill="#3f4b53" fill-rule="nonzero" d="M22 11v2H2v-2z"></path></svg>
                      <span>Thu gọn</span>
                        </div>
                        ) : (
                          <div className="footer-filter-item">
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
                        )}
                </div></>)}
              </div>
              <hr /></>
                }
              })}
              <div className="item-filter">
                <div className="header-filter">
                  <span>Khoảng giá</span>
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
                <div className="body-filter filter-gia">
                  <div className="input-price-block">
                    <div>
                      <div className="input-price">
                        <span>Thấp nhất</span>
                        <input />
                      </div>
                      <span>{"-"}</span>
                      <div className="input-price">
                        <span>Cao nhất</span>
                        <input />
                      </div>
                    </div>
                    <button>Áp dụng</button>
                  </div>
                  <div className="select-price">
                    <span>Dưới 200K</span>
                    <span>200K - 250K</span>
                    <span>250K - 550K</span>
                    <span>550K - 1M</span>
                  </div>
                  <div className="footer-filter">
                   <div className="footer-filter-item">
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
                </div>
              </div>
              <hr />
              <div className="item-filter">
                <div className="header-filter">
                  <span>Đánh giá</span>
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
                <div className="body-filter filter-gia filter-star">
                  <div className="select-price">
                    <span>5 sao</span>
                    <span>{"4-5 sao"}</span>
                    <span>{"3-5 sao"}</span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="item-filter">
                <div className="header-filter">
                  <span>Màu sắc</span>
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
                <div className="body-filter filter-color filter-gia">
                  <button
                    style={{ backgroundColor: "rgb(128, 64, 0)" }}
                  ></button>
                  <button style={{ backgroundColor: "#fff" }}></button>
                  <button
                    style={{ backgroundColor: "rgb(153, 153, 153)" }}
                  ></button>
                  <button style={{ backgroundColor: "#333" }}></button>
                  <button
                    style={{ backgroundColor: "rgb(0, 112, 0)" }}
                  ></button>
                  <button
                    style={{ backgroundColor: "rgb(255, 255, 0)" }}
                  ></button>
                  <button
                    style={{ backgroundColor: "rgb(17, 44, 78)" }}
                  ></button>
                  <button
                    style={{ backgroundColor: "rgb(0, 128, 255)" }}
                  ></button>
                  <button
                    style={{ backgroundColor: "rgb(255, 0, 0)" }}
                  ></button>
                  <button
                    style={{ backgroundColor: "rgb(255, 128, 64)" }}
                  ></button>
                </div>
              </div>
              <hr />
            </div>
            <div className="left-body">
              <div className="sort">
                <span>Sắp xếp theo:</span>
                <div className="block not-black-out">
                  <div
                    className="sort-default block"
                    onClick={(event) => this.showSortSelect(event)}
                  >
                    <div>{this.state.sortValue}</div>
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
                  <div className="sort-select block" id="sort-select">
                    <div className="sort-select-item" onClick={()=> this.selectSort('Đề cử')}>
                      <span>Đề cử</span>
                      {this.state.sortValue?.includes("Đề cử") ? (
                      <CheckSort />
                    ) : (
                      <UnCheckSort />
                    )}
                    </div>
                    <div className="sort-select-item" onClick={()=> this.selectSort('Bán chạy')}>
                      <span>Bán chạy</span>
                      {this.state.sortValue?.includes("Bán chạy") ? (
                      <CheckSort />
                    ) : (
                      <UnCheckSort />
                    )}
                    </div>
                    <div className="sort-select-item" onClick={()=> this.selectSort('Giá thấp')}>
                      <span>Giá thấp</span>
                      {this.state.sortValue?.includes("Giá thấp") ? (
                      <CheckSort />
                    ) : (
                      <UnCheckSort />
                    )}
                    </div>
                    <div className="sort-select-item" onClick={()=> this.selectSort('Giá cao')}>
                      <span>Giá cao</span>
                      {this.state.sortValue?.includes("Giá cao") ? (
                      <CheckSort />
                    ) : (
                      <UnCheckSort />
                    )}
                    </div>
                    <div className="sort-select-item" onClick={()=> this.selectSort('Lượt yêu thích')}>
                      <span>Lượt yêu thích</span>
                      {this.state.sortValue?.includes("Lượt yêu thích") ? (
                      <CheckSort />
                    ) : (
                      <UnCheckSort />
                    )}
                    </div>
                  </div>
                </div>
              </div>
              <AdsProduct />
              {!this.state.isLoaded ? (
                <div class="loader"></div>
              ) : (
                <>
                  <div className="all-product">
                    {filter.map((item, index) => {
                      return (
                        <>
                          <a className="product-item">
                            <img src={item?.image} />
                            <div className="info-product">
                              <div className="branch">
                                <img src="https://media3.scdn.vn/img4/2021/10_21/mFcIndYzGOkBpNH6w5oN.png" />
                              </div>
                              <div className="name">
                                <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />
                                <span>{item?.name}</span>
                              </div>
                              <div className="sale">
                                <span>{`${this.numberWithCommas(
                                  item?.default_price_min
                                )}đ`}</span>
                                <div>
                                  {this.checkPercent(item?.sale_percent)}
                                </div>
                              </div>
                              <div className="price">{`${this.numberWithCommas(
                                item?.sale_price_max
                              )}đ`}</div>
                              <div className="tra-gop">
                                <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" />
                                Trả góp Kredivo
                              </div>
                              <div className="sold">Đã bán {item?.sold}</div>
                              <div className="quality">
                                <div>
                                  <span>{item?.rated?.star}/5</span>
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
                                  {item?.shop?.ware_house_region_name}
                                </div>
                              </div>
                            </div>
                          </a>
                        </>
                      );
                    })}
                  </div>
                  {filter.length != 0 ? (<div className="footer-sidebar">
                    <button className="btn-xem-them-product">Xem thêm</button>
                  </div>) : (<></>)}
                </>
              )}
            </div>
          </div>
        </div>
        <div className="btn-scroll-to-top block" onClick={this.scrollToTop}>

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
    );
  }
}

export default Body;
