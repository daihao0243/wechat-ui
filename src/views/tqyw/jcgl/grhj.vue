<template>
  <div>
    <nav-bar></nav-bar>
    <van-form @submit="onSubmit" label-width="100px">
      <van-cell-group title="账户当前信息">
        <van-field v-model="formData.xingming" name="xingming" label="姓名" readonly />
        <van-field v-model="formData.grzhye" name="grzhye" label="账户余额" readonly />
        <van-field v-model="formData.gryjce" name="gryjce" label="月缴存额" readonly />
      </van-cell-group>
      <van-cell-group title="上次汇缴信息">
        <van-field v-model="formData.schjny" name="schjny" label="上次汇缴年月" readonly />
        <van-field v-model="formData.schjje" name="schjje" label="上次付款金额" readonly />
        <van-field v-model="formData.scfksjTwo" name="scfksjTwo" label="上次付款时间" readonly />
        <van-field v-model="formData.fkyh" name="fkyh" label="付款银行" readonly />
        <van-field v-model="formData.jcfkyhzh" name="jcfkyhzh" label="付款银行卡号" readonly />
      </van-cell-group>
      <van-cell-group title="本次汇缴信息">
        <van-field v-model="formData.jcqsny" name="jcqsny" label="本次汇缴年月" readonly />
        <van-field v-model="formData.jcjsny" name="jcjsny" label="本次汇缴截至" readonly />
        <van-field v-model="formData.bchjje" name="bchjje" label="本次应付款金额" readonly />
        <van-field
          required
          v-model="formData.smsCode"
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
          maxlength="6"
          :rules="[{ required: true, message: '请输入短信验证码' }]"
        >
          <template #button>
            <van-button size="small" type="primary">发送验证码</van-button>
          </template>
        </van-field>
      </van-cell-group>
      <responsive-action>
        <van-button round block type="primary" native-type="submit"> 提交 </van-button>
      </responsive-action>
    </van-form>
  </div>
</template>

<script>
export default {
  name: 'ChsWebGrhj',

  data() {
    return {
      formData: {},
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
</style>