//引入axios
import axios from 'axios';
//配置
var reqInstance=axios.create({
baseURL:'http://localhost:80/',//请求基础地址
timeout:'5000'// 请求超时时间
})
//获取商家接口
export const getSeller=function(id){
return reqInstance.get('api/seller',{params:{"id":id}})
}
//获取商品
export const getGoods=function(sellerId){
return reqInstance.get('api/goods',{params:{"sellerId":sellerId}})
}
//获取评价
export const getRatings=function(){
return reqInstance.get("api/ratings",{params:{}})
}