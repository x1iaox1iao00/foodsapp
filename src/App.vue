<template>
  <div id="app">
    <!-- <slot name="popBox" v-show="false" id="slot"></slot>-->
      <Header :seller="seller"></Header>
    <div id="nav">
      <Row>
        <i-col span="8"> <router-link to="/goods">商品</router-link> </i-col>
        <i-col span="8"><router-link to="/ratings">评价</router-link></i-col>
        <i-col span="8"><router-link to="/seller">商家</router-link></i-col> 
    </Row>
     <div class="line"></div>
    </div>
    <router-view/>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { getSeller } from "../src/api/index.js";
export default {
  data() {
    return {
      seller:{}
    };
  },
  components: {
    Header,
    Footer
  },
   mounted() {
    getSeller("156220").then(res => {
      this.seller=res.data.data;
    });
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
#app {
  //#04A1DB蓝色
  width: 100%;
  color: #2c3e50;
  #nav {
    .line {
      content: "";
      width: 100%;
      background-color: rgba(7, 17, 27, 0.1);
      height: 1px;
    }
    width: 100%;
    // padding: 30px;
    height: 40px;
    font-size: 14px;
    line-height: 40px;
    text-align: center;
    a {
      line-height: 14px;
      color: rgb(77, 85, 93);
      &.router-link-exact-active {
        color: rgb(240, 20, 20);
      }
    }
  }
}
</style>
