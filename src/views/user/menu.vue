<template>
  <van-nav-bar :title="title" left-text="返回" left-arrow fixed placeholder />
  <!-- <grid :title="title">
    <grid-item v-for="(sub, subkey) in list" :key="subkey">
      <div class="menu-item">
        <div class="icon">
          <img :src="sub.icon" alt="" />
        </div>
        <p>{{ sub.title }}</p>
      </div>
    </grid-item>
  </grid> -->
  <van-cell-group>
    <van-cell v-for="(sub, subkey) in list" is-link :key="subkey" :title="sub.title">
      <template #icon>
       <div class="icon">
          <img :src="sub.icon" alt="" />
        </div>
      </template>
    </van-cell>
  </van-cell-group>
</template>

<script>
// import Grid from '@/components/grid';
// import GridItem from '@/components/grid/item';
export default {
  name: 'WechatUiMenu',

  data() {
    return {
      title: '',
      list: [],
    };
  },
  // components: { Grid, GridItem },
  mounted() {
    this.title = this.$route.query.title;
    try {
      this.list = JSON.parse(this.$route.query.list);
    } catch (error) {
      console.log(error);
    }
  },

  methods: {},
};
</script>

<style lang="less" scoped>
.menu-item {
  // display: flex;
  // flex-direction: column;
  // height: 100%;
  // align-items: center;
  // justify-content: center;
  // color: #282828;
 
  p {
    padding: 5px 0;
    height: 30px;
    display: block;
    font-size: 13px;
    line-height: 15px;
    padding: 0 5px;
    text-align: center;
  }
}
 .icon {
    width: 25px;
    height: 25px;
    display: block;
    // margin: 15px 0 5px 0;
    margin-right: 10px;
    display: flex;
    // background: #ebebeb;
    line-height: inherit;
    img {
      width: 80%;
      margin: auto;
    }
  }
</style>