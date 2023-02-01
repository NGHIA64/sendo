import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
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
                <div className="detail-about">
                  Mang thế giới mua sắm của Sendo trong tầm tay bạn
                </div>
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
                Số ĐKKD: 0312776486 - Ngày cấp: 13/05/2014, được sửa đổi lần thứ
                20, ngày 26/04/2022.
              </div>
              <div className="detail-company">
                Cơ quan cấp: Sở Kế hoạch và Đầu tư TPHCM.
              </div>
              <div className="detail-company">
                Địa chỉ: Tầng 5, Tòa nhà A, Vườn Ươm Doanh Nghiệp, Lô D.01,
                Đường Tân Thuận, Khu chế xuất Tân Thuận, Phường Tân Thuận Đông,
                Quận 7, Thành phố Hồ Chí Minh, Việt Nam.
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
        );
    }
}

export default Footer;
