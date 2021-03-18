import axios from "axios";

//创建axios实例并输出
const service = axios.create({
    baseURL: "http://127.0.0.1:8081",
    timeout: 5000
})

//将这个变量命名为service
export default service

