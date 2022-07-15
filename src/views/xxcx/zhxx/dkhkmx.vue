<template>
  <div>
    <nav-bar></nav-bar>
    <app-list :list="list">
      <template #ywlx="{ row }">
        <van-tag type="success">{{ row.value }}</van-tag>
      </template>
    </app-list>
  </div>
</template>

<script>
export default {
  name: 'xxcxZhxxDkhkmx',

  data() {
    return {
      list: [
        {
          title: '2022-07-13 16:22:47',
          ywlx: {
            title: '还款类型',
            value: '正常',
            slot: 'ywlx',
          },
          hkbj: {
            title: '本金',
            value: '2100',
            format: 'money',
            unit: '元',
          },
          hklx: {
            title: '利息',
            value: '12321',
            format: 'money',
            unit: '元',
          },
          hkfx: {
            title: '罚息',
            value: '12321',
            format: 'money',
            unit: '元',
          },
          hkh: {
            title: '合计',
            value: '12321',
            format: 'money',
            unit: '元',
          },
        },
      ],
    };
  },

  mounted() {
    for (let i = 0; i < 10; i++) {
      this.list.push(this.list[0]);
    }
  },

  methods: {},
};
</script>

<style lang="less" scoped>
</style>