<template>
  <div class="home">
    <!-- <el-button v-text="msg"></el-button> -->
    <div class="banner_box">
      <!-- 顶部菜单 -->
      <Header :activeIndex="0" :changeHeader="changeHeader"></Header>
      <!-- <Header2></Header2> -->
      <!-- banner轮播 -->
      <!-- <el-carousel :height="height+'px'" arrow="never" :autoplay="false" indicator-position="none">
        <el-carousel-item v-for="(item,index) in bannerList" :key="index">
          <img class="banner_img" :src="item" />
        </el-carousel-item>
      </el-carousel> -->
       <img class="banner_img" src="../../static/images/def_banner.png" />
      <div class="banner_text">
        <img src alt />
        <img src="../../static/images/def_written_words.png" />
        <el-button @click="popShow=true;" class="more_btn">VIEW MORE</el-button>
      </div>
    </div>

    <!-- 数量统计 -->
    <div class="count_container">
      <div class="count_list">
        <div class="count_item">
          <div class="count_number">
            <h3>
              <!--  :autoplay="false" -->
              <countTo ref="aaa" :startVal="0" :separator="''" :endVal="6000" :duration="5000"></countTo>
            </h3>
            <i>+</i>
          </div>
          <p>用户家庭</p>
        </div>
        <div class="count_item">
          <div class="count_number">
            <h3>
              <!--  :autoplay="false" -->
              <countTo :startVal="0" :separator="''" :endVal="3000" :duration="5000"></countTo>
            </h3>
            <i>+</i>
          </div>
          <p>自有员工</p>
        </div>
        <div class="count_item">
          <div class="count_number">
            <h3>
              <!-- :autoplay="false" -->
              <countTo :startVal="0" :separator="''" :endVal="7" :duration="5000"></countTo>
            </h3>
          </div>
          <p>服务城市</p>
        </div>
      </div>
    </div>
    <!-- 企业视频 -->
    <div class="enterprise_video">
      <div class="title_item">
        <h3>企业视频</h3>
        <p>Visual features</p>
      </div>
      <div class="video_box">
        <img src="../../static/images/def_computer.png" alt />
        <!-- <video-player
          class="video-player vjs-custom-skin video2"
          ref="videoPlayer"
          :playsinline="true"
          :options="playerOptions"
        ></video-player> -->
      </div>
    </div>
    <!-- 服务流程 -->
    <div class="service_flow">
      <div class="title_item">
        <h3>标准化服务流程</h3>
        <p>Operation Steps</p>
      </div>
      <div class="flow_list">
        <div class="flow_item" v-for="(item,index) in flowList" :key="index">
          <img :src="item.icon" />
          <div class="spot_box">
            <div class="spot"></div>
            <i v-text="'0'+(index+1)"></i>
          </div>
          <div class="active">
            <div class="center_active" v-text="'0'+(index+1)"></div>
          </div>
          <h3 v-text="item.title"></h3>
          <p v-text="item.text"></p>
          <div class="last_line"></div>
        </div>
      </div>
      <div class="out_line"></div>
    </div>
    <!-- 服务领域 -->
    <div class="service_area">
      <div class="title_item">
        <h3>全面关注家庭服务领域</h3>
        <p>Service area</p>
        <p>家务包年、深度清洁、保姆服务、收纳整理等，家美关注家庭服务的方方面面，为提供品质家庭生活而努力</p>
      </div>
      <div class="dec_line"></div>
      <div class="area_list">
        <div class="area_item" v-for="(item,index) in areaList" :key="index">
          <img :src="item.icon" />
          <h3 v-text="item.title"></h3>
          <p v-text="item.text"></p>
        </div>
      </div>
    </div>
    <!-- 服务人员 -->
    <div class="service_personal">
      <div class="title_item">
        <h3>员工制服务人员</h3>
        <p>Service personal</p>
        <p>专业培训、持证上岗、安全贴心</p>
      </div>

      <div class="service_content">
        <div class="service_btns">
          <el-button @click="prev" type="warning" class="service_btn" icon="el-icon-arrow-left"></el-button>
          <el-button @click="next" type="warning" class="service_btn" icon="el-icon-arrow-right"></el-button>
        </div>
        <!-- <transition :name="transitionName"> -->
        <!-- <div class="services_roll clearfix transition_view">
          <div class="services_item" v-for="(item,index) in seavicesPersonalList">
            <img :src="item.pic" />
            <div class="item_text">
              <h3 v-text="item.name"></h3>
              <p v-text="item.text"></p>
            </div>
          </div>
        </div>-->
        <!-- </transition> -->
        <el-carousel ref="carousel" indicator-position="none" arrow="never" :autoplay="false">
          <el-carousel-item v-for="item in 2" :key="item" :initial-index="carouselParams.pageTotal">
            <div class="services_roll clearfix transition_view">
              <div class="services_item" v-for="(item,index) in seavicesPersonalList">
                <img :src="item.pic" />
                <div class="item_text">
                  <h3 v-text="item.name"></h3>
                  <p v-text="item.text"></p>
                </div>
              </div>
              <div
                style="visibility: hidden;"
                v-if="seavicesPersonalList.length<3"
                class="services_item"
              ></div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <!-- 关于我们 -->
    <div class="about_us">
      <div class="title_item">
        <h3>关于我们</h3>
        <p>About us</p>
        <p>嘉美人力资源公司是一家通过互联网形式线上预约提供线下服务的家政服务公司，公司旨在为各类家庭解决生活上的问题</p>
      </div>
      <div class="about_us_content">
        <img src="../../static/images/def_conpany.png" />
        <div class="us_list">
          <div class="us_item" v-for="(item,index) in usList" :key="index">
            <img :src="item.icon" />
            <h3 v-text="item.title"></h3>
            <div class="us_line"></div>
            <p v-text="item.text"></p>
          </div>
        </div>
      </div>
    </div>
    <!-- 企业新闻 -->
    <div class="news">
      <div class="title_item">
        <h3>企业新闻</h3>
        <p>Business News</p>
        <p>企业新闻公开、行业信息发布</p>
      </div>
      <div class="news_container">
        <ul>
          <li v-for="(item,index) in newsList" :key="index">
            <div class="new_box">
              <div class="new_count" v-text="'0'+(index+1)"></div>
              <div class="new_text">
                <span v-text="item.timeYearStr+'-'+item.timeDayStr"></span>
                <h3 @click="toNewsDetail(item.id)" v-text="item.title"></h3>
                <a @click="toNewsDetail(item.id)">阅读更多 ></a>
              </div>
            </div>
          </li>
          <!-- <li>
            <div class="new_box">
              <div class="new_count">02</div>
              <div class="new_text">
                <span>2019-07-11</span>
                <h3>嘉美美家出动1589架无人机展示企业实力！ 拷贝</h3>
                <a>阅读更多 ></a>
              </div>
            </div>
          </li>
          <li>
            <div class="new_box">
              <div class="new_count">03</div>
              <div class="new_text">
                <span>2019-07-11</span>
                <h3>嘉美美家出动1589架无人机展示企业实力！ 拷贝</h3>
                <a>阅读更多 ></a>
              </div>
            </div>
          </li>-->
        </ul>
      </div>
      <div class="load_more">
        <el-button @click="toNews" class="more_btn">更多资讯</el-button>
      </div>
    </div>
    <!-- <div @click="markClick">131321</div>
    <transition-group name="imgs">
      <li v-for="(item, index) in imgArray" :key="index" v-show="index===mark">
        <a>
          <p>{{item}}</p>
        </a>
      </li>
    </transition-group>-->
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
import { mapState, mapMutations } from "vuex";
import Footer from "./component/footer";
import Header from "./component/header";
import Header2 from "./component/header2";
import countTo from "vue-count-to";
import { _getNewsList } from "../service/mews";
import { videoPlayer } from "vue-video-player";
import "video.js/dist/video-js.css";
export default {
  name: "Home",  
  data() {
    return {
      // // 需要滚动的时间
      // duration: 5000,
      // // 初始值
      // startVal: 0,
      // // 最终值
      // endVal: 300000,
      popShow: false,
      startVal1: 0,
      endVal1: 0,
      newsParams: {
        pageNumber: 1,
        pageSize: 3,
        belongsTo: 3
      },
      newsList: [],
      dialogShow: false,
      initIndex: 0,
      carouselParams: {
        pageTotal: 2
      },
      aaaaa: true,
      transitionName: "",
      mark: 0,
      imgArray: [111, 222, 333, 444],
      height: 0,
      scrollTop: 0,
      changeHeader: false,
      msg: "lalala",
      bannerList: [
        "../../static/images/def_banner.png",
        "../../static/images/def_banner.png"
      ],
      flowList: [
        {
          title: "Standard",
          text: "4小时标准服务时长",
          icon: "../../static/icon/icon_time_one.png"
        },
        {
          title: "subdivide",
          text: "服务细分6区 40项 108标准 ",
          icon: "../../static/icon/icon_standard.png "
        },
        {
          title: "Not sloppy",
          text: "按区域  按顺序  不马虎",
          icon: "../../static/icon/icon_Not_sloppy.png"
        },
        {
          title: "visualization",
          text: "坚持可视化服务",
          icon: "../../static/icon/icon_visualization.png"
        },
        {
          title: "convenient",
          text: "线上线下便捷操作",
          icon: "../../static/icon/icon_convenient.png"
        }
      ],
      areaList: [
        {
          icon: "../../static/icon/icon_time_tow.png",
          title: "小时工",
          text: "自由选择时长，高效提供服务"
        },
        {
          icon: "../../static/icon/icon_Maternity_matron.png",
          title: "月嫂",
          text: "专业月子中心带回家 产妇婴儿的 放心选择"
        },
        {
          icon: "../../static/icon/icon_Nursery_teacher.png",
          title: "育婴师",
          text: "专业引导孩子健康成长，为未来 保驾护航"
        },
        {
          icon: "../../static/icon/weixiugongju.png",
          title: "维修工",
          text: "水电一手安装 管道分秒疏通"
        },
        {
          icon: "../../static/icon/icon_vip.png",
          title: "会员制体系",
          text: "先体验、后付款 更用心、更放心"
        },
        {
          icon: "../../static/icon/icon_On-line.png",
          title: "线上线下",
          text: "线上选择服务预约，线下面试 确认、享受服务"
        },
        {
          icon: "../../static/icon/icon_give.png",
          title: "大礼包形式",
          text: "一次预约、多次服务"
        }
      ],
      seavicesPersonalList: [
        {
          pic: "../../static/images/def_pictuer_one.png",
          name: "王阿姨1",
          text: "3星级保姆，住家保姆"
        },
        {
          pic: "../../static/images/def_pictuer_one.png",
          name: "王阿姨2",
          text: "3星级保姆，住家保姆"
        },
        {
          pic: "../../static/images/def_pictuer_one.png",
          name: "王阿姨3",
          text: "3星级保姆，住家保姆"
        }
      ],
      usList: [
        {
          icon: "../../static/icon/icon_ider.png",
          title: "公司理念",
          text: "提供专业、高效、标准的家政服务， 打破传统家政局限性"
        },
        {
          icon: "../../static/icon/icon_target.png",
          title: "公司目标",
          text: "引领家政服务行业新风向"
        },
        {
          icon: "../../static/icon/icon_system.png",
          title: "服务体系",
          text: "自有专业家政服务团队，提供包含 保洁、护理等多种服务形式"
        },
        {
          icon: "../../static/icon/icon_safe.png",
          title: "安全保障",
          text: "系统的预约流程，完善的售后体系， 专业的服务态度"
        }
      ],
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            src: "../../static/images/qt.mp4", // 路径
            type: "video/mp4" // 类型
          }
          // {
          //   src: "../../static/images/qt.mp4",
          //   type: "video/webm"
          // }
        ],
        poster: "../../static/images/main_pictuer_4.png", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      }
    };
  },
  watch: {
    scrollTop: function(newVal, oldVal) {
      // console.log(newVal);
      if (newVal >= this.height) {
        this.changeHeader = true;
      } else {
        this.changeHeader = false;
      }
    }
  },
  components: {
    Footer,
    Header,
    Header2,
    countTo,
    videoPlayer
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.height = window.innerHeight;
    this.getData();
    // console.log(this.scrollTop);
    // console.log(document.body.clientWidth);
  },
  methods: {
    ...mapMutations(["setNewsId"]),
    handleScroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    },
    getData() {
      _getNewsList(this.newsParams).then(res => {
        if (res.data.success) {
          this.newsList = res.data.data.list;
          console.log(this.newsList);
        }
      });
    },
    toNewsDetail(id) {
      this.setNewsId(id);
      this.pushTo("NewsDetail");
    },
    toNews() {
      this.pushTo("MyNews");
    },

    // markClick() {
    //   this.mark += 1;
    //   if (this.mark === this.imgArray.length) {
    //     this.mark = 0;
    //   }
    // }
    transitionChange() {
      this.aaaaa = !this.aaaaa;
      this.transitionName = "slide-left";
      // this.transitionName =
      //   this.transitionName === "slide-left" ? "slide-right" : "slide-left";
    },
    prev() {
      this.seavicesPersonalList = [
        {
          pic: "../../static/images/def_pictuer_one.png",
          name: "王阿姨1",
          text: "3星级保姆，住家保姆"
        },
        {
          pic: "../../static/images/def_pictuer_one.png",
          name: "王阿姨2",
          text: "3星级保姆，住家保姆"
        },
        {
          pic: "../../static/images/def_pictuer_one.png",
          name: "王阿姨3",
          text: "3星级保姆，住家保姆"
        }
      ];
      this.$refs.carousel.prev();
    },
    next() {
      this.seavicesPersonalList = [
        {
          pic: "../../static/images/def_pictuer_one.png",
          name: "王阿姨4",
          text: "3星级保姆，住家保姆"
        },
        {
          pic: "../../static/images/def_pictuer_one.png",
          name: "王阿姨5",
          text: "3星级保姆，住家保姆"
        }
      ];
      this.$refs.carousel.next();
    }
  }
};
</script>
<style lang="less" scoped>
// .transition_view {
//   transition: all 0.8s ease;
// }

// .slide-left-enter,
// .slide-right-leave-active {
//   transform: translate(100%, 0);
// }
// .slide-left-leave-active,
// .slide-right-enter {
//   transform: translate(0, 0);
// }

// .imgs-enter-active,
// .imgs-leave-active {
//   transition: all 1s ease;
// }
// .imgs-enter {
//   transform: translateX(100%);
// }
// .imgs-enter-to {
//   transform: translateX(0);
// }
// .imgs-leave {
//   transform: translateX(0);
// }
// .imgs-leave-to {
//   transform: translateX(-100%);
// }
</style>
