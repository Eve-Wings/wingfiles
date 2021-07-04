<template>
  <div>
    <el-menu mode="horizontal" text-color="rgb(234, 234, 234)" active-text-color="white"
     :default-active="$store.state.headerNav" background-color="rgb(35, 35, 35)">
      <el-menu-item index="1" id="logo">
        <router-link to="/home">羽翼文件中心</router-link>
      </el-menu-item>
      <el-submenu>
        <template slot="title" style="color: rgb(234,234,234);">分类</template>
        <el-menu-item v-for="classical of classicals" :index="classical.Cindex" :key="classical.name">
          <router-link :to="{path:'/home/classicalPage',query:{classID: classical.id}}">
            {{classical.name}}
          </router-link>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="3" @click="forumClick()">论坛</el-menu-item>
      <el-menu-item index="4">关于本站</el-menu-item>
      <el-menu-item index="5" id="search" @mouseover.native="searchHover()" @mouseout.native="searchNoHover()">
        <el-tooltip content="搜索" placement="bottom">
          <router-link to="/search" @click="$store.commit('setHeaderNav', '5')">
            <i class="el-icon-search" :class="{loginAndSearchActive:searchIsHover}" style="font-size: 25px;"></i>
          </router-link>
        </el-tooltip>
      </el-menu-item>
      <el-menu-item index="6" id="loginOn" @mouseover.native="loginHover()" @mouseout.native="loginNoHover()">
        <el-tooltip content="登录" placement="bottom">
          <router-link to="/login" @click="$store.commit('setHeaderNav', '6')">
            <i class="el-icon-lock" :class="{loginAndSearchActive:loginIsHover}" style="font-size: 25px;"></i>
          </router-link>
        </el-tooltip>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'headerNav',
  data () {
    return {
      searchIsHover: false,
      loginIsHover: false,
      classicals: [
        {
          name: '学习资料类',
          Cindex: '2-1',
          id: 0
        },
        {
          name: '文学类',
          Cindex: '2-2',
          id: 1
        },
        {
          name: '艺术类',
          Cindex: '2-3',
          id: 2
        },
        {
          name: '工具书',
          Cindex: '2-4',
          id: 3
        },
        {
          name: '纪录片',
          Cindex: '2-5',
          id: 4
        },
        {
          name: '电影',
          Cindex: '2-6',
          id: 5
        },
        {
          name: '教学视频',
          Cindex: '2-7',
          id: 6
        },
        {
          name: '音频',
          Cindex: '2-8',
          id: 7
        }
      ]
    }
  },
  methods: {
    forumClick () {
      this.$notify.info({
        title: '功能未完成',
        message: '社交板块尚未完成，暂不开放',
        offset: 80
      })
    },
    searchHover () {
      this.searchIsHover = true
    },
    searchNoHover () {
      this.searchIsHover = false
    },
    loginHover () {
      this.loginIsHover = true
    },
    loginNoHover () {
      this.loginIsHover = false
    }
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  /* 调整超链接样式 */
  .el-menu a{
    text-decoration: none;
  }
  .el-menu a:visited{
    color: rgb(234,234,234);
  }
  /* 调整顶部导航栏的宽度 */
  .el-menu {
    width: 100%;
  }
  /* 修改顶部导航栏自带的底部border */
  .el-menu.el-menu--horizontal{
    border: 0;
  }
  /* 修改顶部导航栏所当前 活跃 的样式 */
  .el-menu--horizontal>.el-menu-item.is-active{
    background-color: rgb(83,83,83)!important;
  }

  /* 修改顶部导航栏 多级菜单-标题 中的图标样式 */
  .el-submenu__title i{
    color: rgb(234,234,234);
  }
  /* 修改顶部导航栏 多级菜单 中 菜单项 的样式 */
  .el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title{
    text-align: center;
  }
  /* 修改顶部导航栏菜单项的字体 */
  .el-menu-item,.el-submenu__title{
    font-size: 16px;
  }
  /* 修改LOGO字体 */
  #logo{
    font-size: 18px;
  }
  /* 修改 菜单项:hover 的样式 */
  .el-menu-item:hover,.el-submenu:hover,.el-submenu__title:hover{
    color: white!important;
    background-color: rgba(83, 83, 83, 0.7) !important;
  }
  .el-menu--popup-bottom-start .el-menu-item a{
    color: rgb(234,234,234);
  }
  /* 修改顶部导航栏中右侧的 登录与搜索 的样式 */
  #loginOn,
  #search {
    color: rgba(255, 255, 255, 0.5);
    font-size: 20px;
    float: right;
  }

  /* 因为菜单项:hover 与 菜单项中的图标:hover 并不同步 */
  /* 所以需要使用动态绑定类来修改样式 */
  .loginAndSearchActive{
    color: rgb(255, 255, 255) !important;
  }
</style>
