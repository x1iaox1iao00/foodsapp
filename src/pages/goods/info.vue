<template>
<!-- 蒙层 -->
  <div class="info">
     <!-- slot="popBox" -->
     <!-- 商家名称 -->
      <div class="title">
          <p>粥品香坊(大运村) </p>
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
            <p>粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，
                由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品
                质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥
                运会和2013年园博会指定餐饮服务商</p>
       </div>
       <!-- 取消按钮 -->
       <Icon type="md-close" class="close"/>
  </div>
</template>

<script>
export default {
  name: "Info",
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
img {
  vertical-align: middle;
}

</style>