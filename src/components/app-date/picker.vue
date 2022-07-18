<template>
  <van-popup position="bottom">
    <div class="popup-header">
      <p class="title">选择日期</p>
      <button class="close-popup-btn" type="button" @click="onClose">
        <van-icon name="cross" />
      </button>
    </div>
    <app-date
      v-model="value"
      :format="format"
      :range="range"
      :min-date="minDate"
      :max-date="maxDate"
    ></app-date>
    <responsive-action>
      <van-button round block type="primary" @click="onConfirm">确定</van-button>
    </responsive-action>
  </van-popup>
</template>

<script>
export default {
  name: 'ChsWebPicker',

  data() {
    return {
      value: '',
    };
  },
  props: {
    modelValue: {
      type: [String, Object, Array],
    },
    minDate: {
      type: Object,
      default: null,
    },
    maxDate: {
      type: Object,
      default: null,
    },
    range: {
      type: Boolean,
    },
    format: String,
  },
  watch: {
    modelValue: {
      handler(val) {
        this.value = val;
      },
      immediate: true,
    },
  },
  mounted() {},

  methods: {
    onClose() {
      this.$emit('update:show', false);
    },
    onConfirm() {
      this.$emit('update:modelValue', this.value);
      this.$emit('on-confirm', this.value);
      this.onClose();
    },
  },
};
</script>

<style lang="less" scoped>
.popup-header {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 40px;
  border-bottom: 1px solid #ebebeb;
  .ttile {
  }
  .close-popup-btn {
    cursor: pointer;
    top: 8px;
    right: 10px;
    position: absolute;
    outline: none;
    border: none;
    background: none;
    font-size: 20px;
  }
}
</style>