<template>
    <header>
        <div class="header">
            <span @click="$router.back(-1)">
                <i class="cubeic-back"></i>
            </span>
        <div class="title">
            {{this.videoInfo.title}}
        </div>
        </div>
    </header>
</template>

<script>
export default {
    // 一般Object,Array,数字就够使用了
    props:{
        videoInfo:{
            type: Object,
            required: true
        }
    },
    // 用于调试:
    mounted(){
        console.log(this.videoInfo)
    }
}
</script>


<style lang="scss" scoped>
.header {
    display: flex;//flex左右布局
    background-color: #07111b;
    padding: 10px 20px;
    color: #fff;
}  
// 返回箭头
.cubeic-back {
    color: #fff;
    margin-right:5px;
}
//视频标题
.title {
    font-size: 16px;
    width: 80%;
    //超出省略
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
</style>