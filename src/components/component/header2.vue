<template>
  <!-- <div id="a">
    <button @click="aaa">123</button>
    <transition :name="transitionName">
      <div v-show="transitionName=='slide-left'" class="child-view">hello</div>
    </transition>
  </div>-->
  <div class="block">
    <span class="demonstration">默认 Hover 指示器触发</span>
    <el-carousel height="150px" :autoplay="false" @change="ttt">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      abc:0,
      transitionName: "slide-left"
    };
  },
  props: {},
  mounted() {},
  methods: {
    ttt(e){
      console.log(e)
    },
    aaa() {
      this.transitionName =
        this.transitionName == "slide-left" ? "slide-right" : "slide-left";
    }
  }
};
</script>

<style lang="less">
.child-view {
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
}
.slide-left-enter,
.slide-right-leave-active {
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}
</style>
