<template>
<!-- 尾部 -->
  <div class="footer">
    <!-- 左侧购物车 -->
<div class="left"  @click="toggleList" >
    <div>
        <p class="icon-bg"><span>
          <i class="iconfont icon-ai-cart">
            </i> </span>
            </p>
      
    </div>
    <!-- 总价格 -->
    <p class="price">￥<span>0</span></p>
    <p class="tips">另需配送费￥<span></span>元</p>
</div>
<!-- 配送信息 -->
<div class="right">￥20元起送</div>
  
   <transition name="fold">
        <div class="shopcart-list" v-show="listShow">
          <div class="list-header">
            <h1 class="title">购物车</h1>
            <span class="empty" @click="empty">清空</span>
          </div>
          <div class="list-content" ref="listContent">
            <ul>
              <li class="food" v-for="food in selectFoods" :key="food.id">
                <span class="name">{{food.name}}</span>
                <div class="price">
                  <span>￥{{food.price*food.count}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <!-- <cartcontrol @add="addFood" :food="food"></cartcontrol> -->
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
      </div>
</template>

<script>
  import BScroll from "better-scroll";
export default {
  name: "Footer",
  props: {
    selectFoods: {
      type: Array,
      default() {
        return [
          {
            price: 10,
            count: 1
          }
        ];
      }
    },
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {};
  },
  computed: {
    listShow() {
      const _this = this;
      if (!_this.totalCount) {
        _this.fold = true;
        return false;
      }
      let show = !_this.fold;
      if (show) {
        _this.$nextTick(() => {
          if (!_this.scroll) {
            _this.scroll = new BScroll(_this.$refs.listContent, {
              click: true
            });
          } else {
            _this.scroll.refresh();
          }
        });
      }
      return show;
    }
  },
  methods: {
     toggleList() {
      if (!this.totalCount) {
        return;
      }
      this.fold = !this.fold;
    },
    empty() {
      this.selectFoods.forEach(food => {
        food.count = 0;
      });
    },

  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.footer {
  z-index: 10;
  height: 58px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .left {
    position: relative;
    width: 100%;
    background-color: #141d27;
    color: rgba(255, 255, 255, 0.4);
    display: flex;
    flex-direction: row;

    .icon-bg {
      width: 56px;
      height: 56px;
      background-color: #141d27;
      border-radius: 28px;
      margin-top: -6px;
      margin-left: 18px;
      margin-right: 18px;
      text-align: center;
      padding-top: 6px;
      span {
        display: inline-block;
        width: 48px;
        height: 48px;
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 24px;
        .iconfont {
          line-height: 48px;
          font-size: 24px;
          color: rgba(255, 255, 255, 0.4);
        }
      }
    }
    .price {
      padding-right: 12px;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 12px;
      margin-top: 16px;
      color: rgba(255, 255, 255, 0.4);
      font-weight: 700;
      border-right: 1px solid rgba(255, 255, 255, 0.1);
    }
    .tips {
      padding-left: 12px;
      line-height: 56px;
      color: rgba(255, 255, 255, 0.4);
      font-size: 16px;
    }
  }
  .right {
    color: rgba(255, 255, 255, 0.4);
    font-size: 12px;
    // line-height: 24px;
    font-weight: 700;
    width: 105px;
    padding: 0 8px;
    line-height: 58px;
    text-align: center;
    // background-color: rgba(0, 0, 0, 0.2);
    background-color: #2b333b;
  }
  .shopcart-list {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    transform: translate3d(0, -100%, 0);
    &.fold-enter-active,
    &.fold-leave-active {
      transition: all 0.5s;
    }
    &.fold-enter,
    &.fold-leave-active {
      transform: translate3d(0, 0, 0);
    }
    .list-header {
      height: 40px;
      line-height: 40px;
      padding: 0 18px;
      background: #f3f5f7;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      .title {
        float: left;
        font-size: 14px;
        color: rgb(7, 17, 27);
      }
      .empty {
        float: right;
        font-size: 12px;
        color: rgb(0, 160, 220);
      }
    }

    .list-content {
      padding: 0 18px;
      max-height: 217px;
      overflow: hidden;
      background: #fff;
      ul {
        list-style: none;
      }
      .food {
        position: relative;
        padding: 12px 0;
        box-sizing: border-box;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        // border-1px(rgba(7, 17, 27, 0.1));
        .name {
          line-height: 24px;
          font-size: 14px;
          color: rgb(7, 17, 27);
        }
        .price {
          position: absolute;
          right: 90px;
          bottom: 12px;
          line-height: 24px;
          font-size: 14px;
          font-weight: 700;
          color: rgb(240, 20, 20);
        }
        .cartcontrol-wrapper {
          position: absolute;
          right: 0;
          bottom: 6px;
        }
      }
    }
  }
}
</style>