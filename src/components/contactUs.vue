<template>
  <div class="contactUs">
    <Header :activeIndex="3"></Header>
    <div class="banner_box">
      <img class="banner_img" src="../../static/images/def_banner_four.png" alt />
      <div class="banner_text">
        <h3>联系我们</h3>
        <p>地址：浙江省宁波市鄞州区金融大厦B座308室</p>
      </div>
    </div>
    <div class="from_container">
      <!-- 公司基本信息 -->
      <div class="us_info">
        <div class="info_padding">
          <div class="info_item">
            <h3>关注</h3>
            <div class="icon_list">
              <!-- <img src="../../static/icon/icon_weibo.png" /> -->
              <img src="../../static/icon/icon_QQ.png" />
              <img src="../../static/icon/icon_wchart.png" />
            </div>
          </div>
        </div>
        <div class="info_padding">
          <div class="info_item">
            <h3>嘉美人力资源有限公司</h3>
            <div class="text_list">
              <p style="width:380px;">地址：浙江省宁波市鄞州区首南西路88号金融大厦B座308室</p>
              <p>电话：0574-28886049</p>
            </div>
          </div>
        </div>
        <div style="padding-left:210px;" class="info_padding">
          <div class="info_item">
            <h3 style="visibility: hidden">1</h3>
            <div class="text_list">
              <p>邮编：315000</p>
              <p>邮箱：jiameirl@163.com</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 表单 -->
      <div class="us_info">
        <div class="info_padding">
          <el-input class="from_input" v-model="messageInfo.username" placeholder="姓名"></el-input>
        </div>
        <div class="info_padding">
          <el-input class="from_input" v-model="messageInfo.email" placeholder="邮箱"></el-input>
        </div>
        <div class="info_padding">
          <el-input class="from_input" v-model="messageInfo.eTelphone" placeholder="电话"></el-input>
        </div>
      </div>
      <!-- 留言 -->
      <el-input
        class="from_textarea"
        type="textarea"
        :rows="4"
        placeholder="请输入内容"
        v-model="messageInfo.eContent"
      ></el-input>
      <el-button @click="submitMessage" class="from_submit">提交</el-button>
    </div>
    <Footer></Footer>
  </div>
</template>
  
<script>
import Footer from "./component/footer";
import Header from "./component/header";
import { _leaveMessage } from "../service/mews";
export default {
  name: "contactUs",
  data() {
    return {
      messageInfo: {
        username: "",
        email: "",
        eTelphone: "",
        belongsTo: 3,
        eContent: ""
      }
    };
  },
  props: {},
  components: {
    Footer,
    Header
  },
  mounted() {},
  methods: {
    submitMessage() {
      let emailReg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
      let telReg = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
      let phoneReg = /^1(3|4|5|6|7|8|9)\d{9}$/;
      if (!this.messageInfo.username) {
        this.$message({
          message: "请填写姓名",
          offset: 120,
          type: "warning"
        });
        return;
      }
      if (!emailReg.test(this.messageInfo.email)) {
        this.$message({
          message: "请填写正确的邮箱",
          offset: 120,
          type: "warning"
        });
        return;
      }
      if (
        !telReg.test(this.messageInfo.eTelphone) ||
        !phoneReg.test(this.messageInfo.eTelphone)
      ) {
        this.$message({
          message: "请填写正确的号码",
          offset: 120,
          type: "warning"
        });
        return;
      }
      if (!this.messageInfo.eContent) {
        this.$message({
          message: "请填写内容",
          offset: 120,
          type: "warning"
        });
        return;
      }
      _leaveMessage(this.messageInfo).then(res => {
        if (res.data.success) {
          this.$message({
            message: res.data.message,
            offset: 120,
            type: "success"
          });
          this.messageInfo.username = this.messageInfo.email = this.messageInfo.eTelphone = this.messageInfo.eContent =
            "";
        }
      });
    }
  }
};
</script>

<style lang="less">
.contactUs {
  background: #fff;
  .banner_box {
    position: relative;
    .banner_img {
      width: 100%;
      display: block;
    }
    .banner_text {
      position: absolute;
      left: 56%;
      top: 60%;
      transform: translate(0, -50%);
      h3 {
        font-size: 54px;
        line-height: 1;
        color: #383838;
      }
      p {
        padding-top: 20px;
        font-size: 20px;
        line-height: 1;
        color: #383838;
      }
    }
  }

  .from_container {
    width: 1120px;
    padding: 124px 0 100px 0;
    margin: 0 auto;
    color: #999ba9;
    .us_info {
      display: flex;
      margin-bottom: 100px;
      .info_padding {
        box-sizing: border-box;
        width: 33.3%;
        .info_item {
          h3 {
            font-size: 16px;
            margin-bottom: 50px;
          }
          .icon_list {
            display: flex;
            align-items: center;
            img {
              display: block;
              cursor: pointer;
              margin-right: 30px;
            }
          }
          .text_list {
            p {
              line-height: 1;
              font-size: 14px;
              padding-bottom: 25px;
            }
          }
        }
        .from_input {
          > input {
            width: 100%;
            box-sizing: border-box;
            padding: 0 40px 0 0;
            border-top: none;
            border-left: none;
            border-right: none;
            border-radius: 0;
          }
        }
      }
      .info_padding:nth-child(1) {
        padding-right: 63px;
      }
      .info_padding:nth-child(2) {
        padding: 0 31.5px;
      }
      .info_padding:nth-child(3) {
        padding-left: 63px;
      }
    }
    .from_textarea {
      width: 100%;
      > textarea {
        box-sizing: border-box;
        padding: 0 40px 0 0;
        border-top: none;
        border-left: none;
        border-right: none;
        border-radius: 0;
      }
    }
    .from_submit {
      display: block;
      border-radius: 23px;
      width: 122px;
      border: 1px solid #e27331;
      color: #e27331;
      background: #fff;
      font-size: 14px;
      cursor: pointer;
      padding: 0;
      height: 46px;
      line-height: 46px;
      margin-top: 30px;
    }
  }
}
</style> 
