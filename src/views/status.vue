<template>
  <van-empty :description="status.text" :image="status.icon">
    <van-button round type="danger" class="bottom-button" to="/">返回首页</van-button>
  </van-empty>
</template>

<script>
export default {
  name: 'sysStatus',

  data() {
    return {};
  },
  computed: {
    status() {
      let type = this.$route.params.type;
      let res = {
        text: '',
        icon: '',
      };
      if (type == 'success') {
        res.text = '操作成功!';
        res.icon = '/static/img/chaxun07.png';
      }
      return res;
    },
  },
  mounted() {
    // this.$router.replace('/');
  },

  methods: {},
};
</script>

<style lang="less" scoped>
</style>