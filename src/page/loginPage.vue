<template>
  <div id="loginPage">
    <!-- 动画效果 -->
    <transition name="fade">
      <!-- 绑定属性以向子组件传递参数，同时也可以用于接收 -->
      <loginForm v-if="stateChoose==='login'" :stateChoose="stateChoose" @getchangeState="changeState" :allUserLoginInfo="AllUserLoginInfo"></loginForm>
      <registForm v-if="stateChoose==='regist'" :stateChoose="stateChoose" @getchangeState="changeState" :allUserLoginInfo="AllUserLoginInfo" :newUserLoginInfo="newUserLoginInfo" @getNewUser="newUser"></registForm>
      <forgetForm v-if="stateChoose==='forget'" :stateChoose="stateChoose" @getchangeState="changeState" :allUserLoginInfo="AllUserLoginInfo" :resetUserLoginInfo="resetUserLoginInfo" @getResetPassword="resetUser"></forgetForm>
    </transition>
  </div>
</template>

<script>
import loginForm from '../components/loginPage/loginForm.vue'
import registForm from '../components/loginPage/registForm.vue'
import forgetForm from '../components/loginPage/forgetForm.vue'
export default {
  name: 'loginPage',
  components: {
    loginForm,
    registForm,
    forgetForm
  },
  data () {
    return {
      stateChoose: 'login',
      resetUserLoginInfo: {
        id: -1,
        password: ''
      },
      AllUserLoginInfo: [
        {
          id: 0,
          account: 'Wings',
          password: 'Zrq524905824',
          phoneNumber: '13242277884',
          QQNumber: '524905824'
        },
        {
          id: 1,
          account: 'Scars777',
          password: 'Qwe123456',
          phoneNumber: '15627081564',
          QQNumber: '632000000'
        },
        {
          id: 2,
          account: 'ying233',
          password: 'POI23333',
          phoneNumber: '13642479022',
          QQNumber: '7878787878'
        }
      ],
      newUserLoginInfo: {
        id: -1,
        account: '',
        password: '',
        phoneNumber: ''
      }
    }
  },
  methods: {
    // 接收子组件传递来的参数——改变组件=>登录/注册/重置密码
    changeState (state) {
      this.stateChoose = state
    },
    // 获取新用户的登录信息
    newUser (info) {
      this.newUserLoginInfo = info
      this.addUser()
    },
    // 将新用户的登录信息添加到所有登录信息中
    addUser () {
      this.AllUserLoginInfo.push(this.newUserLoginInfo)
    },
    resetUser (info) {
      this.AllUserLoginInfo[info.id].password = info.password
    }
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
#loginPage .el-tabs__item{
  color: white;
  font-size: 1rem;
}
#loginPage .el-tabs__item.is-active{
  color: rgb(64,158,255);
  font-size: 1.2rem;
}
#loginPage .el-form-item{
  margin-bottom: 5px;
}
#loginPage .el-form-item label{
  color: white;
  font-size: 18px;
}
#loginPage .el-form-item small{
  color: white;
  font-size: 90%;
  font-weight: 400;
  margin-top: .25rem;
}
/* 动画效果 */
.fade-enter-active {
  transition: all .8s ease;
}
.fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to
{
  opacity: 0;
}
</style>
