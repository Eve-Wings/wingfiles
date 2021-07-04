<template>
  <div class="mt-2">
    <div>
      <div style="width: 95%; border-bottom: 1px solid #ccc;" class="mx-auto mt-4 pb-3">
        <router-link :to="{path:'/postDetailPage', query:{postID:post.id}}" class="postTitle"><h5>{{post.title}}</h5></router-link>
        <div style="word-break: break-all;">{{post.BI}}</div>
        <div class="mt-4" style="text-align: right;">上传人:<router-link class="updataUser" :to="user.url">{{user.name}}</router-link>
          <span style="font-size: 13px;" class="ml-3">上传时间:{{post.updataDate}} {{post.updataTime}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'poster',
  props: {
    post: {},
    user: {}
  }
}
</script>

<style>
.postTitle{
  font-size: 1.1rem;
  color:rgb(0,162,253);
}
.postTitle:hover,.updataUser:hover{
  color:#0000bc;
}
.updataUser{
  color: rgb(0,162,253);
}
</style>
