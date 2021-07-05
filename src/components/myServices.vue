<template>
  <div class="MyServices">
    <Header :activeIndex="1"></Header>
    <img @click="popShow=true;" class="banner_pic" src="../../static/images/def_banner_five.png" alt />
    <div class="title_item">
      <h3>我的服务</h3>
      <p>Visual features</p>
    </div>
    <div class="services_flex">
      <div
        class="item_list"
        v-for="(item,index) in servicesImgs"
        @mouseenter="item.show=true;"
        @mouseleave="item.show=false;"
      >
        <img :src="item.pic" />
        <p class="intr" v-text="item.intr"></p>
        <transition name="el-zoom-in-bottom">
          <div class="enter_box" v-show="item.show">
            <div class="enter_left">
              <p>推荐理由</p>
              <i class="el-icon-arrow-right enter_icon"></i>
            </div>
            <div class="enter_right">
              <p v-for="(item2,index2) in item.texts" :key="index2" v-text="item2"></p>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="title_item">
      <h3>培训学院简介</h3>
      <p>Visual features</p>
    </div>
    <div class="intr_box">
      <div class="left_imgs">
        <!-- <div></div>
        <div></div>-->
        <img src="../../static/images/def_pictuer4.png" />
      </div>
      <div class="intr_text">
        <p>蓝若企业咨询管理有限公司成立于2018年11月。公司的经营范围包括：家政服务、养老服务、保洁服务等。</p>
        <p>蓝若企业咨询管理有限公司为提升服务品质，顺应家政服务市场的需求，引入日本高端家政服务模式，并结合本地、本土化的特点，创建了蓝若企业咨询管理有限公司的培训基地即蓝若高端家政服务培训学。学校的培训内容包括：基础家政、整理收纳、清洁师、园艺师、绿化养护、朋友宴会、家宴、客宴制作、西点制作、家庭保健按摩、照护老人、看护幼儿、茶艺茶道、礼仪礼节、会见客人和接待客人服务、管理日常⁄私人定制、管家式服务、旅行旅游管理、家务事务管理、家居插花等服务培训，满足客户多样化的需求，完成对客户一体化的服务。</p>
        <p>学院奉行 “人员结为一体，追求客户99%满足的服务质量方针。1%是企业在追求客户满意度进程上永恒的目标。</p>
      </div>
    </div>
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
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./component/footer";
import Header from "./component/header";
export default {
  name: "MyServices",
  data() {
    return {
      popShow: false,
      show3: false,
      servicesImgs: [
        {
          pic: "../../static/images/def_Maternity_matron.png",
          intr:
            "全方位产后服务,把月子中心带 回家,准爸妈的生活帮手, 修养育儿不用愁 ",
          texts: ["丰富的专业知识", "严格的等级划分", "产妇100%满意"],
          show: false
        },
        {
          pic: "../../static/images/def_cook.png",
          intr:
            "懒人的选择,给下班的自己 一个休息空间,远离厨房 油烟,多种口味一手抓 ",
          texts: ["随时随地预约", "一站式服务", "满足营养需求"],
          show: false
        },
        {
          pic: "../../static/images/def_Repair.png",
          intr: "生活小白的选择,家政维修 不可或缺,快捷便利看 得见,手机无忧下单",
          texts: ["线上预约线下服务", "专业维修设备", "打造高效服务"],
          show: false
        },
        {
          pic: "../../static/images/def_Cleaning.png",
          intr: "定期保洁给生活一次 洁净,七大区域百项 标准,细节更见真心",
          texts: ["自由选择排期", "固定服务人员", "多选保洁类型"],
          show: false
        }
      ]
    };
  },
  props: {},
  components: {
    Footer,
    Header
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less">
.MyServices {
  background: #fff;
  .banner_pic {
    width: 100%;
    cursor: pointer;
  }
  .services_flex {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-items: center;
    width: 1120px;
    margin: 0 auto;
    padding-bottom: 70px;
    .item_list {
      margin-top: 50px;
      width: 50%;
      position: relative;
      img {
        display: block;
        cursor: pointer;
      }
      .intr {
        position: absolute;
        left: 40px;
        bottom: 96px;
        width: 158px;
        color: #666;
        font-size: 14px;
      }
      .enter_box {
        // background: #ce92bf;
        padding-left: 30px;
        width: 546px;
        display: flex;
        align-items: center;
        padding: 12px 0 12px 30px;
        position: absolute;
        left: 0;
        bottom: 0;
        .enter_left {
          display: flex;
          align-items: center;
          > p {
            font-size: 16px;
            width: 42px;
            line-height: 1.2;
            font-weight: bold;
            color: #fff;
            padding-right: 10px;
          }
          .enter_icon {
            display: block;
            font-size: 38px;
            color: #fff;
          }
        }
        .enter_right {
          display: flex;
          > p {
            color: #fff;
            padding-left: 20px;
            font-size: 16px;
          }
        }
      }
    }
    .item_list:last-child {
      .intr {
        width: 126px;
      }
    }
    .item_list:nth-child(1) {
      .enter_box {
        background: #ce92bf;
      }
    }
    .item_list:nth-child(2) {
      .enter_box {
        background: #e7b662;
      }
    }
    .item_list:nth-child(3) {
      .enter_box {
        background: #80afd1;
      }
    }
    .item_list:nth-child(4) {
      .enter_box {
        background: #8abd79;
      }
    }
  }
  .intr_box {
    width: 1120px;
    margin: 50px auto 168px auto;
    display: flex;
    justify-content: space-between;
    .left_imgs {
      > div {
        width: 547px;
        height: 303px;
        background: #aaaaaa;
      }
      > div:last-child {
        margin-top: 14px;
      }
    }
    .intr_text {
      p {
        font-size: 20px;
        line-height: 1.8;
        text-indent: 40px;
      }

      margin-left: 88px;
    }
  }
}
</style>
