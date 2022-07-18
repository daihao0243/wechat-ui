<template>
  <div>
    <nav-bar></nav-bar>
    <van-form @submit="onSubmit" label-width="120px">
      <van-cell-group title="账户当前信息">
        <van-field v-model="formData.xingming" name="xingming" label="姓名" readonly />
        <van-field v-model="formData.jcfkyh" name="jcfkyh" label="变更前付款银行" readonly />
        <van-field v-model="formData.jcfkyhzh" name="jcfkyhzh" label="变更前银行卡号" readonly />
      </van-cell-group>
      <van-cell-group title="变更信息">
        <app-form-picker
          required
          v-model="formData.fkyh"
          label="变更后付款银行"
          placeholder="请选择变更后付款银行"
          type="bank"
          :rules="[{ required: true, message: '请选择变更后付款银行' }]"
        ></app-form-picker>
        <van-field
          required
          v-model="formData.bgyhkh"
          name="bgyhkh"
          label="变更后银行卡号"
          placeholder="请输入变更后银行卡号"
          maxlength="20"
          :rules="[{ required: true, message: '请输入变更后银行卡号' }]"
        />
      </van-cell-group>
      <responsive-action>
        <van-button round block type="primary" native-type="submit"> 提交 </van-button>
      </responsive-action>
    </van-form>
  </div>
</template>

<script>
export default {
  name: 'ChsWebFkyhbg',

  data() {
    return {
      formData: {
        xingming: 'def',
        jcfkyh: '321321312',
        jcfkyhzh: '2423432423',
        fkyh: '',
        bgyhkh: '',
      },
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
</style>