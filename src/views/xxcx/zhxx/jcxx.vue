<template>
  <div>
    <nav-bar></nav-bar>
    <app-list :list="list">
      <template #jczt="{ row }">
        <van-tag type="success">{{ row.value }}</van-tag>
      </template>
    </app-list>
  </div>
</template>

<script>
export default {
  name: 'xxcxZhxxJcxx',

  data() {
    return {
      list: {
        xm: {
          title: '姓名',
          value: '邓**',
        },
        zjh: {
          title: '证件号',
          value: '4****************8',
        },
        dwmc: {
          title: '单位名称',
          value: '广西前锦众程人力资源有限公司',
        },
        hjny: {
          title: '缴存年月',
          value: new Date(),
          format: ['date', 'YYYYMMDD'],
        },
        jczt: {
          title: '缴存状态',
          value: '正常',
          slot: 'jczt',
        },
        gz: {
          title: '缴存基数',
          value: '16746',
        },
        jcbl: {
          title: '缴存比例',
          value: '12.0%',
        },
        grjce: {
          title: '个人月缴存额',
          value: '2010.0',
          unit: '元',
          format: 'money',
        },
        dwjce: {
          title: '单位月缴存额',
          value: '2010.0',
          unit: '元',
          format: 'money',
        },
      },
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
</style>