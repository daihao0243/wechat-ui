<template>
  <div>
    <nav-bar></nav-bar>
    <div class="title-bar">
      <span>项目</span>
      <span>当前挂牌年利率</span>
    </div>
    <van-cell-group>
      <template v-for="(item, index) in list" :key="index">
        <van-cell :title="item.title">
          <span style="color: #f44336">{{ item.value }}</span>
        </van-cell>
      </template>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'ChsWebGjjll',

  data() {
    return {
      list: [
        {
          title: '公积金5年及以下利率',
          value: '10.20%',
        },
        {
          title: '公积金5年以上利率',
          value: '10.20%',
        },
        {
          title: '商业1至5年（含5年）利率',
          value: '10.20%',
        },
        {
          title: '商业5年以上利率',
          value: '10.20%',
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.title-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: #999;
  padding: 4px 10px;
}
</style>