<template>
  <div>
    <!-- 轮播图组件 -->
    <home-banner :banners="banners"></home-banner>
    <!-- 视频列表组件 -->
    <video-list :courselist="courselist"></video-list>
    <!-- 注意下面虽然不是原来的驼峰，但是仍然是一一对应的 -->
    <br><br>
    <!-- 组件化的思想 -->
    <common-footer></common-footer>
  </div>
</template>

<script>
import HomeBanner from './Component/Banner'
import VideoList from "./Component/VideoList"
import CommonFooter from "@/components/CommonFooter" //@表示根目录
import { getBanner, getVideoList } from "@/api/getData.js"

export default {
  // 注册组件
  components: {
    HomeBanner,
    VideoList,
    CommonFooter,
  },
  data() {
    return {
      banners: [],
      courselist: [],
    };
  },
  methods: {
    //异步要等待获取完数据后再执行，一般都要加上，查数据库也是如此,这两个函数是自动执行的
    async getBannerData() {
      try {
        // 获取轮播图数据并赋值到data字段里,可以用console.log()在控制台查看调试返回信息
        //result的data属性是jsondata，data的data属性是集合
        const result = await getBanner();
        console.log(result.data);
        console.log(result.data.code == 0);
        if (result.data.code == 0) {
          this.banners = result.data.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getVlist() {
      // 获取视频列表数据并赋值到data字段里
      try {
        const result = await getVideoList();
        console.log(result.data);
        if (result.data.code == 0) {
          this.courselist = result.data.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    //页面渲染完成调用方法获取数据
    this.getBannerData();
    this.getVlist();
  },
};
</script>

<style lang="scss" scoped>
</style>