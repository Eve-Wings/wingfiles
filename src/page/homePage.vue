<template>
  <div style="margin-bottom: 5rem;">
    <!-- 轮播器与推荐栏 -->
    <carseAndComTab></carseAndComTab>
    <!-- 社交板块 -->
    <socailZone></socailZone>
    <!-- 图文专区 -->
    <graphicZone></graphicZone>
    <!-- 广告 -->
    <adver-banner></adver-banner>
    <!-- 视听专区 -->
    <avZone></avZone>
    <!-- 广告 -->
    <adver-banner></adver-banner>
    <!-- 管理协会 -->
    <manageAssociate></manageAssociate>
  </div>
</template>

<script>
import carseAndComTab from '../components/homePage/carseAndComTab.vue'
import socailZone from '../components/homePage/socailZone.vue'
import graphicZone from '../components/homePage/graphicZone.vue'
import adverBanner from '../components/homePage/adver-banner.vue'
import avZone from '../components/homePage/avZone.vue'
import manageAssociate from '../components/homePage/manageAssociate.vue'

export default{
  name: 'homePage',
  components: {
    carseAndComTab,
    socailZone,
    graphicZone,
    adverBanner,
    avZone,
    manageAssociate
  }
}
</script>

<style>
</style>
