import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getUserProfile, login } from "../../../service/userService";
import "./Login.scss";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Vui lòng nhập đúng định dạng email")
        .required("Bạn chưa nhập email"),
      password: Yup.string()
        .min(6, "Password phải nằm trong khoảng 6-20 kí tự")
        .max(20, "Password phải nằm trong khoảng 6-20 kí tự")
        .required("Bạn chưa nhập mật khẩu"),
    }),
    onSubmit: async (values) => {
      const res = await login(values.email, values.password);
      if (res.status === 200) {
        localStorage.setItem("token", res.data.data.accessToken);
        const res2 = await getUserProfile();
        if (res2.status === 200) {
          localStorage.setItem(
            "profile",
            JSON.stringify(res2.data.data.profile)
          );
          toast.success("Đăng nhập thành công");
          navigate("/");
        }
      } else {
        toast.error("Tài khoản hoặc mật khẩu không chính xác");
      }
    },
  });
  return (
    <>
      <div className="page">
        <div className="login__container">
          <div className="login__title">Đăng nhập</div>
          <div className="login__form">
            <form onSubmit={formik.handleSubmit}>
              <div className="input_field">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                <div className="error_message">
                  {formik.touched.username && formik.errors.username}
                </div>
              </div>

              <div className="input_field">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Mật khẩu"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                <div className="error_message">
                  {formik.touched.password && formik.errors.password}
                </div>
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
