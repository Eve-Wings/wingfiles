<template>
  <div>
    <headerNav class="hidden-md-and-down" :menuItemIsActive="currentPage"></headerNav>
    <i class="bi bi bi-arrow-left-circle hidden-lg-and-up" id="goback" @click="$router.push('/home')"></i>
    <searchForm class="my-4"></searchForm>
    <foot class="hidden-md-and-down"></foot>
  </div>
</template>

<script>
import headerNav from '../components/header/headerNav.vue'
import foot from '../components/foot/footer.vue'
import searchForm from '../components/search/searchForm.vue'

export default{
  name: 'search',
  components: {
    headerNav,
    foot,
    searchForm
  },
  data () {
    return {
      currentPage: '5'
    }
  }
}
</script>

<style>
body{
  background: url(../assets/首页大背景.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #CCCCCC;
}
#goback{
  color: rgb(0, 123, 255);
  font-size: 2.5rem;
  position: absolute;
  top: 5%;
  left: 5%;
  cursor: pointer;
}
#goback:hover{
  color: white;
}
</style>
