<template>
  <div>
    <nav-bar></nav-bar>
    <van-form @submit="onSubmit">
      <app-form-picker
        required
        v-model="formData.yewlx"
        label="业务类型"
        placeholder="请选择业务类型"
        :columns="yewlx"
        :rules="[{ required: true, message: '请选择业务类型' }]"
      ></app-form-picker>
      <app-form-picker
        v-model="formData.wd"
        required
        label="网点"
        placeholder="请选择网点"
        type="wd"
        :rules="[{ required: true, message: '请选择网点' }]"
      ></app-form-picker>
      <app-form-date-picker
        v-model="formData.date"
        required
        label="预约日期"
        placeholder="请选择预约日期"
        :rules="[{ required: true, message: '请选择预约日期' }]"
      ></app-form-date-picker>
    </van-form>
  </div>
</template>

<script>
export default {
  name: 'ChsWebWdcx',

  data() {
    return {
      formData: {
        ywlx: '',
        wd: '',
        date: '2022-7-23',
      },
      yewlx: [
        { id: '1', text: '个人预约业务' },
        { id: 'hj', text: '疫情企业缓缴预约' },
        { id: 'yq', text: '个人贷款逾期不上报预约' },
      ],
    };
  },

  mounted() {},

  methods: {
    onSubmit() {
      console.log('22');
    },
  },
};
</script>

<style lang="less" scoped>
</style>