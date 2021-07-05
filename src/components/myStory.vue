<template>
  <div class="myStory">
    <Header :activeIndex="2"></Header>
    <div class="banner_box">
      <img class="banner_img" src="../../static/images/def_banner_four.png" alt />
      <div class="banner_text">
        <h3>品牌故事</h3>
        <p style="text-align: center;">Brand Story</p>
      </div>
    </div>
    <div class="story_container">
      <div class="title_item">
        <h3>关于嘉美美家</h3>
        <p>About us</p>
      </div>
      <div class="intr">
        <p>嘉美人力资源有限公司成立于2019年3月8日。嘉美人力资源有限公司主营业务是向客户派遣优质家政服务人员。企业通过由阿姆尼软件开发的线上平台向目标客户提供高素质、严标准的家政服务（服务人员来自于专业的高端家政服务培训学校）。</p>
        <p>“嘉美”作为互联网＋家庭服务的参与者，始终坚信“只有适应时代潮流的企业才能与时俱进，只有积极求变，才能够保持勃勃生机，建立良好口碑和卓越商誉。”</p>
        <p>在新的世纪，嘉美秉持“以人为本”核心理念，以“人”为出发点开展一系列业务，与客户建立良好的关系，为成为家庭服务行业的引领者而不断前进。</p>
      </div>
      <div class="icon_list">
        <div class="icon_item" v-for="(item,index) in itemList" :key="index">
          <img :src="item.icon" />
          <h3 v-text="item.title"></h3>
          <p v-text="item.intr"></p>
        </div>
      </div>
    </div>
    <div class="switch_container">
      <div class="control_container">
        <i @click="prev" class="el-icon-arrow-left control_left"></i>
        <div class="switch_list">
          <el-carousel ref="carousel" indicator-position="none" arrow="never" :autoplay="false">
            <el-carousel-item v-for="item in 2" :key="item" :initial-index="1">
              <div class="services_roll">
                <div class="switch_margin" v-for="(item,index) in switchList">
                  <div class="switch_item">
                    <img :src="item.pic" />
                    <p v-text="item.title"></p>
                  </div>
                </div>
                <!-- <div
                  style="visibility: hidden;"
                  v-if="seavicesPersonalList.length<3"
                  class="services_item"
                ></div>-->
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <i @click="next" class="el-icon-arrow-right control_right"></i>
      </div>
    </div>
    <div style="background:#fff;">
      <div class="main_container">
        <div class="main_1">
          <h3>精心筛选人员 严格把控质量</h3>
          <p>
            100%专职员工，身份/健康/等级多重认证，为适应市场瞬息
            万变的需求，满足中国亿万家庭带去真正的需求，并不断丰
            富产品体系，扩大服务区域。企业采用员工制代替传统中介
            制，严格把控员工质量，树立优质高效的品牌形象
          </p>
        </div>
        <div class="main_2">
          <img src="../../static/images/main_pictuer_1.png" alt />
          <div class="main_text">
            <h3>采用标准服务流程</h3>
            <p>嘉美美家为所有服务人员提供从理论到实践的有关培训，每一位员工在正式进入市场就业前，都需经过重重考核方可毕业，且每半年需重新进入学院复核，以免出现服务质量有所缺失的情况。</p>
          </div>
        </div>
        <div class="main_3">
          <div class="main_text">
            <h3>引入国际家庭服务模式</h3>
            <p>嘉美美家与新加坡等多个国家的知名企业达成战略合作关系，引入国际化的服务模式，旨在使国内的家庭服务真正达到与国际化接轨的程度。每年，企业将引入国际专业培训老师进入培训学院内对学生进行实地教学。</p>
          </div>
          <img src="../../static/images/main_pictuer_2.png" />
        </div>
        <div class="main_4">
          <div class="main_4_title">
            <h3>2018年蓝若培训基地正式建立</h3>
            <p>2018年11月，企业培训基地——蓝若培训学院成功建立。为提升服务品质，顺应家政服务市场的需求，基地特此引入国际高端家庭服务模式，并结合国内消费需求使服务更具本土化特性。</p>
          </div>
          <div class="main_4_item">
            <img src="../../static/images/main_pictuer_3.png" />
            <p>行业专家领导到访蓝若家政</p>
          </div>
          <div class="main_4_item">
            <img src="../../static/images/main_pictuer_4.png" />
            <p>学员大课交流互动区</p>
          </div>
        </div>
      </div>
    </div>
    <div class="major_events">
      <h3>嘉美美家大事件</h3>
      <div class="events_line"></div>
      <div class="events_container">
        <div class="events_item" v-for="(item,index) in eventsList" :key="index">
          <h3 v-text="item.date"></h3>
          <div class="circle_out">
            <div class="circle"></div>
          </div>
          <p v-text="item.intr"></p>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./component/footer";
import Header from "./component/header";
export default {
  name: "MyStory",
  data() {
    return {
      itemList: [
        {
          title: "公司理念",
          intr: "提供专业、高效、标准的家庭服务 打破传统家庭服务局限性",
          icon: "../../static/images/icon_idea.png"
        },
        {
          title: "公司目标",
          intr: "引领家庭服务行业新风向",
          icon: "../../static/images/icon_target.png"
        },
        {
          title: "服务体系",
          intr: "自有专业家庭服务团队，提供包含保洁 护理等多种服务形式",
          icon: "../../static/images/icon_system.png"
        },
        {
          title: "安全保障",
          intr: "系统的预约流程，完善的售后体系 专业的服务态度",
          icon: "../../static/images/icon_safety.png"
        }
      ],
      switchList: [
        { title: "公司大门", pic: "../../static/images/def_pictuer1.png" },
        { title: "员工办公区", pic: "../../static/images/def_pictuer2.png" },
        { title: "大会议室", pic: "../../static/images/def_pictuer3.png" }
      ],
      eventsList: [
        { date: "2019/3", intr: "嘉美人力资源有 限公司成立" },
        {
          date: "2019/4",
          intr: "与日本、新加坡 等知名家庭服务 企业达成战略合作"
        },
        { date: "2019/5", intr: "组建第一支国际 合作培训师团队" },
        { date: "2019/5", intr: "上海、宁波两大 培训基地正式 开始招收人才" },
        { date: "2019/6", intr: "嘉美美家“小程序” 正式上线运营" },
        { date: "2019/7", intr: "第一家门店开业 上海成为第一批 试点" },
        {
          date: "2019/7",
          intr: "设立华东区域 运营中心，辐射 江浙沪等沿海一带"
        },
        {
          date: "2019/8",
          intr: "自有学院内招收 学院人数超3000人 并正在不断上升中"
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
  methods: {
    prev() {
      this.$refs.carousel.prev();
    },
    next() {
      this.$refs.carousel.next();
    }
  }
};
</script>

<style lang="less">
.myStory {
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
  .story_container {
    width: 1120px;
    margin: 0 auto 0 auto;
    .title_item {
      h3 {
        font-size: 36px;
      }
      p {
        color: #bababa;
      }
    }
    .intr {
      p {
        color: #979697;
        font-size: 16px;
        text-indent: 32px;
        line-height: 36px;
        padding-top: 46px;
      }
    }
    .icon_list {
      display: flex;
      padding: 80px 0 126px 0;
      .icon_item {
        text-align: center;
        flex: 1;
        h3 {
          line-height: 1;
          padding: 26px 0;
          color: #000000;
          font-size: 16px;
        }
        p {
          color: #666;
          font-size: 14px;
          padding: 0 20px;
          text-align: center;
        }
      }
    }
  }
  .switch_container {
    background: #eff1f5;
    padding: 56px 0;
    .control_container {
      width: 1152px;
      margin: 0 auto;
      position: relative;
      .control_left {
        cursor: pointer;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(0, -50%);
        font-size: 16px;
      }
      .control_right {
        cursor: pointer;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate(0, -50%);
        font-size: 16px;
      }
      .switch_list {
        width: 1080px;
        margin: 0 auto;
      }
    }
  }
}
.services_roll {
  display: flex;
  .switch_margin {
    background: #fff;
    img {
      display: block;
    }
    p {
      color: #979697;
      line-height: 74px;
      text-align: center;
      font-size: 16px;
    }
  }
  .switch_margin:nth-child(3n-2) {
    margin-right: 20px;
  }
  .switch_margin:nth-child(2n) {
    margin: 0 10px;
  }
  .switch_margin:nth-child(3n) {
    margin-left: 20px;
  }
}
.main_container {
  width: 1116px;
  margin: 0 auto;
  .main_1 {
    margin-top: 70px;
    width: 1116px;
    height: 600px;
    background: url("../../static/images/bg_screen.png") no-repeat;
    background-size: 1116px 600px;
    h3 {
      font-size: 36px;
      line-height: 1;
      padding-bottom: 20px;
    }
    p {
      color: #bababa;
      font-size: 16px;
      line-height: 1.8;
      width: 410px;
    }
  }
  .main_2 {
    margin-top: 140px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > img {
      display: block;
    }
    .main_text {
      text-align: right;
      h3 {
        font-size: 36px;
        line-height: 1;
        padding-bottom: 20px;
      }
      p {
        text-align: left;
        color: #bababa;
        font-size: 16px;
        line-height: 1.8;
        width: 436px;
      }
    }
  }
  .main_3 {
    display: flex;
    margin-top: 90px;
    justify-content: space-between;
    align-items: center;
    > img {
      display: block;
    }
    h3 {
      font-size: 36px;
      line-height: 1;
      padding-bottom: 20px;
    }
    p {
      text-align: left;
      color: #bababa;
      font-size: 16px;
      line-height: 1.8;
      width: 436px;
    }
  }
  .main_4 {
    margin-top: 140px;
    .main_4_title {
      text-align: center;
      h3 {
        font-size: 36px;
        line-height: 1;
        padding-bottom: 20px;
      }
      p {
        color: #bababa;
        font-size: 16px;
        line-height: 1.8;
        width: 980px;
        margin: 0 auto;
      }
    }
    .main_4_item {
      margin-top: 70px;
      > img {
        display: block;
      }
      p {
        padding-top: 30px;
        line-height: 1;
        font-size: 16px;
        text-align: center;
      }
    }
  }
}
.major_events {
  margin-top: 80px;
  background: #eff1f5;
  padding: 82px 0 180px 0;
  position: relative;
  > h3 {
    font-size: 36px;
    text-align: center;
  }
  .events_container {
    width: 1120px;
    display: flex;
    position: absolute;
    left: 50%;
    top: 202px;
    transform: translate(-50%, 0);
    .events_item {
      position: relative;
      flex: 1;
      padding: 0 14px;
      text-align: center;
      > h3 {
        font-size: 18px;
        line-height: 1;
      }
      > p {
        font-size: 14px;
        line-height: 1.6;
      }
      .circle_out {
        border: 9px solid #eff1f5;
        background: #dedede;
        border-radius: 100%;
        width: 32px;
        height: 32px;
        margin: 10px auto;
        // box-sizing: border-box;
        position: relative;
        .circle {
          border-radius: 100%;
          width: 12px;
          height: 12px;
          background: #dedede;
          border: 2px solid #eff1f5;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
  .events_line {
    width: 1000px;
    height: 1px;
    margin: 0 auto;
    background: #fff;
    margin-top: 116px;
  }
}
</style> 
