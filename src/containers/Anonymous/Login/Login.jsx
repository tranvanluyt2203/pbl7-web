import "./Login.scss";

const Login = () => {
  return (
    <>
      <div className="page">
        <div className="login__container">
          <div className="login__title">Đăng nhập</div>
          <div className="login__form">
            <form action="">
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
              <div className="link_field">
                <a href="#">Quên mật khẩu</a>
              </div>
              <button type="submit">Đăng nhập</button>
            </form>
          </div>
          <div className="login__alter">
            Bạn chưa có tài khoản?{" "}
            <span>
              <a href="/register">Đăng kí ngay</a>
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

export default Login;
