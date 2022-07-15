<template>
  <template v-if="isList">
    <van-cell-group
      class="app-cell-group"
      v-for="(items, index) in list"
      :key="index"
      :title="items.title"
    >
      <van-cell v-for="(item, index) in items" :key="index" :title="item.title" :border="false">
        <slot v-if="item.slot" :name="item.slot" :row="item"></slot>
        <Format v-else-if="item.format" :value="item.value" :type="item.format"></Format>
        <span v-else>
          {{ item.value }}
        </span>
        <em v-if="item.unit">{{ item.unit }}</em>
      </van-cell>
    </van-cell-group>
  </template>
  <template v-else>
    <van-cell-group class="app-cell-group" :border="false">
      <van-cell v-for="(item, index) in list" :key="index" :title="item.title">
        <slot v-if="item.slot" :name="item.slot" :row="item"></slot>
        <Format v-else-if="item.format" :value="item.value" :type="item.format"></Format>
        <span v-else>
          {{ item.value }}
        </span>
        <em v-if="item.unit">{{ item.unit }}</em>
      </van-cell>
    </van-cell-group>
  </template>
</template>

<script>
import Format from './format';
export default {
  name: 'ChsWebAppList',

  data() {
    return {};
  },
  props: {
    list: {
      type: [Object, Array],
    },
  },
  computed: {
    isList() {
      return this.list && this.list.length;
    },
  },
  components: {
    Format,
  },
  mounted() {},

  methods: {},
};
</script>

<style lang="less">
.app-cell-group {
  .van-cell__title {
    color: #999;
  }
  .van-cell__value {
    color: #282828;
  }
  em {
    font-style: normal;
  }
}
</style>