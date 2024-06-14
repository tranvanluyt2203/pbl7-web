import { useFormik } from "formik";
import * as Yup from "yup";
import "./UserPage.scss";
import { useEffect, useState } from "react";
import {
  updateUserPassword,
  updateUserProfile,
} from "../../../service/userService";
import { toast } from "react-toastify";

const UserPage = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const profile = localStorage.getItem("profile");
    if (profile !== null) {
      setUser(JSON.parse(profile));
    }
  }, []);
  const infoFormik = useFormik({
    initialValues: {
      avatar: user.avatar || "",
      fullname: user.fullname || "",
      phone: user.phone_number || "",
      address: user.address || "",
      email: user.email || "",
    },
    validationSchema: Yup.object({
      fullname: Yup.string().required("Họ tên không được để trống"),
      address: Yup.string(),
      phone: Yup.string(),
    }),
    onSubmit: async (values) => {
      const res = await updateUserProfile(
        values.fullname,
        values.address,
        values.phone,
        values.email
      );
      if (res.status === 200) {
        localStorage.setItem(
          "profile",
          JSON.stringify({
            avatar: values.avatar,
            fullname: values.fullname,
            phone_number: values.phone,
            address: values.address,
            email: values.email,
          })
        );
        toast.success("Cập nhật thông tin thành công");
      } else {
        toast.error("Có lỗi xảy ra, vui lòng thử lại");
      }
    },
  });

  const passwordFormik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      currentPassword: Yup.string()
        .required("Nhập mật khẩu hiện tại")
        .min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
      newPassword: Yup.string()
        .required("Nhập mật khẩu mới")
        .min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword"), null], "Mật khẩu không khớp")
        .required("Nhập lại mật khẩu mới"),
    }),
    onSubmit: async (values) => {
      const res = await updateUserPassword(
        values.currentPassword,
        values.newPassword
      );
      if (res.status === 200) {
        toast.success("Đổi mật khẩu thành công");
        passwordFormik.resetForm();
      } else {
        toast.error("Mật khẩu cũ không chính xác");
      }
    },
  });

  useEffect(() => {
    if (infoFormik.values.fullname === "") {
      infoFormik.setValues({
        avatar: user.avatar || "",
        fullname: user.fullname || "",
        phone: user.phone_number || "",
        address: user.address || "",
        email: user.email || "",
      });
    }
  }, [user, infoFormik]);

  return (
    <>
      <div className="UserPage__container">
        <form id="modify-info-form" onSubmit={infoFormik.handleSubmit}>
          <h2>Thông tin cá nhân</h2>

          <label htmlFor="fullname">Họ tên đầy đủ</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            required
            value={infoFormik.values.fullname}
            onChange={infoFormik.handleChange}
          />
          <div className="error_message">
            {infoFormik.touched.fullname && infoFormik.errors.fullname}
          </div>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            disabled
            value={infoFormik.values.email}
          />

          <label htmlFor="address">Địa chỉ:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={infoFormik.values.address}
            onChange={infoFormik.handleChange}
          />

          <label htmlFor="phone">Số điện thoại:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={infoFormik.values.phone}
            onChange={infoFormik.handleChange}
          />

          <button type="submit">Lưu thay đổi</button>
        </form>

        <form id="change-password-form" onSubmit={passwordFormik.handleSubmit}>
          <h2>Đổi mật khẩu</h2>

          <label htmlFor="currentPassword">Nhập mật khẩu hiện tại</label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            required
            value={passwordFormik.values.currentPassword}
            onChange={passwordFormik.handleChange}
          />
          <div className="error_message">
            {passwordFormik.touched.currentPassword &&
              passwordFormik.errors.currentPassword}
          </div>

          <label htmlFor="newPassword">Nhập mật khẩu mới</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            required
            value={passwordFormik.values.newPassword}
            onChange={passwordFormik.handleChange}
          />
          <div className="error_message">
            {passwordFormik.touched.newPassword &&
              passwordFormik.errors.newPassword}
          </div>

          <label htmlFor="confirmPassword">Nhập lại mật khẩu mới</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            value={passwordFormik.values.confirmPassword}
            onChange={passwordFormik.handleChange}
          />
          <div className="error_message">
            {passwordFormik.touched.confirmPassword &&
              passwordFormik.errors.confirmPassword}
          </div>

          <button type="submit">Đổi mật khẩu</button>
        </form>
      </div>
    </>
  );
};

export default UserPage;
