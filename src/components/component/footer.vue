<template>
  <div class="footer">
    <div class="footer_container">
      <div class="footer_list">
        <h3>嘉美人力资源有限公司</h3>
        <ul>
          <!-- <li>
            <img src="../../../static/icon/icon_ipone.png" />
            <p>
              手机：
              <span>13111311313</span>
            </p>
          </li>-->
          <li>
            <img src="../../../static/icon/youxiang.png" />
            <p>
              电话：
              <span>0574-28886049</span>
            </p>
          </li>
          <li>
            <img src="../../../static/icon/icon_map.png" />
            <p>
              邮箱：
              <span>jiameirl@163.com</span>
            </p>
          </li>
          <li>
            <img src="../../../static/icon/icon_ipone.png" />
            <p>
              地址
              <span>浙江省宁波市鄞州区首南西路88号金融大厦B座308室</span>
            </p>
          </li>
        </ul>
      </div>
      <div class="wx_right">
        <img src="../../../static/images/wx_pic.png" />
        <p>家庭必备 无忧生活</p>
      </div>
    </div>
    <p class="last_footer">
      版权所有：阿姆尼软件开发有限公司
      <a href="http://www.beian.miit.gov.cn" target="_blank">浙ICP备19023949号-1</a>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="less">
.footer {
  background: #222222;
  width: 100%;
  padding-top: 30px;
  .footer_container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    .footer_list {
      > h3 {
        font-size: 24px;
      }
      ul {
        padding: 20px 0 10px 0;
        li {
          display: flex;
          align-items: center;
          padding-bottom: 20px;
          font-size: 14px;
          > p {
            padding-left: 10px;
            span {
            }
          }
        }
      }
    }
    .wx_right {
      padding-bottom: 20px;
      p {
        text-align: center;
        line-height: 32px;
        font-size: 14px;
      }
    }
  }
}
.last_footer {
  text-align: center;
  line-height: 42px;
  color: #fff;
  border-top: 1px solid #656565;
  font-size: 14px;

  a {
    color: #fff;
  }
}
</style>
