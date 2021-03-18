import axios from "../request"

//注册接口
export const registerApi = (phone, pwd, name) => axios.post("/api/v1/pri/user/register", {
    "phone":phone,//之所以是双引号应该是和json数据相对应的
    "pwd":pwd,
    "name":name
})

//登录接⼝
export const loginApi = (phone, pwd) => axios.post("/api/v1/pri/user/login",{
    phone,
    pwd
})

//轮播图接⼝，不需要参数
export const getBanner = () => axios.get("/api/v1/pub/video/list_banner")
//视频列列表接⼝
export const getVideoList = ()=> axios.get("/api/v1/pub/video/list")

//视频详情接口
export const getVideoDetail = (vid)=>
axios.get("/api/v1/pub/video/find_detail_by_id?",{
params: {
video_id:vid
}
})

//下单接⼝
export const saveOrder = (token, vid)=>axios.post("/api/v1/pri/order/save",{
"video_id":vid
},{
headers:{
"token":token
}
})

//订单列表，涉及到用于操作都要将token传递过去，可以放在uri的params也可以是header里
export const getOrderList = (token)=>axios.get("/api/v1/pri/order/list",{
params:{
"token":token
}
})

//用户信息接⼝
export const getUserInfo =
(token)=>axios.get("/api/v1/pri/user/find_by_token",{
params:{
"token":token
}
})
