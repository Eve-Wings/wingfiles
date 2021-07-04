<template>
  <div style="position: fixed; top: 0; background: linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.2)); width: 100%; z-index: 1000;">
    <div class="asideBtn" @click="asideBtnClick()"><i class="bi bi-justify"></i></div>
    <div style="cursor: pointer; color: rgb(161,161,161); border-radius: 30px; width: 75%; background-color: rgb(218, 218, 218);" class="mx-auto mt-2" @click="headerMdClcik()">
      <p class="pl-4 py-2"><i class="bi bi-search"></i>搜索</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headerNavMd',
  methods: {
    headerMdClcik () {
      this.$router.push('/search')
    },
    asideBtnClick () {
      this.$notify.info({
        title: '功能未完成',
        message: '侧边栏尚未完成，暂时不能展开',
        offset: 80,
        position: 'top-left'
      })
    }
  }
}
</script>

<style>
.asideBtn{
  color: white;
  font-size: 32px; position: absolute;
  left: 2%;
  top: 6px;
  padding: 0 4px;
  border-radius: 15px;
  border: 2px solid rgb(161, 161, 161);
  cursor: pointer;
}
.asideBtn:active{
  box-shadow: 2px 2px 5px rgb(161,161,161);
  border: 2px solid white;
}
</style>
