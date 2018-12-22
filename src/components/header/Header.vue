<template>
<!-- 头部 -->
  <div class="header">
    <div class="bg">
      <div class="container">
        <img :src="seller.avatar" alt="图片"/>
        <!-- 中间信息 -->
        <div class="content">
          <p><img src="../../assets/images/brand@2x.png" alt="图片"/>{{seller.name}}</p>
          <p>{{seller.description}}/{{seller.deliveryTime}}分钟送达</p>
          <p><img src="../../assets/images/decrease_1@2x.png" alt="图片"/>{{seller.supports[0].description}}</p>
        </div>
        <div class="num" @click="showDetail"><p>{{seller.supports.length}}<span>个</span> ></p></div>
      </div>
     <!-- 公告 -->
        <div class="botttom">
            <img src="../../assets/images/bulletin@2x.png" alt="图片">
            <p>{{seller.bulletin}}</p>
            <span>></span>
        </div>
    </div>
    
     <!-- 弹出层 -->
      <transition name="fade">
    <div class="info" v-if="detailShow">
     <!-- 商家名称 -->
      <div class="title">
          <p>{{seller.name}}</p>
            <p>
                <img src="../../assets/images/star24_on@2x.png" alt="">
                <img src="../../assets/images/star24_on@2x.png" alt="">
                <img src="../../assets/images/star24_on@2x.png" alt="">
                <img src="../../assets/images/star24_on@2x.png" alt="">
                <img src="../../assets/images/star24_off@2x.png" alt="">
            </p>
      </div>
      <!--优惠信息  -->
      <p class="line"><b></b><span>优惠信息</span><b></b></p>
      <div class="discount">
        <p><img src="../../assets/images/decrease_1@2x.png"><span>在线支付满28减5，满50减10</span></p>   
        <p><img src="../../assets/images/discount_1@2x.png"><span>单人精彩赛</span></p>   
        <p><img src="../../assets/images/discount_1@2x.png"><span>清肺雪梨汤8折抢购</span></p>   
        <p><img src="../../assets/images/special_1@2x.png"><span>特价饮品八折抢购</span></p>   
        <p><img src="../../assets/images/special_1@2x.png"><span>单人特色套餐</span></p>   
      </div>
      <!-- 商家公告 -->
       <p class="line"><b></b><span>商家公告</span><b></b></p>
       <div class="notice">
            <p>{{seller.bulletin}}</p>
       </div>
       <!-- 取消按钮 -->
       <Icon type="md-close" class="close" @click="hideDetail"/>
        </div>
         </transition>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["seller"],
  data() {
    return {
      detailShow: false
    };
  },
  methods: {
    showDetail() {
      // 显示详情框
      this.detailShow = true;
    },
    hideDetail() {
      // 隐藏详情框
      this.detailShow = false;
    }
  },
  mounted() {
    // this.$nextTick(()=>{
    // document.getElementsByClassName('header').style.backgroundUrl=seller.avatar;
    // console.log(seller.avatar)
    // })
  }
};
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
img {
  vertical-align: middle;
}
.header {
  position: relative;
  width: 100%;
  height: 100%;
  .bg::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    filter: blur(3px);
    background: url("http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg")
      no-repeat;
    background-size: cover;
    z-index: -1;
  }
  .bg {
    width: 100%;
    height: 100%;
    background-color: rgba(7, 17, 27, 0.5);
    .container {
      padding: 24px 12px 0 12px;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 18px;
      & > img {
        border-radius: 2px;
        width: 64px;
        height: 64px;
        margin-right: 16px;
        margin-left: 12px;
      }
      .content {
        width: 100%;
        height: 64px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p:nth-of-type(1) {
          font-size: 16px;
          color: white;
          font-weight: bold;
          line-height: 18px;
          img {
            width: 40px;
            height: 24px;
            margin-right: 6px;
          }
        }
        p:nth-of-type(2) {
          font-size: 12px;
          color: white;
          font-weight: 200;
          line-height: 14px;
        }
        p:nth-of-type(3) {
          font-size: 10px;
          color: white;
          font-weight: 200;
          line-height: 12px;
          img {
            width: 20px;
            height: 20px;
            margin-right: 4px;
          }
        }
      }
      .num {
        font-size: 10px;
        color: white;
        p {
          background-color: rgba(0, 0, 0, 0.2);
          line-height: 12px;
          height: 24px;
          width: 48px;
          border-radius: 12px;
          padding: 7px 8px;
          span {
            margin-right: 4px;
          }
        }
      }
    }
    .botttom {
      width: 100%;
      padding: 0 12px;
      height: 28px;
      color: white;
      font-size: 10px;
      line-height: 28px;
      background-color: rgba(7, 17, 27, 0.2);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      p {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      img {
        width: 33px;
        height: 18px;
        margin-right: 4px;
        margin-top: 5px;
      }
      span {
        margin-left: 4px;
      }
    }
  }
  // .info:before {
  //   content: "";
  //   width: 100%;
  //   height: 100%;
  //   // position: absolute;
  //   left: 0;
  //   top: 0;
  //   background-size: cover;
  //   filter: blur(5px);
  //   z-index: 44;
  // }
  .info {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    // backdrop-filter: blur(10px);
    opacity: 1;
    background-color: rgba(7, 17, 27, 0.8);
    padding: 64px 36px 32px 36px;
    .title {
      text-align: center;
      margin-bottom: 28px;
      p:nth-of-type(1) {
        font-size: 16px;
        font-weight: 700;
        color: rgb(255, 255, 255);
        margin-bottom: 16px;
      }
      p:nth-of-type(2) {
        img {
          width: 24px;
          height: 24px;
          margin: 0 12px;
        }
      }
    }
    .line {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      span {
        color: #fff;
        font-size: 14px;
        font-weight: 700;
      }
      b {
        display: inline-block;
        content: "";
        height: 2px;
        width: 112px;
        background-color: rgba(255, 255, 255, 0.2);
      }
    }
    .discount {
      width: 100%;
      padding: 24px 12px 28px 12px;
      p {
        font-size: 12px;
        color: #fff;
        margin-bottom: 12px;
        img {
          width: 16px;
          height: 16px;
          margin-right: 6px;
        }
      }
    }
    .notice {
      padding: 24px 12px 0 12px;
      p {
        color: white;
        font-size: 12px;
        line-height: 24px;
      }
    }
    .close {
      position: fixed;
      bottom: 32px;
      left: 172px;
      color: rgba(255, 255, 255, 0.5);
      font-size: 32px;
    }
  }
}
</style>