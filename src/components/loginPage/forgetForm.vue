<template>
  <div>
    <div id="forgetTabLg" class="hidden-md-and-down" placement="buttom">
      <el-tooltip content="返回登录">
        <div @click="changeStateToLogin()" class="toLogin"><i class="bi bi-arrow-left-circle"></i></div>
      </el-tooltip>
      <h1 align="center" style="color:white;font-family: fantasy;padding-top: 5vh;">Reset Password</h1>
      <div style="width:85%;margin: 20px auto;">
        <el-form ref='resetForm' :model="resetForm">
          <el-form-item :class="{inputError:phoneNumberIsError}">
            <label>手机号</label>
            <el-input @focus="clearError()" v-model="resetForm.phoneNumber" type="text" placeholder="Input your phone numbers"></el-input>
            <small>请输入您的账号所绑定的手机号</small>
          </el-form-item>
          <el-form-item :class="{inputError:VCinputError}">
            <label style="display: block;">请输入验证码</label>
            <el-input @focus="clearError()" v-model="resetForm.inputVC" type="text" placeholder="Input your verification code" style="width: 60%;"></el-input>
            <el-button style="width: 35%;" v-if="!isGetVC" @click="getVCBtn()">获取验证码</el-button>
            <el-button v-if="isGetVC" style="width: 35%;" disabled>已获取验证码({{getVCCD}}s)</el-button>
            <small style="display: block;">点击 发送验证码 按钮 即获取验证码短信</small>
          </el-form-item>
          <el-form-item :class="{inputError:PasswordIsError}">
            <label>新密码</label>
            <el-input @focus="clearError()" v-model="resetForm.password" type="password" placeholder="Input your password"></el-input>
            <small>必须包含大小写字母和数字的组合,可以使用特殊字符,6-18位</small>
          </el-form-item>
          <el-form-item :class="{inputError:PasswordAgainIsError}">
            <label>再次输入新密码</label>
            <el-input @focus="clearError()" v-model="resetForm.passwordAgain" type="password" placeholder="Input your password again"></el-input>
            <small>请在此输入密码</small>
          </el-form-item>
          <el-form-item style="text-align: center;" class="pt-2">
            <el-button style="height: 7vh;width: 9vw;font-size: 1.3rem; border-radius: .3rem;" @click="testNow()">完成重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div id="forgetTabMd" class="hidden-lg-and-up" placement="buttom">
      <el-tooltip content="返回登录">
        <div @click="changeStateToLogin()" class="toLogin"><i class="bi bi-arrow-left-circle"></i></div>
      </el-tooltip>
      <h1 align="center" style="color:white;font-family: fantasy;padding-top: 5vh;">Reset Password</h1>
      <div style="width:85%;margin: 20px auto;">
        <el-form ref='resetForm' :model="resetForm">
          <el-form-item :class="{inputError:phoneNumberIsError}">
            <label>手机号</label>
            <el-input @focus="clearError()" v-model="resetForm.phoneNumber" type="text" placeholder="Input your phone numbers"></el-input>
            <small>请输入您的账号所绑定的手机号</small>
          </el-form-item>
          <el-form-item :class="{inputError:VCinputError}">
            <label style="display: block;">请输入验证码</label>
            <el-input @focus="clearError()" v-model="resetForm.inputVC" type="text" placeholder="Input your verification code" style="width: 60%;"></el-input>
            <el-button style="width: 35%;" v-if="!isGetVC" @click="getVCBtn()">获取验证码</el-button>
            <el-button v-if="isGetVC" style="width: 35%;" disabled>已获取验证码({{getVCCD}}s)</el-button>
            <small style="display: block;">点击 发送验证码 按钮 即获取验证码短信</small>
          </el-form-item>
          <el-form-item :class="{inputError:PasswordIsError}">
            <label>新密码</label>
            <el-input @focus="clearError()" v-model="resetForm.password" type="password" placeholder="Input your password"></el-input>
            <small>必须包含大小写字母和数字的组合,可以使用特殊字符,6-18位</small>
          </el-form-item>
          <el-form-item :class="{inputError:PasswordAgainIsError}">
            <label>再次输入新密码</label>
            <el-input @focus="clearError()" v-model="resetForm.passwordAgain" type="password" placeholder="Input your password again"></el-input>
            <small>请在此输入密码</small>
          </el-form-item>
          <el-form-item style="text-align: center;" class="pt-2">
            <el-button style="height: 8vh;width: 25vw;font-size: 1.3rem; border-radius: .3rem;" @click="testNow()">完成重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'forgetPasswordForm',
  data () {
    return {
      phoneNumberRegular: /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
      passwordRegular: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/,
      isGetVC: false,
      getVCCD: 0,
      phoneNumberIsError: false,
      VCinputError: false,
      PasswordIsError: false,
      PasswordAgainIsError: false,
      resetForm: {
        phoneNumber: '',
        VC: '123456',
        inputVC: '',
        password: '',
        passwordAgain: ''
      }
    }
  },
  props: {
    stateChoose: {
      default: ''
    },
    allUserLoginInfo: {
      default: []
    },
    resetUserLoginInfo: {
      default: {}
    }
  },
  methods: {
    changeStateToLogin () {
      this.$emit('getchangeState', 'login')
    },
    clearError () {
      this.phoneNumberIsError = false
      this.VCinputError = false
      this.PasswordIsError = false
      this.PasswordAgainIsError = false
    },
    // 获取验证码
    getVCBtn () {
      // 手机号未输入
      // 手机号格式错误
      if (!(this.phoneNumberRegular.test(this.resetForm.phoneNumber))) {
        this.$notify.error({
          title: '错误!',
          message: '手机号格式错误!'
        })
        this.phoneNumberIsError = true
        return
      }
      // 匹配
      let matching = this.allUserLoginInfo.filter(obj => obj.phoneNumber === this.resetForm.phoneNumber)
      // 未匹配到手机号
      if (matching.length === 0) {
        this.$notify.error({
          title: '错误!',
          message: '该手机号未注册!'
        })
        this.phoneNumberIsError = true
        return
      }
      this.isGetVC = true
      this.resetForm.VC = (Math.round(Math.random() * (999999 - 100000) + 100000)).toString()
      this.$notify.info({
        title: '验证码',
        message: '您所获取到的验证码为:' + this.resetForm.VC,
        duration: 60000
      })
      this.getVCCD = 60
      let VCCD = setInterval(() => {
        this.getVCCD--
        if (this.getVCCD === 0) {
          this.isGetVC = false
          clearInterval(VCCD)
        }
      }, 1000)
    },
    // 输入检测
    testNow () {
      // 手机号未输入
      // 手机号格式错误
      if (!(this.phoneNumberRegular.test(this.resetForm.phoneNumber))) {
        this.$notify.error({
          title: '错误!',
          message: '手机号格式错误!'
        })
        this.phoneNumberIsError = true
        return
      }
      // 验证码未输入
      if (this.resetForm.inputVC === '' || this.resetForm.VC === '') {
        this.$notify.error({
          title: '错误!',
          message: '验证码未输入!'
        })
        this.VCinputError = true
        return
      }
      if (this.resetForm.inputVC !== this.resetForm.VC) {
        this.$notify.error({
          title: '错误!',
          message: '验证码输入错误,请检查!'
        })
        this.VCinputError = true
        return
      }
      // 密码未输入
      // 密码格式错误
      if (!(this.passwordRegular.test(this.resetForm.password))) {
        this.test = false
        this.$notify.error({
          title: '错误!',
          message: '密码格式错误，请按照格式进行输入'
        })
        this.PasswordIsError = true
        return
      }
      // 密码未再次输入
      if (this.resetForm.passwordAgain === '') {
        this.test = false
        this.$notify.error({
          title: '错误!',
          message: '请再次输入密码!'
        })
        this.PasswordAgainIsError = true
        return
      }
      // 两次密码不一致
      if (this.resetForm.passwordAgain !== this.resetForm.password) {
        this.test = false
        this.$notify.error({
          title: '错误!',
          message: '两次密码输入不一致!'
        })
        this.PasswordIsError = true
        this.PasswordAgainIsError = true
        return
      }
      this.success()
    },
    success () {
      this.$notify({
        title: '重置成功!',
        message: '密码已经重置，正跳转登录页……',
        type: 'success'
      })
      // 传递新用户的登录信息
      let matching = this.allUserLoginInfo.filter(obj => obj.phoneNumber === this.resetForm.phoneNumber)
      this.resetUserLoginInfo.id = matching[0].id
      this.resetUserLoginInfo.password = this.resetForm.password
      this.$emit('getResetPassword', this.resetUserLoginInfo)
      // 延迟跳转
      setTimeout(() => {
        this.changeStateToLogin()
      }, 3000)
    }
  }
}
</script>

<style>
.inputError{
  padding: 3px;
  border-radius: 5px;
  background-color: rgb(255, 94, 97);
}
#forgetTabLg{
  width: 30vw;
  background-color: rgba(0,0,0,0.6);
  color: white;
  height: 100vh;
  position: fixed;
  right: 0;
}
#forgetTabMd{
  height: 97vh;
  width: 85vw;
  background-color: rgba(0,0,0,0.6);
  color: white;
  margin-top: 2vh;
  margin-left: 7vw;
  border-radius: 15px;
}
.toLogin{
  font-size: 2.5rem;
  position: absolute;
  padding-top: 3vh;
  left: 2vw;
  height: 7vh;
  color: rgb(0, 123, 255);
  cursor: pointer;
}
#forgetTabMd .toLogin{
  left: 10vw;
}
.toLogin:hover{
  color: white;
}
</style>
