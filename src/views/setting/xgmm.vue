<template>
  <responsive-page>
    <template #header>
      <nav-bar></nav-bar>
    </template>
    <template #body>
      <van-form label-width="85px">
        <van-cell-group :border="false">
          <van-field
            required
            name="phone"
            label="原密码"
            placeholder="请输入原密码"
            type="password"
            maxlength="20"
            :rules="[{ required: true, message: '请输入原密码' }]"
          >
          </van-field>
          <van-field
            required
            name="phone"
            label="新密码"
            placeholder="请输入新密码"
            type="password"
            maxlength="20"
            :rules="[{ required: true, message: '请输入新密码' }]"
          >
          </van-field>
          <van-field
            required
            name="phone"
            label="确认新密码"
            placeholder="请输入确认新密码"
            type="password"
            maxlength="20"
            :rules="[{ required: true, message: '请输入确认新密码' }]"
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

  methods: {},
};
</script>

<style lang="less" scoped>
</style>