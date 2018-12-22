<template>
  <div class="foods">
    <!-- 左侧 -->
      <div class="left" ref='lbox'>
        <ul>
          <li v-for="(item,index) in goods" :key="item.id" @click="selectMenu(index,$event)" :class="{'current':(index===currentIndex)}">
            <!-- <p><span>{{item.name}}</span></p> -->
            <p><span>
              <img v-if="item.type===2" src="../../assets/images/special_3@2x.png" style="width:12px;height:12px;"/>
        <img  v-else-if="item.type===1" src="../../assets/images/discount_3@2x.png" style="width:12px;height:12px;"/>
        {{item.name}}</span></p>
            </li>
          </ul>
       
      </div>
      <!-- 右侧信息 -->
      <div class="right" ref='rbox'>
        <ul>
      <li v-for="item in goods" :key="item.id" ref="foodList">
        <p class="title">{{item.name}}</p>
        <ul>
          <!--食物信息 -->
        <li class="content" v-for="food in item.foods" :key="food.id" >
          <img :src="food.image" alt="图片">
          <div class="fonts">
            <p>{{food.name}}</p>
            <p>{{food.description}}</p>
            <p><span>月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span></p>
            <!-- 价格 -->
           <div class="control"> <p class="price"><span>￥<b>{{food.price}}</b></span>
           <del>￥<b>{{food.oldPrice}}</b></del></p>
            <!-- 数量 -->
           <p><Icon type="md-remove-circle" v-show="false" />
           <span class="num" ></span>
            <Icon type="md-add-circle"/></p> 
           </div>
          </div>
        </li>
        </ul>
      </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { getGoods } from "../../api/index.js";
export default {
  name: "Goods",
  data() {
    return {
      // theme3: "light",
      // currentIndex:0,
      goods: [],
      offsetY: 0,
      heightArr: []
    };
  },
  created() {
    const _this = this;
    //请求数据
    getGoods("156220").then(res => {
      _this.$nextTick(() => {
        this.goods = res.data.data;
        _this.$nextTick(() => {});
      });
    });
  },
  methods: {
    //初始化滚动
    _initScroll() {
      //开启点击事件
      this.menuScroll = new BScroll(this.$refs.lbox, { click: true });
      // 初始化右侧滑动
      this.foodsScroll = new BScroll(
        this.$refs.rbox,
        // { click: true },
        { probeType: 3 }
      );
      //获取滚动距离
      const _this = this;
      _this.foodsScroll.on("scroll", e => {
        _this.offsetY = Math.abs(Math.round(e.y));
      });
    },
    //页面渲染完成，计算分类项的起始高度
    _calculateHeight() {
      const heightArr = [];
      let height = 0;
      heightArr.push(height);
      //获取分类高度
      const foodList = this.$refs.foodList;
      //遍历计算高度
      foodList.forEach((food, i) => {
        if (i > foodList.length - 2) {
          return;
        }
        //当前元素高度
        // let currentHeight = food.clientHeight;
        height+= food.clientHeight;
        //下一项起始高度
        // height += currentHeight;
        //放入数组
        heightArr.push(height);
      });
      this.heightArr = heightArr;
      console.log("this.heightArr", this.heightArr);
    },
    //点击菜单
    selectMenu(index, e) {
      // 判断事件是否由插件触发
      if (!e._constructed) {
        return;
      }
      //获取右侧食物内容的集合
      let foodList = this.$refs.foodList;
      //通过左侧索引值,获取右侧对应的food展示板块
      let rightEl = foodList[index];
      //直接在右侧视口顶部,展示内容
      this.foodsScroll.scrollToElement(rightEl, 3000);

      // 记录选中的索引号
      // this.currentIndex = index;
    }
  },
  mounted() {
    this._initScroll();
    this._calculateHeight();
  },
  computed: {
    // 通过计算属性,根据scrollY的变化,修改index索引号
    currentIndex() {
      // 循环取出heightList
      for (let i = 0; i < this.heightArr.length; i++) {
        let heightStart = this.heightArr[i];
        let heightEnd;
        if (i + 1 < this.heightArr.length) {
          heightEnd = this.heightArr[i + 1]; // 如果超了,返回无效值
        }
        //在开始和结束之间
        if (
          !heightEnd ||
          (this.offsetY >= heightStart && this.offsetY < heightEnd)
        ) {
         return i;
         
        }
      }
      //返回索引
      return 0;
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.foods {
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  position: absolute;
  top: 179px;
  bottom: 65px;
  .left {
    // overflow-y: auto;
    li {
      width: 80px;
      height: 54px;
      background-color: #f3f5f7;
      padding: 0 10px;
      font-size: 12px;
      p {
        height: 54px;
        width: 61px;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        span {
          margin: 0 auto;
        }
      }
      &.current {
        background-color: white;
        // color: rgb(7, 17, 27);
        p {
          border-bottom-color: white;
        }
      }
    }
  }
  .right {
    width: 100px;
    overflow: hidden;
    flex: 1;
    .title {
      border-left: 2px solid #d9dde1;
      height: 26px;
      line-height: 26px;
      padding-left: 12px;
      color: rgb(147, 153, 159);
      background-color: #f3f5f7;
    }
    .content {
      margin: 18px 18px 0 18px;
      padding-bottom: 18px;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      display: flex;
      flex-direction: row;
      img {
        width: 57px;
        height: 57px;
        margin-right: 20px;
      }
      .fonts {
        width: 100%;
        p:nth-of-type(1) {
          font-size: 14px;
          color: rgb(7, 17, 27);
          margin-bottom: 2px;
        }
        p:nth-of-type(2),
        p:nth-of-type(3) {
          font-size: 10px;
          color: rgb(147, 153, 159);
          margin-bottom: 2px;
        }
        p:nth-of-type(3) {
          span:nth-of-type(1) {
            margin-right: 12px;
          }
        }
        .control {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .num {
            display: inline-block;
            width: 24px;
          }
          .ivu-icon {
            color: #00a0dc;
            font-size: 20px;
          }
          .price {
            font-size: 10px;
            line-height: 24px;
            span {
              b {
                font-size: 14px;
                color: rgb(240, 20, 20);
                font-weight: 700;
              }
              font-size: 14px;
              color: rgb(240, 20, 20);
              margin-right: 8px;
            }
            .del {
              b {
                font-weight: 700;
              }
              color: rgb(147, 153, 159);
            }
          }
        }
      }
    }
  }
}
</style>