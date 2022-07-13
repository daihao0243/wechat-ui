<template>
  <div>
    <nav-bar></nav-bar>
    <van-form @submit="onSubmit">
      <van-cell-group>
        <van-field v-model="formData.xm" name="xm" readonly label="姓名" />
        <van-field v-model="formData.zjh" name="zjh" readonly label="证件号" />
        <van-field v-model="formData.grye" name="grye" readonly label="账户余额" />
        <van-field v-model="formData.sqtqbj" name="sqtqbj" readonly label="提取金额" />
        <van-field v-model="formData.tqyymc" name="tqyymc" readonly label="销户原因" />
        <van-field v-model="formData.czsj" name="czsj" readonly label="申办日期" />
        <van-field v-model="formData.hjny" name="hjny" readonly label="缴存年月" />
        <van-field v-model="formData.skyhmc" name="skyhmc" readonly label="收款银行" />
        <van-field v-model="formData.skzh" name="skzh" readonly label="收款账号" />
        <van-field
          required
          v-model="formData.lxsj"
          label="联系手机"
          placeholder="请输入联系手机"
          maxlength="11"
          :rules="[{ required: true, message: '请输入联系手机' }]"
        />
      </van-cell-group>
      <responsive-action>
        <van-button round block type="primary" native-type="submit"> 提交 </van-button>
      </responsive-action>
    </van-form>
    <ul style="background-color: #f4f4f4; padding-left: 20px" id="yhxx">
      <li>
        <div style="margin-right: 10px" class="wx">
          <p style="padding-left: 0px">温馨提示：</p>
        </div>
      </li>
    </ul>
    <app-dialog v-model:show="showDialog" title="提示" show-cancel-button @confirm="onConfirm">
      <div style="padding: 20px">
        <span style="text-align: right">联系手机：</span>
        <span>{{ formData.lxsj }}</span>
        <p>备注：本申请提交后即时生效不可修改。</p>
      </div>
    </app-dialog>
  </div>
</template>

<script>
export default {
  name: '',

  data() {
    return {
      showDialog: false,
      formData: {
        lxsj: '',
      },
    };
  },

  mounted() {},

  methods: {
    onSubmit(e) {
      this.showDialog = true;
      // this.$dialog
      //   .confirm({
      //     title: '提示',
      //     message: `联系手机：${this.formData.lxsj}本申请提交后即时生效不可修改。`,
      //   })
      //   .then(() => {})
      //   .catch(() => {});
    },
    onConfirm() {
      this.$router.push({
        path: '/page/status/success',
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>