<template>
  <div>
    <!-- 按钮组 -->
    <hPBtnGroup></hPBtnGroup>
    <!-- 时钟 -->
    <clock></clock>
    <!-- 公告栏 -->
    <bulletin></bulletin>
    <!-- 广告栏 -->
    <advertisColumn></advertisColumn>
    <!-- 标签展示组 -->
    <tagWindow></tagWindow>
    <!-- 排行版 -->
    <ranking></ranking>
    <!-- 友链 -->
    <friendChains></friendChains>
  </div>
</template>

<script>
import hPBtnGroup from './asidePlate/hPBtnGroup.vue'
import bulletin from './asidePlate/bulletin.vue'
import advertisColumn from './asidePlate/advertisColumn.vue'
import tagWindow from './asidePlate/tagWindow.vue'
import ranking from './asidePlate/ranking.vue'
import clock from './asidePlate/clock.vue'
import friendChains from './asidePlate/friendChains.vue'

export default {
  name: 'asidePlate',
  components: {
    hPBtnGroup,
    bulletin,
    advertisColumn,
    tagWindow,
    ranking,
    clock,
    friendChains
  },
  props: {
    disCheck: true
  }
}
</script>

<style>
.advertisement {
  background-color: white;
  border-radius: 15px;
}
.advertisement img{
  border-radius: 15px;
}
.advertisement img:hover{
  opacity: 0.8;
}
</style>
