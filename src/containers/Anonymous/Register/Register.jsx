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
                    name="username"
                    id="username"
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
                    name="password"
                    id="password"
                    placeholder="Nhập lại mật khẩu"
                  />
                </div>
              </div>
              <button type="submit">Đăng kí</button>
            </form>
          </div>
          <div className="register__alter">
            Bạn chưa có tài khoản?{" "}
            <span>
              <a href="#">Đăng kí ngay</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
