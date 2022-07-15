<!-- 排队情况 -->
<template>
  <table class="table" cellpadding="0" cellspacing="0">
    <tr>
      <th>营业部名称</th>
      <th>窗口数量</th>
      <th>
        提前业务
        <br />
        等待人数
      </th>
      <th>
        贷款业务
        <br />
        等待人数
      </th>
      <th>地址</th>
      <th>电话</th>
    </tr>
    <tr v-for="(item, index) in list" :key="index">
      <td>{{ item.name }}</td>
      <td>{{ item.num }}</td>
      <td>{{ item.val1 }}</td>
      <td>{{ item.val2 }}</td>
      <td>{{ item.address }}</td>
      <td>{{ item.phone }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    for (var i = 0; i < 5; i++) {
      this.list.push({
        name: '南宁公积金中心',
        num: i,
        val1: '23',
        val2: '10',
        address: '东葛望园路口',
        phone: '123213111',
      });
    }
  },
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
    text-align: left;
    font-size: 13px;
    border-bottom: 1px solid #ebebeb;
  }
}
</style>
