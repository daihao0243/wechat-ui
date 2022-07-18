<template>
  <div class="field-item">
    <van-field
      :required="required"
      v-model="val"
      is-link
      readonly
      name="picker"
      :label="label"
      :placeholder="placeholder"
      @click="onFieldClick"
      :rules="rules"
    />
    <van-popup v-if="isMobile" v-model:show="showPicker" position="bottom">
      <van-picker :columns="list" @confirm="onConfirm" @cancel="showPicker = false" />
    </van-popup>
    <div v-else-if="showPicker" class="select-drawer" @click.stop="">
      <ul class="select-drawer-body">
        <li
          class="select-drawer-item"
          v-for="(item, index) in list"
          :key="index"
          @click="onItemClick(item)"
        >
          <span>{{ item.text }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { sysStore } from '@/stores/sysInfo';
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
    modelValue: {
      handler(e) {
        let v =
          (this.list &&
            this.list.find((item) => {
              return item.id == e;
            })) ||
          {};
        this.val = v.text;
      },
      immediate: true,
    },
    showPicker(e) {
      if (!this.isMobile && !e) {
        document.body.removeEventListener('click', this.onShowPicker, false);
      }
    },
    isMobile() {
      this.showPicker = false;
      document.body.removeEventListener('click', this.onShowPicker, false);
    },
  },
  computed: {
    isMobile() {
      return sysStore().isMobile;
    },
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
        ];
      }
      return columns;
    },
  },
  mounted() {},

  methods: {
    onFieldClick() {
      if (!this.isMobile && !this.showPicker) {
        setTimeout(() => {
          document.body.addEventListener('click', this.onShowPicker, false);
        }, 100);
      }
      this.showPicker = true;
    },
    onItemClick(row) {
      this.onConfirm(row);
      // this.onShowPicker();
    },
    onShowPicker() {
      this.showPicker = !this.showPicker;
    },
    onConfirm(e) {
      this.val = e.text;
      this.$emit('update:modelValue', e.id);
      this.showPicker = false;
    },
  },
};
</script>

<style lang="less" scoped>
.field-item {
  position: relative;
}
.select-drawer {
  left: 0;
  right: 0;
  position: absolute;
  padding: 4px 0;
  z-index: 100;
  background: #fff;
  box-shadow: 0 4px 10px #0000001a;
}
.select-drawer-body {
  max-height: 200px;
  overflow-y: auto;
}
.select-drawer-item {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 0 12px;
  font-size: 13px;
  line-height: 36px;
  text-align: left;
  cursor: pointer;
  &:hover {
    background: #ebebeb;
  }
}
</style>