<template>
  <div class="sm-page">
    <div style="width: 90%; margin: 0 auto; font-size: 20px">
      <div style="font-size: 15px; margin-top: 20px">
        <div id="print" style="overflow: auto; align: center; width: 100%">
          <div align="left" style="width: 100%; height: 10px; border: none; overflow: hidden"></div>
          <div style="font-size: 15px; margin: 18px 8">
            <div
              align="left"
              style="width: 100%; height: 10px; border: none; overflow: hidden"
            ></div>
            <div align="left" style="width: 100%; border: none; overflow: hidden">
              <span style="font-size: 14px"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您好，办理此项业务前，请先确认是否符合以下申请条件：</span
              >
            </div>
            <div
              align="left"
              style="width: 100%; height: 10px; border: none; overflow: hidden"
            ></div>
            <div align="left" style="width: 100%; border: none; overflow: hidden">
              <span style="font-size: 14px"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.在南宁住房公积金管理中心连续足额缴存住房公积金满三个月。
                <br />
                <p color="red" style="color: red; font-size: 13px; padding-left: 9%">
                  说明：以南宁住房公积金管理中心记录的缴存信息为准。
                </p>
              </span>
            </div>
            <div
              align="left"
              style="width: 100%; height: 10px; border: none; overflow: hidden"
            ></div>
            <div align="left" style="width: 100%; border: none; overflow: hidden">
              <span style="font-size: 14px"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.本人及配偶在缴存地无自有住房。
                <br />
                <p color="red" style="font-size: 13px; padding-left: 9%">
                  说明：缴存地指职工缴存住房公积金的所在地。
                </p>
                <br />
                <p color="red" style="font-size: 13px; padding-left: 9%">
                  自有住房指拥有所有权的住房。
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <van-row class="bottom" gutter="20">
      <van-col :span="8">
        <!-- <button class="app-button" type="warn" @tap="onPass(0)">不符合</button> -->
        <van-button type="danger" block @click="onPass(0)">不符合</van-button>
      </van-col>
      <van-col :span="8">
        <van-button type="primary" block @click="onPass(1)">符合</van-button>
        <!-- <button class="app-button" type="primary" @tap="onPass(1)">符合</button> -->
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nodes: ``,
    };
  },
  methods: {
    onPass(e) {
      if (e === 1) {
        this.$emit('on-pass');
      } else {
        uni.navigateBack();
      }
    },
  },
};
</script>

<style lang="less" scoped>
.sm-page {
  width: 80%;
  margin: auto;
}
.bottom {
  margin-top: 20px;
  justify-content: center;
}
</style>
