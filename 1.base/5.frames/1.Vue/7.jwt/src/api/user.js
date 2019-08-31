import axios from "../libs/ajaxRequest";
export const getUser = () => {
  axios.request({
    url: "/user",
    method: "get"
  });
};
export const login = username => {
  return axios.request({
    method: "post",
    url: "/login",
    data: {
      username
    }
  });
};

export const validate = () => {
  return axios.request({
    method: "get",
    url: "/validate"
  });
};
