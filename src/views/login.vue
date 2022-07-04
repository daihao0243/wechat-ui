<template>
  <div>
    <div class="login-background" style="background-image: url('/img/bg.jpg')"></div>
    <div class="login-background-cover"></div>
    <div class="login">
      <div class="login-logo">
        <img class="login-logo-img" src="/img/logo.png" />
        <p class="login-logo-text">南宁住房公积金管理中心</p>
      </div>
      <div class="login-input-wrap">
        <van-icon class="icon" name="user-o" />
        <div class="login-input">
          <input class="input" placeholder="请输入用户名" type="text" maxlength="20" />
        </div>
      </div>
      <div class="login-input-wrap">
        <i class="icon iconfont icon-lock"></i>
        <div class="login-input">
          <input class="input" placeholder="请填写密码( 8-20位 )" type="password" maxlength="25" />
        </div>
      </div>
      <img
        alt="如果看不清楚，请单击图片刷新！"
        style="display: none"
        src="/open/frame/captcha.jpg"
      />
      <div class="login-input-wrap">
        <i class="icon iconfont icon-community"></i>

        <div class="login-input msg-code">
          <input class="input" placeholder="请输入手机验证码" maxlength="11" type="text" />
        </div>
        <button class="send-button">获取验证码</button>
      </div>
      <div class="login-action">
        <a href="/register">立即注册</a>
        <span class="login-action-line"></span>
        <a href="${ctx }/open/zhmm/1.html">忘记密码？</a>
      </div>
      <div class="login-button-group">
        <button class="login-button" @click="onLogin">登录</button>
        <button class="login-button empty">刷脸登录</button>
        <!-- <div class="login-action">
					<a href="">立即注册</a>
					<span class="login-action-line"></span>
					<a href="">忘记密码？</a>
				</div> -->
      </div>
    </div>
    <div class="login-bottom">
      <p class="mdui-typo-caption" style="color: #f44336">
        请勿将身份证号码、密码或短信验证码等信息提交第三方，以免造成信息安全泄露
      </p>
      <p class="mdui-typo-caption">
        若登录页面出现异常或操作过程中遇到系统报错，<span
          style="color: #00a6f7"
          @click="showdialog = true"
          >请联系我们</span
        >
      </p>
      <!-- <p class="mdui-typo-caption" style="color: #00a6f7" @click="showdialog = true">业务咨询</p> -->
      <p class="desc">版权所有：南宁住房公积金管理中心</p>
    </div>
  </div>
  <Dialog v-model:show="showdialog">
    <div class="dialog-body">
      <p>业务咨询：<span style="color: #00a6f7">0771-12329</span></p>
      <p>热线咨询服务时间（法定工作日）：上午9:00-12:00、下午13:00-17:00</p>
      <p>城区营业部办公时间（法定工作日）：上午9:00-12:00、下午13:00-17:00</p>
      <p>各县管理部办公时间（法定工作日）：上午8:00-12:00、下午15:00-18:00</p>
    </div>
  </Dialog>
</template>
<script>
export default {
  name: 'WechatUiLogin',
  data() {
    return {
      showdialog: false,
      activeNames: ['1'],
    };
  },

  mounted() {},

  methods: {
    onLogin(){
      this.$router.push({
        path:'/'
      })
    },
    onShowDetail() {
      this.show = true;
      // this.showdialog = true;
    },
  },
};
</script>

<style lang="less" scoped>
.login-background {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.login-background-cover {
  background-color: #fff;
  opacity: 0.9;
  overflow: hidden;
}

.login-background,
.login-background-cover {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
}

.login {
  padding: 40px 30px 0 30px;
  position: relative;
  z-index: 10;
  margin: 0 auto;
  max-width: 400px;
}

.login-logo {
  text-align: center;
  margin: auto auto 50px auto;
}

.login-logo-img {
  width: 66px;
  height: 66px;
  display: block;
  margin: auto;
}

.login-logo-text {
  font-size: 22px;
  display: block;
  line-height: 2;
  color: #282828;
  font-weight: bold;
}

.login-button {
  margin: 20px auto;
  display: block;
  width: 100%;
  outline: none;
  border: 1px solid #00a6f7;
  border-radius: 50px;
  height: 40px;
  color: #fff;
  font-size: 14px;
  background: #00a6f7;
}

.login-button:disabled {
  border: 1px solid #f7f7f7;
  background: #afb8bd;
}

.login-button.disabled {
  opacity: 0.5;
}

.login-button.empty {
  background: none;
  color: #00a6f7;
}

.login-button.shadow {
  box-shadow: 0px 1px 10px 1px rgba(0, 163, 245, 0.5);
}

.login-input-wrap {
  position: relative;
  border: 1px solid #fff;
  border-radius: 40px;
  margin-bottom: 15px;
  border-radius: 5px;
  background: #fff;
  overflow: hidden;
}

input:-internal-autofill-previewed,
input:-internal-autofill-selected {
  transition: background-color 5000s ease-in-out 0s !important;
}

input[type='text'] {
  padding: 0;
}

.login-input-wrap .icon {
  margin: 10px 0 0 8px;
  display: block;
  width: 30px;
  position: absolute;
  text-align: center;
  font-size: 18px;
}

.login-input {
  height: 40px;
  padding: 0 20px 0 40px;
}

.login-input.msg-code {
  margin-right: 70px;
}

.login-input input {
  width: 100%;
  outline: none;
  background: none;
  border: none;
  height: 40px;
}

.login-action {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
}

.login-action a {
  text-decoration: none;
  color: #606060;
  font-size: 15px;
}

.login-action-line {
  width: 1px;
  min-width: 1px;
  height: 20px;
  margin: 0 5px;
  display: inline-block;
  background: #d3d3d3;
}

.send-button {
  width: 90px;
  position: absolute;
  outline: none;
  background: none;
  right: 0;
  top: 0;
  height: 40px;
  border: none;
  font-size: 14px;
  color: #00a6f7;
  white-space: nowrap;
}

.send-button:disabled {
  opacity: 0.6;
}

.login-bottom {
  margin: 30px;
  position: relative;
  z-index: 10;
  text-align: center;

  .desc {
    color: #9195a3;
    text-align: center;
  }
}

.login-bottom p {
  padding: 5px 0;
  margin: 0;
  line-height: 1.3;
  font-size: 13px;
}

.login-button-group {
  margin-top: 50px;
}
.dialog-body {
  padding: 20px;
  font-size: 14px;
  p {
    margin-top: 10px;
  }
}
</style>