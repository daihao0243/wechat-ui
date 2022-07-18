<template>
  <nav-bar></nav-bar>
  <van-form @submit="onSubmit" label-width="120px">
    <van-cell-group title="账户当前信息">
      <app-form-picker
        required
        v-model="formData.fkyh"
        label="变更前缴存方式"
        placeholder="请选择变变更前缴存方式"
        :columns="[
          { id: '1', text: '缴存方式-1' },
          { id: '2', text: '缴存方式-2' },
          { id: '3', text: '缴存方式-3' },
        ]"
        :rules="[{ required: true, message: '请选择变变更前缴存方式' }]"
      ></app-form-picker>
    </van-cell-group>
    <van-cell-group title="变更信息">
      <app-form-picker
        required
        v-model="formData.jcfs"
        label="变更后缴存方式"
        placeholder="请选择变变更后缴存方式"
        :columns="[
          { id: '1', text: '缴存方式-1' },
          { id: '2', text: '缴存方式-2' },
          { id: '3', text: '缴存方式-3' },
        ]"
        :rules="[{ required: true, message: '请选择变变更后缴存方式' }]"
      ></app-form-picker>
    </van-cell-group>
    <responsive-action>
      <van-button round block type="primary" native-type="submit"> 提交 </van-button>
    </responsive-action>
  </van-form>
</template>

<script>
export default {
  name: 'ChsWebJcfsbg',

  data() {
    return {
      formData: {
        fkyh: '1',
        jcfs: '',
      },
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
</style>