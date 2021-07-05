<template>
  <div class="myNews">
    <Header></Header>
    <div class="banner_box">
      <img class="banner_img" src="../../static/images/def_banner_tow.png" alt />
      <div class="banner_text">
        <h3>企业新闻</h3>
        <p style="text-align: center;">Business News</p>
      </div>
    </div>
    <!-- 头部面包屑 -->
    <div class="news_header">
      <div class="news_center">
        <ul>
          <li @click="toHome">首页</li>
          <li>新闻动态</li>
        </ul>
      </div>
    </div>
    <!-- 新闻列表 -->
    <div class="news_container">
      <div class="news_list">
        <div class="list_item" v-for="(item,index) in newsList" :key="index" v-loading="loading">
          <div class="news_date">
            <h3 v-text="item.timeDayStr"></h3>
            <p v-text="item.timeYearStr"></p>
          </div>
          <div class="news_item">
            <img :src="item.smallImg" style="width:597px;margin-bottom:30px;" />
            <!-- <div
              @click="toDetail(item.id)"
              style="width:597px;height:156px;margin-bottom:30px;background:red;"
            ></div>-->
            <p>
              你好，时间的朋友，每到临近新年的时刻，我们总想跟你有个仪式感的跨年，一起回顾我们的
              2018，一起展望我们的2019。有人说，在时间的长河当中，要给自己找一个时间的标识，让我
              们更......
            </p>
            <div class="type_count">
              <span>行业新闻</span>/
              <span>666人浏览</span>
            </div>
            <el-button @click="toDetail(item.id)" type="warning" class="see_more">查看更多</el-button>
            <div class="news_line"></div>
          </div>
        </div>
      </div>
      <div class="search_menu">
        <div class="input_group">
          <el-input class="search_input" v-model="input" placeholder="请输入内容"></el-input>
          <img @click="searchNews" class="search_icon" src="../../static/icon/icon_search.png" />
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
    <div class="paging_box">
      <el-pagination
        class="paging_list"
        :page-size="2"
        background
        @current-change="currentChange"
        layout="prev, pager, next"
        :total="newTotal"
      ></el-pagination>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Footer from "./component/footer";
import Header from "./component/header";
import { _getNewsList } from "../service/mews";
export default {
  name: "MyNews",
  data() {
    return {
      input: "",
      newsParams: {
        pageSize: 2,
        pageNumber: 1,
        belongsTo: 3
      },
      loading: false,
      newTotal: 0,
      newsList: []
    };
  },
  props: {},
  components: {
    Footer,
    Header
  },
  mounted() {
    this.getData(this.newsParams);
  },
  methods: {
    ...mapMutations(["setNewsId"]),
    toDetail(id) {
      this.setNewsId(id);
      this.pushTo("NewsDetail");
    },
    toHome() {
      this.replaceTo("Home");
    },
    getData(params) {
      this.loading = true;
      _getNewsList(params).then(res => {
        if (res.data.success) {
          let resData = res.data.data.list;
          let bastPath = res.data.data.filePath;
          resData.forEach(val => {
            val.smallImg = bastPath + val.smallImg;
          });
          this.newsList = resData;
          this.newTotal = res.data.data.page.totalCount;
          this.loading = false;
        }
      });
    },
    currentChange(val) {
      this.newsParams.pageNumber = val;
      this.getData(this.newsParams);
    },
    searchNews() {
      this.$message({
        message: "搜索暂未开放",
        offset: 120,
        type: "warning"
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
  .banner_box {
    position: relative;
    .banner_img {
      width: 100%;
      display: block;
    }
    .banner_text {
      position: absolute;
      left: 58%;
      top: 60%;
      transform: translate(0, -50%);
      h3 {
        font-size: 60px;
        line-height: 1;
        color: #383838;
      }
      p {
        padding-top: 20px;
        font-size: 24px;
        line-height: 1;
        color: #383838;
      }
    }
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
