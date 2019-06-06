import axios from "axios";
import {message} from "antd"


axios.interceptors.request.use(function (config) {
  if(!axios.defaults.headers.common['Authorization'] && localStorage.getItem("TOKEN")){
    axios.defaults.headers.common['Authorization'] = localStorage.getItem("TOKEN");
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  if(response.data.code == 401){
    message.error("未登录！");
    delete axios.defaults.headers.common['Authorization'];
    return;
  }

  return response;
}, function (error) {
  return Promise.reject(error);
});



// 获取验证码
export async function GetCaptcha(){
  let data = await axios.get('/main/api/v1/captcha');
  return data.data;
}


// 获取阶段信息
export async function GetTask() {
  let data = await axios.get('/startup/api/v1/project/template');
  console.log("data.code", data.data.code);

  return data.data;
}

// 登录
export async function Login(params){
  return await axios.post('/startup/api/v1/login', params);
}
