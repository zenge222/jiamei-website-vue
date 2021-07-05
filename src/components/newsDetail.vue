<template>
  <div class="myNews">
    <Header></Header>
    <img class="banner_img" src="../../static/images/def_banner_tow.png" alt />
    <!-- 头部面包屑 -->
    <div class="news_header">
      <div class="news_center">
        <ul>
          <li @click="toHome">首页</li>
          <li>新闻动态</li>
        </ul>
      </div>
    </div>
    <!-- 新闻详情 -->
    <div class="news_container">
      <div class="news_list" v-html="detailInfo.content"></div>
      <div class="search_menu">
        <div class="input_group">
          <el-input class="search_input" v-model="input" placeholder="请输入内容"></el-input>
          <img class="search_icon" src="../../static/icon/icon_search.png" />
        </div>
        <div class="memu_list">
          <ul>
            <li>
              <h3>新闻分类</h3>
              <div class="menu_line"></div>
            </li>
            <li>
              <a>行业新闻</a>
            </li>
            <li>
              <a>公司新闻</a>
            </li>
          </ul>
          <ul>
            <li>
              <h3>热门新闻</h3>
              <div class="menu_line"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Footer from "./component/footer";
import Header from "./component/header";
import { _getNewsDetail } from "../service/mews";
export default {
  name: "MyNews",
  data() {
    return {
      input: "123",
      detailInfo: {
        content: "",
        id: "",
        subtitle: "",
        title: "",
        timeYearStr: ""
      }
    };
  },
  props: {},
  components: {
    Footer,
    Header
  },
  computed: {
    ...mapState({
      newsId: state => state.login.newsId
    })
  },
  mounted() {
    this.getDetail();
  },
  methods: {
    toHome() {
      this.replaceTo("Home");
    },
    getDetail() {
      _getNewsDetail(this.newsId).then(res => {
        if (res.data.success) {
          this.detailInfo = res.data.data.news;
        }
      });
    }
  }
};
</script>

<style lang="less">
.myNews {
  background: #fff;
  .banner_img {
    display: block;
    width: 100%;
  }
  .news_header {
    border-bottom: 1px solid #ebebeb;
    .news_center {
      ul {
        display: flex;
        width: 1120px;
        margin: 0 auto;
        padding: 16px 0;
        li {
          padding: 0 13px;
          line-height: 1;
          font-size: 14px;
          cursor: pointer;
          color: #666;
        }
        li:first-child {
          padding-left: 0;
          border-right: 2px solid #b5b5b5;
        }
      }
    }
  }
  .news_container {
    width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
    .news_list {
      padding-right: 120px;
      font-size: 14px;
      line-height: 2;
      .list_item {
        display: flex;
        align-items: flex-start;
        margin-bottom: 80px;
      }
      .news_date {
        background: #e27331;
        color: #fff;
        text-align: center;
        width: 108px;
        padding: 21px 0 21px 0;
        margin: 30px 28px 0 0;

        // line-height: 1;
        h3 {
          font-size: 36px;
          font-weight: bold;
        }
        p {
          font-size: 14px;
        }
      }
      .news_item {
        p {
          font-size: 14px;
          line-height: 1.6;
          width: 597px;
          padding-bottom: 10px;
        }
        .type_count {
          padding-bottom: 46px;
          font-size: 14px;
        }
        .see_more {
          width: 80px;
          border-radius: 15px;
          padding: 0;
          font-size: 14px;
          background: #e27331;
          line-height: 30px;
          height: 30px;
          color: #fff;
        }
        .news_line {
          width: 30px;
          height: 4px;
          background: #ff8b40;
          margin-top: 40px;
        }
      }
    }
    .search_menu {
      .input_group {
        position: relative;
        margin-bottom: 48px;
        .search_input {
          > input {
            width: 258px;
            box-sizing: border-box;
            padding: 0 40px 0 0;
            // border: none;
            // border-bottom: 1px solid #ebebeb;
            border-top: none;
            border-left: none;
            border-right: none;
            border-radius: 0;
          }
        }
        .search_icon {
          cursor: pointer;
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translate(0, -50%);
        }
      }
      .memu_list {
        > ul {
          margin-bottom: 70px;
          li {
            font-size: 14px;
            color: #666;
            padding: 12px 0;
            border-bottom: 1px solid #ebebeb;
          }
          li:first-child {
            border-bottom: none;
            padding: 0;
            h3 {
              color: #333;
              font-size: 16px;
            }
          }
          .menu_line {
            width: 30px;
            height: 4px;
            background: #ff8b40;
            margin: 20px 0 8px 0;
          }
        }
      }
    }
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #e27331;
  }
  .el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #606266;
  }
  .el-pagination.is-background .el-pager li.active:hover {
    color: #fff;
  }
  .paging_box {
    width: 1120px;
    height: 28px;
    margin: 0 auto 110px auto;
    position: relative;
    .paging_list {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
