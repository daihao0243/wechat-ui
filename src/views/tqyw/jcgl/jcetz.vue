<template>
  <div>
    <nav-bar></nav-bar>
    <van-form @submit="onSubmit" label-width="120px">
      <van-cell-group title="账户当前信息">
        <van-field v-model="formData.xingming" name="xingming" label="姓名" readonly />
        <van-field v-model="formData.yjcbj" name="yjcbj" label="变更前缴存比例" readonly />
        <van-field v-model="formData.gryjce" name="gryjce" label="变更前月缴存额" readonly />
        <van-field v-model="formData.schjny" name="schjny" label="上次汇缴年月" readonly />
        <van-field v-model="formData.jcjsny" name="jcjsny" label="本次修改生效年月" readonly />
      </van-cell-group>
      <van-cell-group title="变更信息">
        <app-form-picker
          required
          v-model="formData.xjcbl"
          name="xjcbl"
          label="变更后缴存比例"
          placeholder="请选择变更后缴存比例"
          :columns="[
            { id: '1', text: '10%' },
            { id: '2', text: '20%' },
            { id: '3', text: '30%' },
          ]"
          :rules="[{ required: true, message: '请选择变更后缴存比例' }]"
        ></app-form-picker>
        <van-field
          required
          v-model="formData.xyjce"
          name="xyjce"
          label="变更后月缴存额"
          placeholder="请输入变更后月缴存额"
          maxlength="100"
          :rules="[{ required: true, message: '请输入变更后月缴存额' }]"
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
  name: 'ChsWebJcetz',

  data() {
    return {
      formData: {},
    };
  },

  mounted() {},

  methods: {
    onSubmit() {},
  },
};
</script>

<style lang="less" scoped>
</style>