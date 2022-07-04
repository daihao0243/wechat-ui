<template>
  <van-field
    :required="required"
    v-model="val"
    is-link
    readonly
    name="picker"
    :label="label"
    :placeholder="placeholder"
    @click="showPicker = true"
    :rules="rules"
  />
  <van-popup v-model:show="showPicker" position="bottom">
    <van-picker :columns="columns" @confirm="onConfirm" @cancel="showPicker = false" />
  </van-popup>
</template>

<script>
export default {
  name: 'WechatUiPicker',

  data() {
    return {
      val: '',
      showPicker: false,
    };
  },

  props: {
    required: {
      type: Boolean,
      default: false,
    },
    modelValue: String,
    label: String,
    rules: Array,
    columns: Array,
    placeholder: String,
  },
  watch: {
    value(e) {
      let v =
        this.columns.find((item) => {
          return item.id == e;
        }) || {};
      this.val = v.id;
    },
  },
  mounted() {},

  methods: {
    onConfirm(e) {
      this.showPicker = false;
      this.val = e.text;
      this.$emit('update:modelValue', e.id);
    },
  },
};
</script>

<style lang="less" scoped>
</style>