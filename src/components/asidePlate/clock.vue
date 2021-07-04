<template>
  <div>
    <div class="mt-3 mx-auto" style="width: 85%;background-color: white;border-radius:15px; height: 200px; position: relative;">
      <div id="clock">
        <div class="mt-4">
          <p>现在是:</p>
          <p class="date">{{date}}</p>
          <p class="time">{{time}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'clock',
  data () {
    return {
      date: '',
      time: ''
    }
  },
  methods: {
    getDate () {
      let weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      let cd = new Date()
      let year = cd.getFullYear()
      let month = cd.getMonth() + 1
      let day = cd.getDate()
      let week = weeks[cd.getDay()]
      this.getTime()
      this.date = year + '/' + month + '/' + day + ' ' + week
    },
    getTime () {
      let cd = new Date()
      let hour = cd.getHours()
      let minutes = cd.getMinutes()
      if (minutes < 10) {
        minutes = '0' + minutes
      }
      let seconds = cd.getSeconds()
      if (seconds < 10) {
        seconds = '0' + seconds
      }
      this.time = hour + ':' + minutes + ':' + seconds
    }
  },
  // 实例被创建后调用
  created () {
    this.getDate()
    this.timer = setInterval(() => {
      this.getDate()
    }, 500)
  }
}
</script>

<style>
#clock{
  width: 79%;
  height: 80%;
  border: 3px dashed rgb(219,238,244);
  border-radius: 15px;
  font-size: 1.3rem;
  color: rgb(119,164,220);
  text-shadow: 0 0 20px rgb(83, 116, 245),0 0 20px rgba(127, 171, 243, 0.7);
  text-align: center;
  position: absolute;
  left: 9%;
  top: 10%;
}
</style>
