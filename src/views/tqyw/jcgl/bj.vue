<template>
  <div>
    <nav-bar></nav-bar>
    <van-form @submit="onSubmit" label-width="100px">
      <van-cell-group title="账户当前信息">
        <van-field v-model="formData.xingming" name="xingming" label="姓名" readonly />
        <van-field v-model="formData.grzhye" name="grzhye" label="账户余额" readonly />
        <van-field v-model="formData.gryjce" name="gryjce" label="月缴存额" readonly />
        <van-field v-model="formData.schjny" name="schjny" label="上次汇缴年月" readonly />
        <van-field v-model="formData.schjje" name="schjje" label="上次汇缴金额" readonly />
        <van-field v-model="formData.scfksj" name="scfksj" label="上次付款时间" readonly />
      </van-cell-group>
      <van-cell-group title="变更信息">
        <app-form-date-picker
          required
          range
          v-model="formData.dateTime"
          name="dateTime"
          label="补缴时间"
        />
        <van-field
          required
          v-model="formData.smsCode"
          center
          clearable
          label="验证码"
          placeholder="请输入验证码"
          maxlength="6"
          :rules="[{ required: true, message: '请输入请验证码' }]"
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
  name: 'ChsWebBj',

  data() {
    return {
      formData: {
        dateTime: '',
      },
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
</style>