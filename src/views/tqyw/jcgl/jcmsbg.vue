<template>
  <div>
    <nav-bar></nav-bar>
    <van-form @submit="onSubmit" label-width="120px">
      <van-cell-group title="账户当前信息">
        <van-field v-model="formData.xingming" name="xingming" label="姓名" readonly />
        <van-field v-model="formData.bgqjcms" name="bgqjcms" label="变更前缴存模式" readonly />
        <van-field v-model="formData.bgqjcqd" name="bgqjcqd" label="变更前缴存渠道" readonly />
      </van-cell-group>
      <van-cell-group title="变更信息">
        <app-form-picker
          required
          v-model="formData.jcms"
          label="变更后缴存模式"
          placeholder="请选择变更后缴存模式"
          type="bank"
          :rules="[{ required: true, message: '请选择变更后缴存模式' }]"
        ></app-form-picker>
        <app-form-picker
          required
          v-model="formData.bgqjcqd"
          label="变更后缴存渠道"
          placeholder="请选择变更后缴存渠道"
          type="bank"
          :rules="[{ required: true, message: '请选择变更后缴存渠道' }]"
        ></app-form-picker>

        <app-form-picker
          required
          v-model="formData.jcfkyh"
          label="付款银行"
          placeholder="请选择付款银行"
          type="bank"
          :rules="[{ required: true, message: '请选择付款银行' }]"
        ></app-form-picker>
        <van-field
          required
          v-model="formData.bgyhkh"
          name="bgyhkh"
          label="付款银行卡号"
          placeholder="请输入付款银行卡号"
          maxlength="20"
          :rules="[{ required: true, message: '请输入付款银行卡号' }]"
        />
      </van-cell-group>
      <responsive-action>
        <van-button round block type="primary" native-type="submit"> 提交 </van-button>
      </responsive-action>
    </van-form>
    <div class="app-typo-text" style="margin: 15px">
      <p>
        <strong>温馨提示：</strong>标注
        <span class="app-text-color-red">*</span>
        为必填项。如果您需要更改付款银行信息，请选择<router-link
          class="app-text-color-blue"
          to="tqyw/jcgl/fkyhbg"
        >
          付款银行变更
        </router-link>
      </p>
      <p><strong>付款模式：</strong>选择每月主动缴费或者由银行代为缴费</p>
      <p>
        <strong>付款渠道：</strong
        >付款时使用的方式，如果您选择银行代扣汇缴模式，则默认为银联汇款，假如您此前没有录入银行卡信息，则需要先录入银行卡信息
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChsWebJcmsbg',

  data() {
    return {
      formData: {
        xingming: 'def',
        bgqjcms: '321321312',
        bgqjcqd: '',
        jcms: '',
        jcfkyh: '',
      },
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
</style>