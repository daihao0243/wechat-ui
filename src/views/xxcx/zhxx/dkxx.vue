<template>
  <div>
    <nav-bar></nav-bar>
    <app-list :list="list"></app-list>
  </div>
</template>

<script>
export default {
  name: 'xxcxZhxxDkxx',

  data() {
    return {
      list: {
        dkzh: {
          title: '贷款账号',
          value: '',
        },
        sqbh: {
          title: '申请编号',
          value: '',
        },
        hkfs: {
          title: '还款方式',
          value: '',
        },
        dkyh: {
          title: '贷款银行',
          value: '',
        },
        fkrq: {
          title: '贷款放款日期',
          value: new Date(),
          format: ['date', 'YYYYMMDD'],
        },
        dkzzrq: {
          title: '贷款终止日期',
          value: new Date(),
          format: ['date', 'YYYYMMDD'],
        },
        dkqx: {
          title: '贷款年限',
          value: '',
        },
        dkje: {
          title: '贷款金额',
          value: '',
        },
        yshbjje: {
          title: '已实还本金金额',
          value: '',
        },
        yshlxje: {
          title: '已实还利息金额',
          value: '',
        },
        dkyezs: {
          title: '贷款余额',
          value: '',
        },
        yqbjzs: {
          title: '逾期未还本金',
          value: '',
        },
        yqlxzs: {
          title: '逾期未还利息',
          value: '',
        },
        xqyhke: {
          title: '下期月还款额',
          value: '',
        },
        hkzt: {
          title: '还款状态',
          value: '',
        },
        dqhkrq: {
          title: '当前还款日期',
          value: '',
        },
        hkzh: {
          title: '还款账号',
          value: '',
        },
        hkzhmc: {
          title: '还款账户名称',
          value: '',
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