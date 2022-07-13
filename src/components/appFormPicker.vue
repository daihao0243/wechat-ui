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
    <van-picker :columns="list" @confirm="onConfirm" @cancel="showPicker = false" />
  </van-popup>
</template>

<script>
export default {
  name: '',
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
    type: String, //类型 bank
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
  computed: {
    list() {
      let columns = this.columns;
      if (this.type == 'bank') {
        columns = [
          { id: '01', text: '工商银行' },
          { id: '02', text: '中国银行' },
          { id: '03', text: '建设银行' },
        ];
      } else if (this.type == 'hyzk') {
        columns = [
          { id: '01', text: '已婚' },
          { id: '02', text: '未婚' },
          { id: '03', text: '丧偶' },
        ];
      }
      return columns;
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