import instance from "./axiosCustomize";
const login = (username, password) => {
  return instance.post("api/v1/login", {
    email: username,
    password: password,
  });
};

const logout = () => {
  return instance.post("api/v1/logout");
};

const register = (email, password) => {
  return instance.post("/api/v1/register", {
    email: email,
    password: password,
  });
};
const getUserProfile = () => {
  return instance.get("/api/v1/get_profile");
};

const updateUserProfile = (avatar, fullname, address, phone, email) => {
  return instance.post("/api/v1/update_profile", {
    avatar: avatar,
    fullname: fullname,
    address: address,
    phone_number: phone,
    email: email,
  });
};

const updateUserPassword = (old_password, new_password) => {
  return instance.post("api/v1/change_password", {
    old_password: old_password,
    new_password: new_password,
  });
};

const getCategories = () => {
    return instance.get("api/v1/get_categories")
}

const getRecommended = () => {
    return instance.get("api/v1/product_recommender")
}

const getProductByID = (id) => {
    return instance.get("api/v1/get_detail_product_by_id/?productId=" + id)
}

const getProductInCategory = (id) => {
    return instance.get("api/v1/get_list_id_products_from_category?name=" + id)
}

export {
  login,
  logout,
  register,
  getUserProfile,
  updateUserProfile,
  updateUserPassword,
  getCategories,
  getRecommended,
  getProductByID,
  getProductInCategory
};
