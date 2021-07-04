<template>
  <div class="p-2 mt-3 advertisement">
    <a href="https://www,baidu.com">
      <!-- href = "www.baidu.com" -->
      <el-image src="static/img/首页大背景.2d4d380.jpg" style="max-height: 120px; height: 120px;"></el-image>
    </a>
  </div>
</template>

<script>
export default {
  name: 'adverBanner'
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
