import { useNavigate } from "react-router-dom";
import "./Register.scss";
import * as Yup from "yup";
import { useFormik } from "formik";
import { register } from "../../../service/userService";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      phone: "",
      address: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email không hợp lệ")
        .required("Email không được bỏ trống"),
      password: Yup.string()
        .min(6, "Mật khẩu phải có tối thiểu 6 kí tự")
        .required("Mật khẩu không được bỏ trống"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Mật khẩu không trùng khớp")
        .required("Mật khẩu không được bỏ trống"),
    }),
    onSubmit: async (values) => {
      const res = await register(values.email, values.password);
      if (res.status === 201) {
        toast.success("Đăng kí thành công!");
        navigate("/login")
      } else {
        toast.error("Có lỗi xảy ra, vui lòng thử lại");
      }
    },
  });
  return (
    <>
      <div className="page">
        <div className="register__container">
          <div className="register__title">Đăng kí tài khoản</div>
          <div className="register__form">
            <form action="" onSubmit={formik.handleSubmit}>
              <div className="input">
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
                    {formik.touched.email && formik.errors.email}
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
                <div className="input_field">
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Nhập lại mật khẩu"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                  />
                  <div className="error_message">
                    {formik.touched.confirmPassword &&
                      formik.errors.confirmPassword}
                  </div>
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
