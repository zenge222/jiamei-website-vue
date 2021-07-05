<template>
  <div class="header">
    <div :class="{'header_menu':true,'header_menu2':headerChange}">
      <div class="header_group">
        <img v-if="!headerChange" src="../../../static/images/def_logo.png" />
        <img v-if="headerChange" src="../../../static/images/def_logo_light2.png" />
        <ul>
          <li
            :class="{'active':(tabActive==index)&&headerChange}"
            v-for="(item,index) in headerList"
            :key="index"
            @click="menuJump(item)"
          >{{item.title}}</li>
        </ul>
      </div>
    </div>
    <!--  :show-close="false" -->
    <el-dialog
      class="dialog_center"
      :center="true"
      width="250px"
      :lock-scroll="false"
      :visible.sync="popShow"
    >
      <div class="content">
        <h3>图片</h3>
        <p>扫码关注嘉美美家公众号 赶快体验便捷服务</p>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popShow: false,
      headerList: [
        { title: "首页", id: 0, link: "Home" },
        { title: "我的服务", id: 1, link: "MyServices" },
        { title: "品牌故事", id: 2, link: "MyStory" },
        { title: "联系我们", id: 3, link: "ContactUs" },
        { title: "立即体验", id: 4 }
      ],
      scrollTop: 0,
      headerChange: false,
      tabActive: this.activeIndex
    };
  },
  props: {
    changeHeader: {
      type: Boolean,
      default: false
    },
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  watch: {
    scrollTop: function(newVal, oldVal) {
      // console.log(newVal);
      if (newVal >= 420 - 54) {
        this.headerChange = true;
      } else {
        this.headerChange = false;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    menuJump(item) {
      if (item.id == 4) {
        this.popShow = true;
        this.$emit("showPop", true);
        return;
      }
      this.pushTo(item.link);
    },
    handleScroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    }
  }
};
</script>

<style lang="less">
.header {
  .header_menu {
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    // padding: 20px 0;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 3;
    transition: background linear 0.3s;
    .header_group {
      width: 1120px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;

      > img {
        cursor: pointer;
      }

      > ul {
        display: flex;

        > li {
          padding: 0 30px;
          color: #fff;
          font-size: 18px;
          cursor: pointer;
          line-height: 90px;
        }
        .active {
          background: #ff8b40;
          color: #fff;
        }
      }
    }
  }
  .header_menu2 {
    background: #fff;
    // border-bottom: 1px solid #ddd;
    .header_group {
      > ul {
        > li {
          color: #333;
        }
      }
    }
  }
}
.dialog_center {
  // width: 500px!important;
  margin-top: 30vh;
  text-align: center;
  .el-dialog__header {
    // padding: 0;
  }
  .el-dialog__body {
  }
  .content {
    text-align: center;
    p {
      font-size: 18px;
      padding-top: 20px;
    }
  }
}
</style>
