<template>
  <nav-bar title="录入信息"></nav-bar>
  <van-cell-group title="基本信息">
    <van-field label="姓名" placeholder="*昭礼" readonly />
    <van-field label="证件号" placeholder="4****************8" readonly />
    <van-field label="联系电话" placeholder="12345678911" readonly />
    <Picker
      label="婚姻状况"
      placeholder="请选择婚姻状况"
      :columns="[
        { id: '0', text: '已婚' },
        { id: '1', text: '未婚' },
        { id: '2', text: '离异' },
      ]"
    />
    <van-field label="配偶姓名" placeholder="刘" readonly />
    <van-field label="配偶证件号" placeholder="4****************8" readonly />
    <van-field
      required
      v-model="phone"
      label="配偶手机号"
      placeholder="请输入配偶手机号"
      readonly
      is-link
      @click="showNumberKeyboard = true"
      :rules="[{ required: true, message: '请输入配偶手机号' }]"
    />
  </van-cell-group>
  <van-cell-group title="房屋信息">
    <app-picker
      label="房屋类型"
      placeholder="请选择房屋类型"
      :columns="[
        { id: '0', text: '房屋类型1' },
        { id: '1', text: '房屋类型2' },
        { id: '2', text: '房屋类型3' },
      ]"
    />
    <app-picker
      label="房屋地址"
      placeholder="请选择房屋地址"
      :columns="[
        { id: '0', text: '房屋地址1' },
        { id: '1', text: '房屋地址2' },
        { id: '2', text: '房屋地址3' },
      ]"
    />
    <van-field label="购房合同号" readonly />
    <van-field label="备案编号" readonly />
    <van-field label="首付款" readonly />
    <van-field label="购房总金额" readonly />
    <van-field label="购房日期" readonly />
  </van-cell-group>
  <van-cell-group title="提取信息">
    <van-field label="账户余额" v-model="prive" readonly />
    <van-field label="共有人已提取" readonly />
    <van-field label="本次提取金额" readonly />
    <app-picker label="转入银行" placeholder="请选择转入银行" type="bank" />
    <van-field label="转入账户" readonly />
    <van-field label="转入账户名称" readonly />
  </van-cell-group>
  <div style="margin: 16px">
    <van-button round block type="primary"> 提交 </van-button>
  </div>
  <van-notice-bar :scrollable="false" text="备注：本申请提交后即时生效不可修改。" />
  <div class="tip">
    <p><strong>温馨提示：</strong></p>
    <p>
      1.可提取的最高额度按商品房房屋总价的20%、二手房房屋总价的15%计算，如您首付金额较高且账户余额较多，该提取额度无法满足您的提取需求，可移步柜台办理。确认网上办理后不再受理补提或再次提取的申请。
    </p>
    <p>2.根据目前与相关部门数据共享的情况，购房提取线上业务适用于：</p>
    <ul>
      <li class="mdui-typo-body-2">
        （1）在南宁市行政区域内购房且经房屋网签备案的产权人及其配偶。
      </li>
      <li class="mdui-typo-body-2">
        （2）在南宁市城区内购房并已完成不动产登记的产权人及其配偶。其他购房情况待相关信息进一步完善后将逐步开通办理。
      </li>
    </ul>
  </div>
  <van-number-keyboard
    :show="showNumberKeyboard"
    v-model="phone"
    :maxlength="18"
    close-button-text="完成"
    @blur="showNumberKeyboard = false"
  />
</template>

<script>
export default {
  name: '',

  data() {
    return {
      prive: '24598.71',
      phone: '',
      showNumberKeyboard: false,
    };
  },
  components: {},
  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.tip {
  padding: 15px;
  font-size: 14px;
  p {
    margin: 10px 0;
  }
  .red {
    color: red;
  }
}
</style>