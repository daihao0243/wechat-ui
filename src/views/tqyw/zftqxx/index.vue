<template>
  <nav-bar></nav-bar>
  <sm-view @on-pass="showView = true" v-if="!showView"></sm-view>
  <div v-show="showView">
    <van-steps :active="step" active-color="#38f">
      <van-step>信息录入</van-step>
      <!-- <van-step>温馨提示</van-step> -->
      <van-step>声明信息</van-step>
    </van-steps>
    <van-form @submit="onSubmit" v-show="step == 0">
      <van-cell-group>
        <van-field v-model="formData.xm" name="xm" readonly label="姓名" />
        <van-field v-model="formData.zjh" name="zjh" readonly label="证件号" />
        <van-field
          required
          v-model="formData.sjhm"
          name="sjhm"
          label="手机号码"
          placeholder="请输入手机号码"
          maxlength="11"
          :rules="[{ required: true, message: '请输入手机号码' }]"
        />
        <van-field v-model="formData.grye" name="grye" readonly label="账户余额" />
        <van-field v-model="formData.sqtqbj" name="sqtqbj" readonly label="提取本金" />
        <van-field v-model="formData.skyhmc" name="skyhmc" readonly label="收款银行" />
        <van-field v-model="formData.skzh" name="skzh" readonly label="收款账户" />
        <app-picker
          required
          label="婚姻状况"
          placeholder="请选择婚姻状况"
          type="hyzk"
          :rules="[{ required: true, message: '请选择婚姻状况' }]"
        ></app-picker>
        <van-field
          v-model="formData.poxm"
          name="poxm"
          maxlength="50"
          placeholder="请输入配偶姓名"
          label="配偶姓名"
        />
        <van-field
          v-model="formData.pozjh"
          name="pozjh"
          maxlength="19"
          placeholder="请输入配偶证件号"
          label="配偶证件号"
        />
      </van-cell-group>
      <responsive-action>
        <van-button round block v-if="step < 1" native-type="submit"> 下一步 </van-button>
      </responsive-action>
    </van-form>
    <div style="width: 100%; margin: 0 auto; font-size: 20px" v-if="step == 1">
      <div style="text-align: center; margin-top: 20px">
        <h2>本人声明</h2>
      </div>
      <div
        style="font-size: 18px; margin-top: 20px; padding-left: 15px; padding-right: 15px"
        id="smnr"
      >
        1、 本人及配偶在缴存地无自有产权住房
        <br />
        <br />
        2、
        本人授权南宁住房公积金管理中心向房产管理部门核查本人房产信息，并已征得本人配偶同意，授权南宁住房公积金管理中心核查其房产信息。
        <br />
        <br />
        3、
        本人保证所填写的信息均完整、真实、有效，无任何与事实不符的情况，如存在虚假申报或漏报行为，本人愿意承担由此产生的相应责任，并同意将本人的不良记录记入个人征信系统。
        <br />
        <br />
        本人已仔细阅读上述声明并同意上述声明内容。
      </div>
    </div>
    <responsive-action v-if="step > 0">
      <!-- <van-button round block v-if="step < 1" @click="onNextPrev"> 上一步 </van-button> -->
      <van-button round block type="danger" @click="onNextPrev"> 已阅读，不同意 </van-button>
      <van-button round block type="primary"> 已阅读，同意提交 </van-button>
    </responsive-action>
  </div>
</template>

<script>
import SmView from './sm';
export default {
  data() {
    return {
      step: 0,
      show: false,
      showView: false,
      showSm: false,
      formData: {
        xm: '邓**',
        zjh: '45070211133312834',
        sjhm: '19384643282',
        ye: '192.20',
        bj: '1023.21',
        skyh: '中国银行',
        skzh: '1234567890',
        type: '证件类型',
        hyzk: '02',
      },
      rules: {},
    };
  },
  components: {
    SmView,
  },
  methods: {
    onNextStep() {
      this.step++;
    },
    onNextPrev() {
      this.step--;
    },
    onSubmit(e) {
      this.step++;
      // this.$dialog
      //   .confirm({
      //     title: '提示',
      //     message: '本申请提交后即时生效不可修改。',
      //   })
      //   .then(() => {})
      //   .catch(() => {});
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.bottom {
  display: flex;
  justify-content: flex-end;
}
</style>