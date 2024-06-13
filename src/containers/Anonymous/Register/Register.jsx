import "./Register.scss";

const Register = () => {
  return (
    <>
      <div className="page">
        <div className="register__container">
          <div className="register__title">Đăng kí tài khoản</div>
          <div className="register__form">
            <form action="">
              <div className="input">
                <div className="input_field">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="input_field">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Mật khẩu"
                  />
                </div>
                <div className="input_field">
                  <input
                    type="password"
                    name="password_confirm"
                    id="password_confirm"
                    placeholder="Nhập lại mật khẩu"
                  />
                </div>
                <div className="input_field">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Họ tên"
                  />
                </div>
                <div className="groupInput">
                  <div className="input_field" style={{width: "25%"}}>
                    <input type="number" name="day" id="day" placeholder="Ngày sinh" min={1} max={31}/>
                  </div>
                  <div className="input_field" style={{width: "25%"}}>
                    <input type="number" name="month" id="month" placeholder="Tháng sinh" min={1} max={12}/>
                  </div>
                  <div className="input_field" style={{width: "50%"}}>
                    <input type="number" name="year" id="year" placeholder="Năm sinh" min={1}/>
                  </div>
                </div>
                <div className="input_field">
                    <input type="number" name="phone" id="phone" placeholder="Số điện thoại"/>
                  </div>
              </div>
              <button type="submit">Đăng kí</button>
            </form>
          </div>
          <div className="register__alter">
            Bạn đã có tài khoản?{" "}
            <span>
              <a href="/login">Đăng nhập ngay</a>
            </span>
          </div>
          <div className="back">
            <a href="/">
              <i className="fa-solid fa-house"></i>Về trang chủ
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
