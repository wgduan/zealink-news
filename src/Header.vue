<template>
    <div id='header'>
        <el-row>
            <el-col :span="24">
                <el-menu default-active="1" theme="dark" class="el-menu-demo" mode="horizontal">
                    <router-link to="/ExecutivesNews"><el-menu-item index="1">高管要闻</el-menu-item></router-link>
                    <router-link to="/InvestorRelations"><el-menu-item index="2">投资者关系</el-menu-item></router-link>
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