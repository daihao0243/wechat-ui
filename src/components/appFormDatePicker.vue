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
  <datePicker
    v-model:show="showPicker"
    v-model="dateValue"
    :format="format"
    :range="range"
    :min-date="minDate"
    :max-date="maxDate"
    @update:modelValue="$emit('update:modelValue', $event)"
  ></datePicker>
</template>

<script>
import { sysStore } from '@/stores/sysInfo';
import { dateFormat } from '@/utils';
import datePicker from '@/components/app-date/picker';

export default {
  name: '',
  data() {
    return {
      dateValue: '',
      val: '',
      showPicker: false,
      reload: true,
    };
  },
  components: {
    datePicker,
  },
  props: {
    required: {
      type: Boolean,
      default: false,
    },
    modelValue: [String, Array, Object],
    label: String,
    rules: Array,
    placeholder: String,
    range: Boolean,
    format: {
      type: String,
      default: 'YYYY-MM-DD',
    },
    minDate: {
      type: Object,
      default: null,
    },
    maxDate: {
      type: Object,
      default: null,
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
        if (e && e.length) {
          if (this.range) {
            this.val = dateFormat(e[0], this.format) + '-' + dateFormat(e[1], this.format);
            this.dateValue = e;
          } else {
            this.val = dateFormat(e, this.format);
            this.dateValue = e;
          }
        }
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

  methods: {},
};
</script>

<style lang="less" scoped>
</style>