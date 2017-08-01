<template>
    <div id='executives-news'>
        <el-row class="bg-purple-light">
            <el-col :span="10">
                <div class="grid-content bg-purple-light">
                    <news-list :newsList='newsList' v-on:newsSelected="newsSelected"></news-list>
                </div>
            </el-col>
            <el-col :span="14">
                <div style='padding:20px' class="grid-content bg-purple-light">
                    <news-detail :newsDetail="newsDetail"></news-detail>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import NewsList from './NewsList.vue'
    import NewsDetail from './NewsDetail.vue'
    import NewsService from './NewsService'

    export default {
        data() {
            return {
                activeIndex: '1',
                newsList: [],
                newsDetail: {},
            }
        },
        components: {
            "news-list": NewsList,
            "news-detail": NewsDetail
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            newsSelected(id) {
                NewsService.getNewsDetail(id)
                    .then(response => {
                        //console.log(response.data)
                        var news = response.data.list[0];
                        news.content = news.content.replace(/\r\n|\r|\n/g, ' <br>&nbsp; &nbsp;');
                        this.newsDetail = news;
                    })
                    .catch(e => {
                        console.log(e);
                    })
            }

        },
        created: function () {
            NewsService.getNewsList().then(
                response => {
                    //console.log(response.data)
                    this.newsList = response.data.list
                    if (this.newsList.length > 0) {
                        this.newsSelected(this.newsList[0].id)
                    }
                }
            ).catch(e => {
                console.log(e);
            })

        }
    }
</script>

<style>

</style>