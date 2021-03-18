<template>
    <div>
    <!-- 顶部返回栏组件 -->
    <detail-header :video-info="videoInfo"> </detail-header>
    <!-- 视频介绍组件 -->
    <detail-course :video-info="videoInfo"></detail-course>
    <!-- 视频tab栏简介目录组件 -->
    <detail-tab
      :chapter-list="chapterList"
      :video-info="videoInfo"
    ></detail-tab>
    <!-- 底部购买按钮 -->
    <footer>
      <router-link :to="{path:'/pay', query: {video_id: this.$route.query.video_id}}" class="user_buy">
        <button >立即购买</button>
      </router-link>
    </footer>
  </div>
</template>

<script>
import DetailHeader from './Components/Header'
import DetailTab from './Components/Tab'
import DetailCourse from './Components/Course'
import { getVideoDetail} from '@/api/getData.js'


export default {
    components: {
        DetailHeader,
        DetailCourse,
        DetailTab
    },
    data(){
        return {
            videoInfo:{},
            chapterList:[]
        }
    },
    methods:{
        async getDetail(vid){
            try{
                const result = await getVideoDetail(vid)
                if (result.data.code == 0) {
                    this.videoInfo = result.data.data
                    this.chapterList = result.data.data.chapter_list
                    console.log(this.chapter_list)
                    console.log(this.videoInfo.create_time)
                }
            } catch (error) {
                console.log(error)
            }
        }
    },
    // 在渲染完界面后再获得数据
    mounted(){
        console.log(this.$route.query.video_id)
        this.getDetail(this.$route.query.video_id)
        console.log(this.chapterList)
    }
}
</script>

<style lang="scss" scoped>
//底部
footer {
  // fixed固定在底部
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 8px 0;
  background-color: #fff;
  z-index: 999;
  box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.05);
}
//设置购买按钮样式
button {
  display: block;
  color: #fff;
  margin: 0 auto;
  background-color: #d93f30;
  height: 34px;
  line-height: 34px;
  border-radius: 17px;
  width: 80%;
  border: none;
  font-size: 15px;
  text-align: center;
}
</style>