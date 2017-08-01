<template>
    <div id='newsdetail'>
        <h3><span>[{{newsDetail.name}}]</span>{{newsDetail.title}}</h3>
        <el-row class='news-header'>
            <el-col :span='20'>
                <div><span>{{newsDetail.releasedate}}</span>&nbsp;&nbsp;<span>{{newsDetail.source}}</span></div>
            </el-col>
            <el-col :span="4" style='text-align:right;'><a :href='newsDetail.link'>查看原文</a></el-col>
        </el-row>

        <div class='news-content'>
            <p v-html="newsDetail.content"></p>
        </div>
    </div>
    
</template>

<script>
export default {
  props:['newsDetail'],
  data () {
    return {
      
    }
  },
}
</script>

<style>
.news-header{
    border-bottom:1px solid gray;margin-top:1em;
}
.news-content{
    margin-top:10px;height:728px;overflow-y:auto;overflow-x:hidden;
}
p{
    text-indent: 32px;
    text-align: justify;
    text-justify: inter-ideograph;
    line-height: 24px;
}

</style>
