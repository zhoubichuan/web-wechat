import axios from "axios";
import store from "../store";
import { getLocal } from "./local";
//当第一次请求 显示loading 剩下的时候就不调用了 当都请求完毕后隐藏loading
class AjaxRequest {
  constructor() {
    this.baseURL =
      process.env.NODE_ENV === "production" ? "/" : "http://localhost:3000";
    this.timeout = 3000;
    this.queue = {}; //存放每次的请求;
  }
  merge(options) {
    return { ...options, baseURL: this.baseURL, timeout: this.timeout };
  }
  setInterceptor(instance, url) {
    //更改请求头
    instance.interceptors.response.use(config => {
      config.headers.Authorization = getLocal("token");
      if (Object.keys(this.queue).length === 0) {
        store.commit("showLoading");
      }
      this.queue[url] = url;
      return config;
    });
    //如果上一个promise返回了一个常量 会作为下一个promise的输入
    instance.interceptors.response.use(res => {
      delete this.queue[url]; //每次请求后删除队列里面的路径
      if (Object.keys(this.queue).length === 0) {
        store.commit("hideLoading");
      }
      return res.data;
    });
  }
  request(options) {
    let instance = axios.create(); //通过axios创建一个axios实列
    this.setInterceptor(instance, options.url);
    let config = this.merge(options);
    return instance(config);
  }
}

export default new AjaxRequest();
