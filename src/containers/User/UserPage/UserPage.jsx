import "./UserPage.scss";

const UserPage = () => {
  return (
    <>
      <div className="UserPage__container">
        <form id="modify-info-form">
          <h2>Thông tin cá nhân</h2>

          <label htmlFor="full-name">Họ tên đầy đủ</label>
          <input type="text" id="full-name" name="full-name" required />

          <label htmlFor="birthday">Ngày sinh</label>
          <div className="groupInput">
            <div className="input_field" style={{ width: "25%" }}>
              <input
                type="number"
                name="day"
                id="day"
                
                min={1}
                max={31}
              />
            </div>
            <span>/</span>
            <div className="input_field" style={{ width: "25%" }}>
              <input
                type="number"
                name="month"
                id="month"
                
                min={1}
                max={12}
              />
            </div><span>/</span>
            <div className="input_field" style={{ width: "50%" }}>
              <input
                type="number"
                name="year"
                id="year"
                
                min={1}
              />
            </div>
          </div>

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone-number">Số điện thoại:</label>
          <input type="tel" id="phone-number" name="phone-number" required />

          <button type="submit">Lưu thay đổi</button>
        </form>

        <form id="change-password-form">
          <h2>Đổi mật khẩu</h2>

          <label htmlFor="current-password">Nhập mật khẩu hiện tại</label>
          <input
            type="password"
            id="current-password"
            name="current-password"
            required
          />

          <label htmlFor="new-password">Nhập mật khẩu mới</label>
          <input
            type="password"
            id="new-password"
            name="new-password"
            required
          />

          <label htmlFor="confirm-password">Nhập lại mật khẩu mới</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            required
          />

          <button type="submit">Đổi mật khẩu</button>
        </form>
      </div>
    </>
  );
};

export default UserPage;
