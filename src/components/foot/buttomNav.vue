<template>
  <div>
    <div class="btmNav">
      <div style="width: 95%;" class="mx-auto">
        <div class="item" @click="mineClick()">
          <i class="el-icon-user-solid"></i>
          <p>我的</p>
        </div>
        <div class="item disabled">
          <i class="bi bi-bell-fill"></i>
          <p>消息</p>
        </div>
        <div class="item" :class="{btmNavActive:activeItem === 'home'}" @click="homeClick()">
          <i class="bi bi-house-fill"></i>
          <p>首页</p>
        </div>
        <div class="item" :class="{btmNavActive:activeItem === 'rank'}" @click="rankClick()">
          <i class="el-icon-s-data"></i>
          <p>排行</p>
        </div>
        <div class="item disabled">
          <i class="bi bi-eye-fill"></i>
          <p>发现</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'btmNav',
  data () {
    return {
      activeItem: 'home'
    }
  },
  methods: {
    rankClick () {
      this.activeItem = 'rank'
      this.$router.push('/home/rank')
    },
    homeClick () {
      this.activeItem = 'home'
      this.$router.push('/home')
    },
    mineClick () {
      this.$router.push('/login')
    }
  }
}
</script>

<style>
.btmNav{
  position: fixed;
  bottom: 0px;
  background: linear-gradient(0deg,rgba(255,255,255,1),rgba(255,255,255,0.7));
  width: 100%;
  height: 5rem;
  z-index: 1000;
}
.item{
  margin-top: 0.7rem;
  width: 19%;
  display: inline-block;
  text-align: center;
  font-size: 1.4rem;
  cursor: pointer;
}
.item:hover{
  color: #1acce7;
}
.item p{
  font-size: 1rem;
  margin: 0;
}
.btmNavActive{
  font-size: 1.7rem;
  color: #2587ff;
}
.btmNavActive:hover{
  color: #2587ff;
}
.disabled{
  color: gray;
  cursor: default;
}
.disabled:hover{
  color: gray;
}
</style>
