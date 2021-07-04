<template>
  <div>
    <!-- lg/xl -->
    <div id="registTabLg" class="hidden-md-and-down" placement="bottom">
      <el-tooltip content="返回登录">
        <div @click="changeStateToLogin()" class="toLogin"><i class="bi bi-arrow-left-circle"></i></div>
      </el-tooltip>
      <h1 align="center" style="color: white;font-family:fantasy;padding-top: 10vh;">Register</h1>
      <div style="width: 85%; margin: 20px auto;">
        <el-form ref="registForm" :model="registForm" v-if="nextStep===false" v-loading="test" element-loading-text="正在检验,请稍等">
          <el-form-item :class="{inputError:AccountIsError}">
            <label>账号</label>
            <el-input v-model="registForm.account" type="text" placeholder="Input your account" @focus="clearError()" minlength="5" maxlength="16"></el-input>
            <small>字母开头，允许5-16位，允许字母数字下划线</small>
          </el-form-item>
          <el-form-item :class="{inputError:PasswordIsError}">
            <label>密码</label>
            <el-input v-model="registForm.password" type="password" placeholder="Input your password" @focus="clearError()" minlength="6" maxlength="18"></el-input>
            <small>必须包含大小写字母和数字的组合,可以使用特殊字符,6-18位</small>
          </el-form-item>
          <el-form-item :class="{inputError:PasswordAgainIsError}">
            <label>请再次输入密码</label>
            <el-input v-model="registForm.passwordAgain" type="password" placeholder="Input your password again" @focus="clearError()"></el-input>
          </el-form-item>
          <el-form-item style="text-align: center;" class="pt-5">
            <el-button style="height: 7vh; width: 9vw; font-size: 1.3rem; border-radius: .3rem;" @click="firstTest()">下一步</el-button>
          </el-form-item>
        </el-form>
        <el-form v-if="nextStep" ref="registForm" :model="registForm">
          <el-form-item :class="{inputError:phoneNumberIsError}">
            <label>输入绑定的手机号码</label>
            <el-input v-model="registForm.phoneNumber" type="text" placeholder="Input your phone numbers" @focus="clearError()"></el-input>
            <small>请输入绑定的手机号码，该号码可用于登录与找回密码等操作</small>
          </el-form-item>
          <el-form-item :class="{inputError:VCinputError}">
            <label style="display: block;">输入短信验证码</label>
            <el-input v-model="registForm.inputVC" type="text" placeholder="Input your verification code" style="width: 60%;" @focus="clearError()"></el-input>
            <el-button style="width: 35%;" v-if="!isGetVC" @click="getVCBtn()">获取验证码</el-button>
            <el-button style="width: 35%;" v-if="isGetVC" disabled>已获取验证码({{getVCCD}}s)</el-button>
            <small style="display: block;">点击 发送验证码 按钮 即获取验证码短信</small>
          </el-form-item>
          <el-form-item>
            <div>
              <span id="toLastStep" style="color: white; float: right;cursor: pointer;" @click="nextStep = false">返回上一步</span>
            </div>
          </el-form-item>
          <el-form-item style="text-align: center;" class="pt-5">
            <el-button style="height: 7vh; width: 9vw; font-size: 1.3rem; border-radius: .3rem;" @click="secondsTest()">完成注册</el-button>
          </el-form-item>
        </el-form>

      </div>
    </div>
    <!-- xs/sm/md -->
    <div id="registTabMd" class="hidden-lg-and-up" placement="bottom">
      <el-tooltip content="返回登录">
        <div @click="changeStateToLogin()" class="toLogin"><i class="bi bi-arrow-left-circle"></i></div>
      </el-tooltip>
      <h1 align="center" style="color: white;font-family:fantasy;padding-top: 10vh;">Register</h1>
      <div style="width: 85%; margin: 20px auto;">
        <el-form ref="registForm" :model="registForm" v-if="nextStep===false" v-loading="test" element-loading-text="正在检验,请稍等">
          <el-form-item :class="{inputError:AccountIsError}">
            <label>账号</label>
            <el-input v-model="registForm.account" type="text" placeholder="Input your account" @focus="clearError()" minlength="5" maxlength="16"></el-input>
            <small>字母开头，允许5-16位，允许字母数字下划线</small>
          </el-form-item>
          <el-form-item :class="{inputError:PasswordIsError}">
            <label>密码</label>
            <el-input v-model="registForm.password" type="password" placeholder="Input your password" @focus="clearError()" minlength="6" maxlength="18"></el-input>
            <small>必须包含大小写字母和数字的组合,可以使用特殊字符,6-18位</small>
          </el-form-item>
          <el-form-item :class="{inputError:PasswordAgainIsError}">
            <label>请再次输入密码</label>
            <el-input v-model="registForm.passwordAgain" type="password" placeholder="Input your password again" @focus="clearError()"></el-input>
          </el-form-item>
          <el-form-item style="text-align: center;" class="pt-5">
            <el-button style="height: 8vh; width: 25vw; font-size: 1.3rem; border-radius: .3rem;" @click="firstTest()">下一步</el-button>
          </el-form-item>
        </el-form>
        <el-form v-if="nextStep" ref="registForm" :model="registForm">
          <el-form-item :class="{inputError:phoneNumberIsError}">
            <label>输入绑定的手机号码</label>
            <el-input v-model="registForm.phoneNumber" type="text" placeholder="Input your phone numbers" @focus="clearError()"></el-input>
            <small>请输入绑定的手机号码，该号码可用于登录与找回密码等操作</small>
          </el-form-item>
          <el-form-item :class="{inputError:VCinputError}">
            <label style="display: block;">输入短信验证码</label>
            <el-input v-model="registForm.inputVC" type="text" placeholder="Input your verification code" style="width: 60%;" @focus="clearError()"></el-input>
            <el-button style="width: 35%;" v-if="!isGetVC" @click="getVCBtn()">获取验证码</el-button>
            <el-button style="width: 35%;" v-if="isGetVC" disabled>已获取验证码({{getVCCD}}s)</el-button>
            <small style="display: block;">点击 发送验证码 按钮 即获取验证码短信</small>
          </el-form-item>
          <el-form-item>
            <div>
              <span id="toLastStep" style="color: white; float: right;cursor: pointer;" @click="nextStep = false">返回上一步</span>
            </div>
          </el-form-item>
          <el-form-item style="text-align: center;" class="pt-5">
            <el-button style="height: 8vh; width: 25vw; font-size: 1.3rem; border-radius: .3rem;" @click="secondsTest()">完成注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'registForm',
  data () {
    return {
      // 用于判断账号输入的正则表达式
      accountRegular: /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/,
      phoneNumberRegular: /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
      passwordRegular: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/,
      isGetVC: false,
      getVCCD: 0,
      phoneNumberIsError: false,
      VCinputError: false,
      AccountIsError: false,
      PasswordIsError: false,
      PasswordAgainIsError: false,
      registForm: {
        account: '',
        password: '',
        passwordAgain: '',
        phoneNumber: ''
      },
      nextStep: false,
      test: false
    }
  },
  props: {
    stateChoose: {
      default: ''
    },
    allUserLoginInfo: {
      default: []
    },
    newUserLoginInfo: {
      default: {}
    }
  },
  methods: {
    changeStateToLogin () {
      this.$emit('getchangeState', 'login')
    },
    clearError () {
      this.AccountIsError = false
      this.PasswordIsError = false
      this.PasswordAgainIsError = false
      this.phoneNumberIsError = false
      this.VCinputError = false
    },
    // 对第一步进行检测
    firstTest () {
      this.test = true
      // 未输入账号
      // 输入账号格式有误
      if (!(this.accountRegular.test(this.registForm.account))) {
        this.test = false
        this.$notify.error({
          title: '错误!',
          message: '账号信息输入错误，请按照格式进行输入'
        })
        this.AccountIsError = true
        return
      }
      // 账号已被注册
      if ((this.allUserLoginInfo.filter(obj => obj.account === this.registForm.account)).length >= 1) {
        this.test = false
        this.$notify.error({
          title: '错误!',
          message: '该账号已被注册!'
        })
        this.AccountIsError = true
        return
      }
      // 密码未输入
      // 密码格式有误
      if (!(this.passwordRegular.test(this.registForm.password))) {
        this.test = false
        this.$notify.error({
          title: '错误!',
          message: '密码格式错误，请按照格式进行输入'
        })
        this.PasswordIsError = true
        return
      }
      // 未再次输入密码
      if (this.registForm.passwordAgain === '') {
        this.test = false
        this.$notify.error({
          title: '错误!',
          message: '请再次输入密码!'
        })
        this.PasswordAgainIsError = true
        return
      }
      // 两次密码输入不一致
      if (this.registForm.passwordAgain !== this.registForm.password) {
        this.test = false
        this.$notify.error({
          title: '错误!',
          message: '两次密码输入不一致!'
        })
        this.PasswordIsError = true
        this.PasswordAgainIsError = true
        return
      }
      // 检测通过，进入下一步
      setTimeout(() => {
        this.test = false
        this.nextStep = true
      }, 2000)
    },
    // 获取验证码
    getVCBtn () {
      // 手机号未输入
      // 手机号格式有误
      if (!(this.phoneNumberRegular.test(this.registForm.phoneNumber))) {
        this.$notify.error({
          title: '错误!',
          message: '手机号格式错误!'
        })
        this.phoneNumberIsError = true
        return
      }
      // 手机号已被注册
      if ((this.allUserLoginInfo.filter(obj => obj.phoneNumber === this.registForm.phoneNumber)).length >= 1) {
        this.$notify.error({
          title: '错误!',
          message: '该手机号已被注册'
        })
        this.phoneNumberIsError = true
        return
      }
      // 检测通过，获取验证码
      this.isGetVC = true
      // 验证码生成
      this.registForm.VC = (Math.round(Math.random() * (999999 - 100000) + 100000)).toString()
      // 验证码提示
      this.$notify.info({
        title: '短信验证码',
        message: '您所获取到的短信验证码为:' + this.registForm.VC,
        duration: 60000
      })
      // 计时器
      this.getVCCD = 60
      let VCCD = setInterval(() => {
        this.getVCCD--
        if (this.getVCCD === 0) {
          this.isGetVC = false
          clearInterval(VCCD)
        }
      }, 1000)
    },
    // 对第二步进行测试
    secondsTest () {
      // 手机号未输入
      // 手机号格式有误
      if (!(this.phoneNumberRegular.test(this.registForm.phoneNumber))) {
        this.$notify.error({
          title: '错误!',
          message: '手机号格式错误!'
        })
        this.phoneNumberIsError = true
        return
      }
      // 手机号已被注册
      if ((this.allUserLoginInfo.filter(obj => obj.phoneNumber === this.registForm.phoneNumber)).length >= 1) {
        this.$notify.error({
          title: '错误!',
          message: '该手机号已被注册'
        })
        this.phoneNumberIsError = true
        return
      }
      // 短信验证码未输入
      if (this.registForm.inputVC === '' || this.registForm.VC === '') {
        this.$notify.error({
          title: '错误!',
          message: '短信验证码未输入!'
        })
        this.VCinputError = true
        return
      }
      // 短信验证码有误
      if (this.registForm.inputVC !== this.registForm.VC) {
        this.$notify.error({
          title: '错误!',
          message: '短信验证码输入错误,请检查!'
        })
        this.VCinputError = true
        return
      }
      // 检测通过
      this.success()
    },
    // 检测通过，注册成功，跳转到登录页面，并传递新用户的登录信息
    success () {
      this.$notify({
        title: '注册成功!',
        message: '即将跳转到登录页面',
        type: 'success'
      })
      // 传递新用户的登录信息
      this.newUserLoginInfo.id = this.allUserLoginInfo.length
      this.newUserLoginInfo.account = this.registForm.account
      this.newUserLoginInfo.password = this.registForm.password
      this.newUserLoginInfo.phoneNumber = this.registForm.phoneNumber
      this.$emit('getNewUser', this.newUserLoginInfo)
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
#registTabLg{
  width: 30vw;
  background-color: rgba(0,0,0,0.6);
  color: white;
  height: 100vh;
  position: fixed;
  right: 0;
}
#registTabMd{
  margin-top: 2vh;
  margin-left: 7vw;
  width: 85vw;
  height: 95vh;
  background-color: rgba(0,0,0,0.6);
  border-radius: 15px;
  color: white;
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
#registTabMd .toLogin{
  left:10vw;
}
.toLogin:hover{
  color: white;
}
#toLastStep:hover{
  text-decoration: underline;
  font-size: 110%;
}

/* loading样式 */
.el-loading-mask{
  margin: -10px;
  border-radius: 15px;
}
</style>
