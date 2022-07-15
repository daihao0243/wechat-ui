<template>
  <div class="r-page">
    <slot name="header"></slot>
    <div class="r-page-body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.r-page {
}
.r-page-body {
  margin: auto;
}
@media (min-width: 800px) {
  .r-page-body {
    max-width: 500px;
  }
}
</style>