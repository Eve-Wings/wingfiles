<template>
  <!-- 正常屏幕宽度下 -->
  <div style="width: 100% ;background-color: rgba(66,66,66,0.8)" class="mt-3">
    <div class="mx-auto" style="width: 80%;">
      <el-row :gutter="20">
        <el-col :span="20">
          <el-row :gutter="10">
            <el-col :span="24">
              <div class="footer_line"></div>
            </el-col>
            <el-col :span="6" v-for="footBox of footerBoxs" :key="footBox.header">
              <div>
                <h3 class="footer-heading">{{footBox.header}}</h3>
                <ul class="footer-list">
                  <li v-for="list of footBox.lists" :key="list.label">
                    <router-link :to="{path:'/home/classicalPage',query:{classID:list.id}}" @click.native="routerLinkClick()">{{list.label}}</router-link>
                  </li>
                </ul>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="4">
          <div style="margin-top: 56px;margin-left: 10px;" >
            <ul class="footer-list">
              <li>客服QQ:524905824</li>
              <li>公众号:尚未创建</li>
              <li>微信号:Eve-Wings</li>
              <li>交流群:694640895</li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="mx-auto mt-3" style="width: 80%;">
      <div style="width: 100%;padding-top: 10px;border-top: 2px solid #8a8a8a;"></div>
      <span style="color: white;padding: 10px; height: 3rem; line-height: 3rem;" >
        羽翼文件存储中心为您服务,提供优质文件存储与分享功能
      </span>
      <span style="color: white; height: 3rem; line-height: 3rem;float: right;">© 2021 羽翼·粤ICP备xxxxxxxx</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      footerBoxs: [
        {
          header: '社交专区',
          lists: [
            {
              label: '新人报到',
              id: -1
            },
            {
              label: '论坛',
              id: -1
            },
            {
              label: '聊天室',
              id: -1
            }
          ]
        },
        {
          header: '图文专区',
          lists: [
            {
              label: '学习资料',
              id: 0
            },
            {
              label: '文学类',
              url: 1
            },
            {
              label: '艺术类',
              id: 2
            },
            {
              label: '工具书',
              id: 3
            }
          ]
        },
        {
          header: '视听专区',
          lists: [
            {
              label: '纪录片',
              id: 4
            },
            {
              label: '电影',
              id: 5
            },
            {
              label: '学习教程',
              id: 6
            },
            {
              label: '音频',
              id: 7
            }
          ]
        },
        {
          header: '管理协会',
          lists: [
            {
              label: '用户反馈',
              id: -1
            },
            {
              label: '加入我们',
              id: -1
            },
            {
              label: '公告/友链',
              id: -1
            },
            {
              label: '举报',
              id: -1
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>
.footer_line {
  width: 100%;
  height: 4px;
  background-color: #FFFFFF26;
  margin: 30px 0 24px 0;
}
.footer-heading{
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 20px;
}
.footer-list{
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 14px;
}
.footer-list li{
  color: #b5b5b5;
  display: block;
  padding: 0;
  margin: 0;
  list-style: none;
  line-height: 1.2rem;
  margin-bottom: 10px;
  padding-bottom: 10px;
}
.footer-list li a{
  color: #b5b5b5;
}
.footer-list li a:hover{
  color: #ffffff;
}
</style>
