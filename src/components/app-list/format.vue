<template>
  <span>{{ text }}</span>
</template>

<script>
import accounting from '@/utils/accounting.min.js';
import { dateFormat } from '@/utils';
export default {
  name: 'ChsWebAppListFormat',

  data() {
    return {};
  },
  computed: {
    text() {
      let val = this.value;
      if (typeof this.type == 'object') {
        if (this.type[0] == 'date') {
          val = dateFormat(val, this.type[1]);
        }
      } else if (this.type == 'money') {
        val = accounting.formatMoney(val, '');
      }

      return val;
    },
  },
  props: {
    value: {},
    type: {
      type: [String, Array],
    },
  },
  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
</style>