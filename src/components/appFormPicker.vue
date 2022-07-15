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
      } else if (this.type == 'wd') {
        columns = [
          { id: '0000010', text: '青秀管理部' },
          { id: '0000011', text: '兴宁管理部' },
          { id: '0000012', text: '西乡塘管理部' },
          { id: '0000013', text: '江南管理部' },
          { id: '0000014', text: '良庆管理部' },
          { id: '0000015', text: '邕宁管理部' },
          { id: '0000002', text: '横州管理部' },
          { id: '0000003', text: '宾阳管理部' },
          { id: '0000004', text: '上林管理部' },
          { id: '0000005', text: '武鸣管理部' },
          { id: '0000006', text: '隆安管理部' },
          { id: '0000007', text: '马山管理部' },
          { id: '0000801', text: '分中心南宁管理部' },
          { id: '0000804', text: '分中心桂林管理部' },
          { id: '0000802', text: '分中心柳州管理部' },
          { id: '0000803', text: '分中心玉林管理部' },
          { id: '', text: '请选择' },
          { id: '0', text: '贷款' },
          { id: '1', text: '提取' },
          { id: '2', text: '缴存' },
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