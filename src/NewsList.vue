<template>
    <div id='newslist'>
        <el-row>
            <el-col :span="6">
                <el-select :width='20' v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="15">
                <el-input v-model="input" placeholder="搜索新闻"></el-input>
                <el-autocomplete-ex v-model="input" :fetch-suggestions="querySearch" @focus="onFocus" @blur="onBlur"></el-autocomplete-ex>
            </el-col>
            <el-col :span="3">
                <el-button type="primary">搜索</el-button>

            </el-col>
        </el-row>        

        <div class='news-list'>
            <ul id="example-1">
                <li v-for="item in newsList" style='border-bottom:1px solid #aaaaaa;'>
                    <el-row style='padding:5px;font-size:10pt'>
                        <el-col :span="12">{{item.source}}</el-col>
                        <el-col :span="12" style='text-align:right'>{{item.releasedate}}</el-col>
                    </el-row>
                    <div style='padding:5px;white-space: nowrap; text-overflow: ellipsis;overflow: hidden; '>
                        <a href="#" v-on:click="selectNews(item.id)">{{ item.title }}</a>
                    </div>
                </li> 
            </ul>
        </div>
    </div>
  
</template>

<script>

import AutocompleteEx from './AutocompleteEx';


export default {
    props: ["newsList","newsId"],
    components:{"el-autocomplete-ex":AutocompleteEx},
    data () {
        return {
            options: [{
                value: 'week',
                label: '最近一周'
                }, {
                value: 'month',
                label: '最近一个月'
                }, {
                value: 'month3',
                label: '最近三个月'
                }, {
                value: 'halfyear',
                label: '最近半年'
                }, {
                value: 'year',
                label: '最近一年'
            }],
            value: 'week',
            input:''
        }
    },
    methods:{
        selectNews(id){
            this.$emit("newsSelected",id);
        },
        querySearch(queryString, cb){
            cb([])
        },
        onFocus(){
            console.log("onFocus")
        },
        onBlur(){
            console.log("onBlur")
        },
    },
}
</script>

<style>
    ul{
        font-size: 11pt;
        list-style-type: none;
        margin: 0px;
        padding-left: 20px;
        padding-right: 10px;
    }
    .news-list{
        height:800px;overflow-y:auto;overflow-x:hidden;
    }
</style>


