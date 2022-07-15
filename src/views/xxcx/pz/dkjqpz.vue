<template>
  <div>
    <nav-bar></nav-bar>
    <app-list :list="list">
      <template #jczt="{ row }">
        <van-tag type="success">{{ row.value }}</van-tag>
      </template>
    </app-list>
    <responsive-action>
      <van-button round block type="primary" icon="down"> 下载 </van-button>
    </responsive-action>
  </div>
</template>

<script>
export default {
  name: 'ChsWebDkjqpz',

  data() {
    return {
      list: {
        dklx: {
          title: '贷款类型',
          value: '',
        },
        sqbh: {
          title: '贷款编号',
          value: '',
        },
        jkrxm: {
          title: '主借款人姓名',
          value: '',
        },
        jkrzjh: {
          title: '主借款人证件号',
          value: '',
        },
        fwzl: {
          title: '房屋地址',
          value: '',
        },
        dkhkfs: {
          title: '还款方式',
          value: '',
        },
        dkzt: {
          title: '贷款状态',
          value: '',
        },
        dkjqrq: {
          title: '还清日期',
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