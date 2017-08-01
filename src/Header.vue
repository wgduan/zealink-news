<template>
    <div id='header'>
        <el-row>
            <el-col :span="24">
                <el-menu theme="dark" class="el-menu-demo" mode="horizontal">
                    <el-menu-item index="1"><router-link to="/ExecutivesNews">高管要闻</router-link></el-menu-item>
                    <el-menu-item index="2"><router-link to="/InvestorRelations">投资者关系</router-link></el-menu-item>
                    <el-menu-item index="3">互动易</el-menu-item>
                    <el-menu-item index="4">回复函</el-menu-item>
                    <el-menu-item index="5">负面新闻</el-menu-item>
                    <el-menu-item index="6">官网新闻</el-menu-item>
                    <el-menu-item index="7">网络资讯</el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>

</style>