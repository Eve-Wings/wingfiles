<template>
  <div>
    <!-- Lg/XL -->
    <div id="loginTabLg" class="hidden-md-and-down">
      <el-tooltip content="返回主页" placement="bottom">
        <router-link to="/home" id="toHome"><i class="bi bi-arrow-left-circle"></i></router-link>
      </el-tooltip>
      <h1 align="center" style="color: white;font-family:fantasy;padding-top: 10vh;">Sign In</h1>
      <div style="width: 85%; margin: 20px auto;">
        <el-tabs v-model="singInActiveName">
          <el-tab-pane label="账号登录" name="loginByAccount" >
            <el-form ref="loginFormByAccount" :model="loginFormByAccount">
              <el-form-item :class="{inputError:accountInputError}">
                <label>账号</label>
                <el-input @focus="clearError()" v-model="loginFormByAccount.account" placeholder="Input your account" minlength="5" maxlength="16"></el-input>
                <small>字母开头，允许5-16位，允许字母数字下划线</small>
              </el-form-item>
              <el-form-item :class="{inputError:passwordInputError}">
                <label>密码</label>
                <el-input @focus="clearError()" v-model="loginFormByAccount.password" placeholder="Input your password" minlength="6" maxlength="18" type="password"></el-input>
                <small>必须包含大小写字母和数字的组合,可以使用特殊字符,6-18位</small>
              </el-form-item>
              <el-form-item>
                <label class="pr-2">本周免登录</label>
                <el-switch v-model="remember" active-color="rgb(64,158,255)"></el-switch>
                <div style="float: right;" class="forgetPassword"><span @click="changeStateToForget()" style="color: white;">忘记密码</span></div>
              </el-form-item>
              <el-form-item style="text-align: center;" class="pt-3">
                <el-button class="loginBtn" @click="loginByAccountBtn()">登录</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="手机号登陆" name="loginByMP">
            <el-form ref="loginFormByMP" :model="loginFormByMP">
              <el-form-item :class="{inputError:phoneNumbersInputError}">
                <label>手机号</label>
                <el-input @focus="clearError()" type="text" v-model="loginFormByMP.phoneNumbers" placeholder="Input your PhoneNumbers"></el-input>
                <small>请输入您的手机号码</small>
              </el-form-item>
              <el-form-item :class="{inputError:passwordInputError}">
                <label>密码</label>
                <el-input @focus="clearError()" type="password" v-model="loginFormByMP.password" placeholder="Input your password" minlength="6" maxlength="18"></el-input>
                <small>必须包含大小写字母和数字的组合,可以使用特殊字符,6-18位</small>
              </el-form-item>
              <el-form-item>
                <label class="pr-2">本周免登录</label>
                <el-switch v-model="remember" active-color="rgb(64,158,255)"></el-switch>
                <div style="float: right;" class="forgetPassword"><span @click="changeStateToForget()" style="color: white;">忘记密码</span></div>
              </el-form-item>
              <el-form-item style="text-align: center;" class="pt-3">
                <el-button class="loginBtn" @click="loginByPhoneNumberBtn()">登录</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="QQ账号登录" name="loginByQQ">
            <el-form ref="loginFormByQQ" :model="loginFormByQQ">
              <el-form-item :class="{inputError:QQInputError}">
                <label>QQ号码</label>
                <el-input @focus="clearError()" type="text" v-model="loginFormByQQ.QQaccount" placeholder="Input your QQ account"></el-input>
                <small>请输入您的QQ号码</small>
              </el-form-item>
              <el-form-item :class="{inputError:passwordInputError}">
                <label>密码</label>
                <el-input @focus="clearError()" type="password" v-model="loginFormByQQ.password" placeholder="Input your password" minlength="6" maxlength="18"></el-input>
                <small>必须包含大小写字母和数字的组合,可以使用特殊字符,6-18位</small>
              </el-form-item>
              <el-form-item>
                <label class="pr-2">本周免登录</label>
                <el-switch v-model="remember" active-color="rgb(64,158,255)"></el-switch>
                <div style="float: right;" class="forgetPassword"><span @click="changeStateToForget()" style="color: white;">忘记密码</span></div>
              </el-form-item>
              <el-form-item style="text-align: center;" class="pt-3">
                <el-button class="loginBtn" @click="loginByQQBtn()">登录</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <div style="text-align: center;" class="pt-3">
            <!-- 绑定事件向父组件传递参数，需要传递的参数通过属性绑定 -->
            <el-button class="registBtn" @click="changeStateToRegist()">注册</el-button>
          </div>
        </el-tabs>
      </div>
    </div>
    <!-- xs/sm/md -->
    <div id="loginTabMd" class="hidden-lg-and-up">
      <el-tooltip content="返回主页" placement="bottom">
        <router-link to="/home" id="toHome"><i class="bi bi-arrow-left-circle"></i></router-link>
      </el-tooltip>
      <h1 align="center" style="color: white;font-family:fantasy;padding-top: 10vh;">Sign In</h1>
      <div style="width: 85%; margin: 20px auto;">
        <el-tabs v-model="singInActiveName">
          <el-tab-pane label="账号登录" name="loginByAccount" >
            <el-form ref="loginFormByAccount" :model="loginFormByAccount">
              <el-form-item :class="{inputError:accountInputError}">
                <label>账号</label>
                <el-input @focus="clearError()" v-model="loginFormByAccount.account" placeholder="Input your account" minlength="5" maxlength="16"></el-input>
                <small>字母开头，允许5-16位，允许字母数字下划线</small>
              </el-form-item>
              <el-form-item :class="{inputError:passwordInputError}">
                <label>密码</label>
                <el-input @focus="clearError()" v-model="loginFormByAccount.password" placeholder="Input your password" minlength="6" maxlength="18" type="password"></el-input>
                <small>必须包含大小写字母和数字的组合,可以使用特殊字符,6-18位</small>
              </el-form-item>
              <el-form-item>
                <label class="pr-2">本周免登录</label>
                <el-switch v-model="remember" active-color="rgb(64,158,255)"></el-switch>
                <div style="float: right;" class="forgetPassword"><span @click="changeStateToForget()" style="color: white;">忘记密码</span></div>
              </el-form-item>
              <el-form-item style="text-align: center;" class="pt-3">
                <el-button class="loginBtn" @click="loginByAccountBtn()">登录</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="手机号登陆" name="loginByMP">
            <el-form ref="loginFormByMP" :model="loginFormByMP">
              <el-form-item :class="{inputError:phoneNumbersInputError}">
                <label>手机号</label>
                <el-input @focus="clearError()" type="text" v-model="loginFormByMP.phoneNumbers" placeholder="Input your PhoneNumbers"></el-input>
                <small>请输入您的手机号码</small>
              </el-form-item>
              <el-form-item :class="{inputError:passwordInputError}">
                <label>密码</label>
                <el-input @focus="clearError()" type="password" v-model="loginFormByMP.password" placeholder="Input your password" minlength="6" maxlength="18"></el-input>
                <small>必须包含大小写字母和数字的组合,可以使用特殊字符,6-18位</small>
              </el-form-item>
              <el-form-item>
                <label class="pr-2">本周免登录</label>
                <el-switch v-model="remember" active-color="rgb(64,158,255)"></el-switch>
                <div style="float: right;" class="forgetPassword"><span @click="changeStateToForget()" style="color: white;">忘记密码</span></div>
              </el-form-item>
              <el-form-item style="text-align: center;" class="pt-3">
                <el-button class="loginBtn" @click="loginByPhoneNumberBtn()">登录</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="QQ账号登录" name="loginByQQ">
            <el-form ref="loginFormByQQ" :model="loginFormByQQ">
              <el-form-item :class="{inputError:QQInputError}">
                <label>QQ号码</label>
                <el-input @focus="clearError()" type="text" v-model="loginFormByQQ.QQaccount" placeholder="Input your QQ account"></el-input>
                <small>请输入您的QQ号码</small>
              </el-form-item>
              <el-form-item :class="{inputError:passwordInputError}">
                <label>密码</label>
                <el-input @focus="clearError()" type="password" v-model="loginFormByQQ.password" placeholder="Input your password" minlength="6" maxlength="18"></el-input>
                <small>必须包含大小写字母和数字的组合,可以使用特殊字符,6-18位</small>
              </el-form-item>
              <el-form-item>
                <label class="pr-2">本周免登录</label>
                <el-switch v-model="remember" active-color="rgb(64,158,255)"></el-switch>
                <div style="float: right;" class="forgetPassword"><span @click="changeStateToForget()" style="color: white;">忘记密码</span></div>
              </el-form-item>
              <el-form-item style="text-align: center;" class="pt-3">
                <el-button class="loginBtn" @click="loginByQQBtn()">登录</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <div style="text-align: center;" class="pt-3">
            <!-- 绑定事件向父组件传递参数，需要传递的参数通过属性绑定 -->
            <el-button class="registBtn" @click="changeStateToRegist()">注册</el-button>
          </div>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>

export default{
  name: 'loginForm',
  data () {
    return {
      accountRegular: /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/,
      phoneNumberRegular: /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
      passwordRegular: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/,
      accountInputError: false,
      phoneNumbersInputError: false,
      QQInputError: false,
      passwordInputError: false,
      singInActiveName: 'loginByAccount',
      remember: false,
      loginFormByAccount: {
        account: '',
        password: ''
      },
      loginFormByMP: {
        phoneNumbers: '',
        password: ''
      },
      loginFormByQQ: {
        QQaccount: '',
        password: ''
      }
    }
  },
  props: {
    stateChoose: {
      default: ''
    },
    allUserLoginInfo: {
      default: []
    }
  },
  methods: {
    // 向父组件传递参数
    changeStateToForget () {
      this.$emit('getchangeState', 'forget')
    },
    changeStateToRegist () {
      this.$emit('getchangeState', 'regist')
    },
    // 清除报错红框
    clearError () {
      this.accountInputError = false
      this.phoneNumbersInputError = false
      this.QQInputError = false
      this.passwordInputError = false
    },
    // 账号登录
    loginByAccountBtn () {
      // 检测账号是否为空
      // 检测账号格式是否有误
      if (!(this.accountRegular.test(this.loginFormByAccount.account))) {
        this.$notify.error({
          title: '错误!',
          message: '账号格式错误!账号以字母开头，允许5-16位，允许字母数字下划线'
        })
        this.accountInputError = true
        return
      }
      // 检测密码是否为空
      // 检测密码格式是否有误
      if (!(this.passwordRegular.test(this.loginFormByAccount.password))) {
        this.$notify.error({
          title: '错误!',
          message: '密码格式有误!密码必须包含大小写字母和数字的组合,可以使用特殊字符,6-18位'
        })
        this.passwordInputError = true
        return
      }
      // 进行匹配
      let matching = this.allUserLoginInfo.filter(obj => obj.account === this.loginFormByAccount.account)
      // 未匹配到账号
      if (matching.length === 0) {
        this.$notify.error({
          title: '错误!',
          message: '该账号未注册,请检查是否有误'
        })
        this.accountInputError = true
        return
      }
      // 匹配到账号，但密码错误
      if (this.loginFormByAccount.password !== matching[0].password) {
        this.$notify.error({
          title: '错误!',
          message: '密码错误!'
        })
        this.passwordInputError = true
        return
      }
      // 通过
      this.$notify({
        title: '登录成功!',
        message: '即将跳转至首页',
        type: 'success'
      })
      setTimeout(() => {
        this.$router.push({path: '/home'})
      }, 3000)
    },
    // 手机号登录
    loginByPhoneNumberBtn () {
      // 手机号为空 或 手机号格式有误
      if (!(this.phoneNumberRegular.test(this.loginFormByMP.phoneNumbers))) {
        this.$notify.error({
          title: '错误!',
          message: '手机号格式错误!请检查'
        })
        this.phoneNumbersInputError = true
        return
      }
      // 密码为空 或 密码格式有误
      if (!(this.passwordRegular.test(this.loginFormByMP.password))) {
        this.$notify.error({
          title: '错误!',
          message: '密码格式有误!密码必须包含大小写字母和数字的组合,可以使用特殊字符,6-18位'
        })
        this.passwordInputError = true
        return
      }
      // 进行匹配
      let matching = this.allUserLoginInfo.filter(obj => obj.phoneNumber === this.loginFormByMP.phoneNumbers)
      // 未匹配到手机号
      if (matching.length === 0) {
        this.$notify.error({
          title: '错误!',
          message: '该手机号未注册,请检查是否有误'
        })
        this.phoneNumbersInputError = true
        return
      }
      // 匹配到手机号但密码错误
      if (this.loginFormByMP.password !== matching[0].password) {
        this.$notify.error({
          title: '错误!',
          message: '密码错误!'
        })
        this.passwordInputError = true
        return
      }
      // 通过
      this.$notify({
        title: '登录成功!',
        message: '即将跳转至首页',
        type: 'success'
      })
      setTimeout(() => {
        this.$router.push({path: '/home'})
      }, 3000)
    },
    // QQ登录
    loginByQQBtn () {
      // QQ号为空
      if (this.loginFormByQQ.QQaccount === '') {
        this.$notify.error({
          title: '错误!',
          message: 'QQ号未输入!'
        })
        this.QQInputError = true
        return
      }
      // 密码格式有误 或 为空
      if (!this.passwordRegular.test(this.loginFormByQQ.password)) {
        this.$notify.error({
          title: '错误!',
          message: '密码格式有误!密码必须包含大小写字母和数字的组合,可以使用特殊字符,6-18位'
        })
        this.passwordInputError = true
        return
      }
      // 进行匹配
      let matching = this.allUserLoginInfo.filter(obj => obj.QQNumber === this.loginFormByQQ.QQaccount)
      // 未匹配到该QQ号
      if (matching.length === 0) {
        this.$notify.error({
          title: '错误!',
          message: '该QQ号未绑定任何账号,请检查是否有误'
        })
        this.QQInputError = true
        return
      }
      // 检测到匹配的QQ号,但密码错误
      if (this.loginFormByQQ.password !== matching[0].password) {
        this.$notify.error({
          title: '错误!',
          message: '密码错误!'
        })
        this.passwordInputError = true
        return
      }
      // 通过
      this.$notify({
        title: '登录成功!',
        message: '即将跳转至首页',
        type: 'success'
      })
      setTimeout(() => {
        this.$router.push({path: '/home'})
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
#loginTabLg{
  width: 30vw;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  height: 100vh;
  position: fixed;
  right: 0;
}
#loginTabMd{
  margin-top: 2vh;
  margin-left: 7vw;
  width: 85vw;
  background-color: rgba(0,0,0,0.6);
  color: white;
  border-radius: 15px;
  height: 95vh;
}
#toHome{
  font-size: 2.5rem;
  position: absolute;
  padding-top: 3vh;
  left: 2vw;
  height: 7vh;
  color: rgb(0, 123, 255);
}

#loginTabMd #toHome{
  position: absolute;
  left: 10vw;
}

#toHome:hover{
  color: white;
}
.loginBtn{
  height: 6vh;
  width: 8vw;
  font-size: 1.5rem;
  background-color: #007bff;
  border-color: #0062cc;
  color: white;
  border-radius: .3rem;
}
.loginBtn:hover{
  background-color: #0069d9;
  color: white;
}
#loginTabMd .loginBtn{
  height: 8vh;
  width: 25vw;
}
.forgetPassword{
  color: white;
}
.forgetPassword:hover{
  cursor: pointer;
  text-decoration: underline;
  font-size: 15px;
}
.registBtn{
  height: 6vh;
  width: 8vw;
  font-size: 1.3rem;
  border-right: .3rem;
}
#loginTabMd .registBtn{
  height: 8vh;
  width: 25vw;
}
</style>
