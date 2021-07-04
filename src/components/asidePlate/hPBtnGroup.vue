<template>
  <div>
    <div align="center">
      <div class="checkIn mx-auto" id="notCheck" style="cursor: pointer;" v-if="disCheck" @click="disCheck=!disCheck">
        <div class="font">签到</div>
      </div>
      <el-popover v-if="disCheck==false" placement="bottom" trigger="hover">
        <el-calendar v-model="calendar"></el-calendar>
        <div class="checkIn mx-auto" id="isCheck" slot="reference" style="cursor: pointer;">
          <div class="font">已签到</div>
        </div>
      </el-popover>
      <div class="mt-3 p-2 mx-4" align="center" id="upLoadAndNav">
        <router-link to="{name:'upLoad'}" class="btn btn-lg" id="upLoadBtn">
          <i style="font-size: 14px;" class="el-icon-upload2 mr-1"></i>投稿
        </router-link>
        <router-link to="{name:'nav'}" type="button" class="btn btn-lg" id="navBtn">
          <i style="font-size: 14px;" class="el-icon-menu mr-1"></i>导航
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homePageBtnGroup',
  data () {
    return {
      calendar: new Date(),
      disCheck: true
    }
  }
}
</script>

<style>
  #upLoadAndNav {
    border: white;
    border-radius: 15px;
    background-color: white;
  }

  .checkIn {
    height: 50px;
    display: block;
    position: relative;
    border-radius: 50px;
    text-decoration: none;
    background: linear-gradient(90deg, #00aaff, #ff00ff, #ffeb3b, #00aaff);
    background-size: 400%;
    width: 85%;
    color: white;
    font-weight: bold;
    z-index: 1;
  }

  .checkIn .font {
    position: relative;
    padding-top: 10px;
    font-size: 1.7rem;
    line-height: 1.5rem;
    text-align: center;
    text-shadow: 0 1px 0 #ff7d49;
  }

  .checkIn::before {
    content: "";
    position: absolute;
    left: -5px;
    right: -5px;
    top: -5px;
    bottom: -5px;
    z-index: -1;
    background: linear-gradient(90deg, #00aaff, #ff00ff, #ffeb3b, #00aaff);
    border-radius: 50px;
    background-size: 400%;
    filter: blur(20px);
  }

  @keyframes CheckInColor_turn {
    100% {
      background-position: -400% 0;
    }
  }

  .checkIn:hover {
    animation: CheckInColor_turn 4000ms infinite;
  }

  .checkIn:hover::before {
    animation: CheckInColor_turn 4000ms infinite;
  }

  .el-calendar {
    border-radius: 15px;
    width: 20vw;
  }

  .el-calendar__header {
    font-size: 14px;
  }

  .el-calendar__body {
    font-size: 12px;
    padding: 5px 10px 20px;
  }

  .el-calendar-table .el-calendar-day {
    height: auto;
  }

  .el-button--mini,
  .el-button--mini.is-round {
    padding: 4px 5px;
  }

  #upLoadBtn {
    display: inline-block;
    background-color: lawngreen;
    width: 30%;
    color: white;
    font-weight: bold;
  }

  #upLoadBtn:hover {
    background-color: rgba(13, 200, 0, 0.8);
  }

  #navBtn {
    display: inline-block;
    background-color: orange;
    width: 30%;
    color: white;
    font-weight: bold;
  }

  #navBtn:hover {
    background-color: rgba(222, 141, 0, 0.8);
  }

  .btn {
    margin: 10px;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  }

  .btn-group-lg>.btn,
  .btn-lg {
    padding: .5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: .3rem;
  }
</style>
