<template>
  <div>
    <nav-bar title="注册"></nav-bar>
    <van-form @submit="onSubmit">
      <div v-show="step === 0">
        <van-cell-group>
          <van-field v-model="type" label="证件类型" placeholder="证件类型" readonly />
          <van-field
            required
            v-model="idcard"
            label="身份证号码"
            placeholder="请输入身份证号码"
            readonly
            is-link
            @click="showIDCardKeyboard = true"
            :rules="[{ required: true, message: '请输入身份证号码' }]"
          />
          <van-field
            required
            v-model="username"
            label="姓名"
            placeholder="请输入姓名"
            :rules="[{ required: true, message: '请输入姓名' }]"
          />
          <van-field
            required
            v-model="phone"
            label="手机号码"
            placeholder="请输入手机号码"
            readonly
            is-link
            @click="showNumberKeyboard = true"
            :rules="[{ required: true, message: '请输入手机号码' }]"
          />
        </van-cell-group>
        <div style="margin: 16px;overflow:auto">
          <van-button style="float:right" round type="primary" @click="step++">下一步</van-button>
        </div>
      </div>
      <div v-show="step === 1">
        <van-cell-group>
          <van-field v-model="gender" label="证件类型" readonly />
          <van-field v-model="date" label="出生日期" readonly />
          <van-field v-model="age" label="年龄" readonly />
          <Picker
            required
            label="职业类别"
            placeholder="请选择"
            :rules="[{ required: true, message: '请选择职业类别' }]"
            :columns="[
              { id: '01', text: '个体工商户' },
              { id: '02', text: '个体工商户雇工' },
              { id: '03', text: '非全日制人员' },
              { id: '04', text: '新就业形态人员' },
              { id: '05', text: '其他' },
            ]"
            v-model="lhjyryzylx"
          ></Picker>
          <Picker
            label="职业"
            placeholder="请选择"
            :columns="[{ id: '91', text: '灵活就业人员' }]"
            v-model="lhjyryzylx"
          ></Picker>
          <Picker
            label="学历"
            placeholder="请选择"
            :columns="[
              { id: '1', text: '名誉博士' },
              { id: '2', text: '博士' },
              { id: '3', text: '硕士' },
              { id: '4', text: '学士' },
              { id: '5', text: '专科' },
              { id: '6', text: '高中及职高' },
              { id: '7', text: '中专' },
              { id: '8', text: '初中或初中以下' },
              { id: '9', text: '博士及同等学历' },
              { id: '10', text: '硕士及同等学历' },
              { id: '11', text: '双学士' },
              { id: '12', text: '本科及同等学历' },
            ]"
            v-model="lhjyryzylx"
          ></Picker>
          <van-field
            v-model="message"
            rows="2"
            autosize
            label="家庭住址"
            type="textarea"
            maxlength="500"
            placeholder="请输入家庭住址"
            show-word-limit
          />
        </van-cell-group>
        <div style="margin: 16px;overflow:auto">
          <div style="float:right;">
          <van-button style="margin-right:10px" round type="default" @click="step--">上一步</van-button>
          <van-button round type="primary" native-type="submit">提  交</van-button>
          </div>
        </div>
      </div>
    </van-form>
    <van-number-keyboard
      :show="showIDCardKeyboard"
      extra-key="X"
      v-model="idcard"
      :maxlength="18"
      close-button-text="完成"
      @blur="showIDCardKeyboard = false"
    />
    <van-number-keyboard
      :show="showNumberKeyboard"
      v-model="phone"
      :maxlength="18"
      close-button-text="完成"
      @blur="showNumberKeyboard = false"
    />
    <div class="tip">
      <p><strong>温馨提示：</strong>标注 <span class="red">*</span> 为必填项</p>
      <p><strong>备注说明：</strong>当前客户端仅支持通过身份证号开户</p>
      <p><strong>付款模式：</strong>选择每月主动缴费或者由银行代为缴费</p>
      <p>
        <strong>付款渠道：</strong>付款时使用的方式，如果您选择银行代扣汇缴模式，则默认为银联汇款
      </p>
    </div>
  </div>
</template>

<script>
import Picker from './picker';
export default {
  name: 'WechatUiIndex',

  data() {
    return {
      step: 0,
      type: '身份证',
      idcard: '',
      username: '',
      phone: '',
      gender: '男',
      date: '1993-3-1',
      age: '28',
      lhjyryzylx: '',
      message:'',
      showIDCardKeyboard: false,
      showNumberKeyboard: false,
    };
  },
  components: {
    Picker,
  },
  mounted() {},

  methods: {
    onSubmit() {},
  },
};
</script>

<style lang="less" scoped>
.tip {
  padding: 15px;
  font-size: 14px;
  p {
    margin: 10px 0;
  }
  .red {
    color: red;
  }
}
</style>