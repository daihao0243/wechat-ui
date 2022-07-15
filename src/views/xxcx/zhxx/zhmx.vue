<template>
  <div>
    <nav-bar></nav-bar>
    <table class="table" cellpadding="0" cellspacing="0">
      <tr>
        <th>业务类型</th>
        <th>汇缴年月</th>
        <th>记账日期</th>
        <th>发生金额</th>
      </tr>
      <tr v-for="(item, index) in list" :key="index">
        <td>{{ item.ywlx }}</td>
        <td>{{ item.hjny }}</td>
        <td>{{ item.jzrq }}</td>
        <td style="color: #f44336">{{ item.zje }}元</td>
      </tr>
    </table>
    <p class="app-tip">
      备注：查询信息为最近一年明细信息，如对查询数据有疑问，请持有效身份证明到网点进行核实。
    </p>
  </div>
</template>

<script>
export default {
  name: 'xxcxZhxxZhmx',
  data() {
    return {
      list: [
        {
          ywlx: '汇缴',
          hjny: '202201',
          jzrq: '20220216',
          zje: '4020.0',
        },
        {
          ywlx: '汇缴',
          hjny: '202201',
          jzrq: '20220216',
          zje: '4020.0',
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.table {
  width: 100%;
  th {
    color: #666;
  }
  th,
  td {
    padding: 10px 0;
    text-align: center;
    font-size: 13px;
    border-bottom: 1px solid #ebebeb;
  }
}
</style>