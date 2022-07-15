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
    <div class="popup-header">
      <p class="title">选择日期</p>
      <button class="close-popup-btn" type="button" @click="showPicker = false">
        <van-icon name="cross" />
      </button>
    </div>
    <app-date
      v-model="dateval"
      v-if="reload"
      :format="format"
      :range="range"
      :min-date="new Date()"
    ></app-date>
    <responsive-action>
      <van-button round block type="primary" @click="onConfirm"> 确定 </van-button>
    </responsive-action>
  </van-popup>
</template>

<script>
import { sysStore } from '@/stores/sysInfo';
import { dateFormat } from '@/utils';

export default {
  name: '',
  data() {
    return {
      dateval: [],
      val: '',
      showPicker: false,
      reload: true,
    };
  },

  props: {
    required: {
      type: Boolean,
      default: false,
    },
    modelValue: [String, Array],
    label: String,
    rules: Array,
    placeholder: String,
    range: Boolean,
    format: {
      type: String,
      default: 'YYYYMMDD',
    },
  },
  watch: {
    isMobile(val) {
      this.reload = false;
      setTimeout(() => {
        this.reload = true;
      }, 300);
    },
    modelValue: {
      handler(e) {
        this.val = dateFormat(e, this.format);
        this.dateval = e;
      },
      immediate: true,
    },
  },
  computed: {
    isMobile() {
      return sysStore().isMobile;
    },
  },
  mounted() {},

  methods: {
    onConfirm() {
      this.val = this.range ? this.dateval.join('-') : this.dateval;
      this.$emit('update:modelValue', this.dateval);
      this.showPicker = false;
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