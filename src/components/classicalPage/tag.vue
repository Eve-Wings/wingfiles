<template>
  <div style="display: inline-block; padding: 5px;margin-left: 5px;">
    <div class="tag" :class="{tag_active:istagActive}">
      {{label}}
      <small>{{nums}}<i class="bi bi-tags ml-2"></i></small>
    </div>
  </div>
</template>

<script>

export default {
  name: 'tag',
  props: {
    label: {
      default: ' '
    },
    nums: {
      default: 0
    },
    istagActive: {
      default: false
    }
  }
}
</script>

<style>
.tag{
  padding: 3px 5px;
  display: inline-block;
  font-size: 1rem;
  border: 1px solid #479dc5;
  border-radius: 5px;
  background-color: white;
  color: rgb(24,162,253);
  cursor: pointer;
}
.tag_active{
  color: white;
  background-color: rgb(24,162,253);
}
.tag:hover{
  background-color: rgba(0,162,253,0.5);
  color: white;
}
</style>
