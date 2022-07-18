<template>
  <div>
    <nav-bar></nav-bar>
    <van-cell-group title="签约业务">
      <van-cell
        v-for="(item, index) in 10"
        :key="index"
        :title="'签约业务-' + item"
        is-link
        value="查看"
        @click="onShowDetail"
      />
    </van-cell-group>
    <app-dialog v-model:show="showdialog" title="详情">
      <app-list :list="list">
        <template #qyzt="{ row }">
          <van-tag type="success">{{ row.value }}</van-tag>
        </template>
      </app-list>
    </app-dialog>
  </div>
</template>

<script>
export default {
  name: 'ChsWebDkqyQkcx',

  data() {
    return {
      showdialog: false,
      list: {
        xingming: {
          title: '个人姓名',
          value: '邓**',
        },
        zjhm: {
          title: '证件号码',
          value: '450702199411178715',
        },
        zhmc: {
          title: '银行名称',
          value: '中国银行',
        },
        zjzhmc: {
          title: '签约账户名称',
          value: '450702199411178715',
        },
        zjzh: {
          title: '签约卡号',
          value: '450702199411178715',
        },
        qyzt: {
          title: '签约状态',
          value: '正常',
          slot: 'qyzt',
        },
      },
    };
  },

  mounted() {},

  methods: {
    onShowDetail() {
      this.showdialog = true;
    },
  },
};
</script>

<style lang="less" scoped>
</style>