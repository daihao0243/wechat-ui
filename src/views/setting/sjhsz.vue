<template>
  <responsive-page>
    <template #header>
      <nav-bar></nav-bar>
    </template>
    <template #body>
      <van-form>
        <van-cell-group :border="false">
          <van-field
            required
            label-width="85px"
            name="phone"
            label="新手机号码"
            placeholder="请输入新手机号码"
            maxlength="11"
            :rules="[{ required: true, message: '请输入新手机号码' }]"
          >
            <template #button>
              <a href="javascript:void(0)" class="send-button" @click="onSendCode">获取验证码</a>
            </template>
          </van-field>
          <van-field
            required
            label-width="85px"
            name="phone"
            label="短信验证码"
            placeholder="请输入短信验证码"
            maxlength="6"
            :rules="[{ required: true, message: '请输入短信验证码' }]"
          >
          </van-field>
        </van-cell-group>
        <responsive-action>
          <van-button round block type="primary" native-type="submit"> 提交 </van-button>
        </responsive-action>
      </van-form>
    </template>
  </responsive-page>
</template>

<script>
export default {
  name: 'ChsWebXgmm',

  data() {
    return {};
  },

  mounted() {},

  methods: {
    onSendCode() {
      this.showDialog = true;
    },
    onSubmit() {},
  },
};
</script>

<style lang="less" scoped>
.send-button {
  color: var(--van-nav-bar-icon-color);
}
</style>