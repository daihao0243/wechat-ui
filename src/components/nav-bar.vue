<template>
    <van-nav-bar :title="title" :left-text="leftText" fixed left-arrow placeholder @click-left="onClick"/>
</template>

<script>
export default {
  name: 'WechatUiNavBar',

  data() {
    return {
      
    };
  },
  props:{
    title:String,
    'left-text':{
      default:'返回',
      type:String
    }
  },
  mounted() {
    
  },

  methods: {
    onClick(){
      window.history.back()
    }
  },
};
</script>

<style lang="less" scoped>

</style>