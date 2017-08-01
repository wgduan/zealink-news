import Axios from 'axios'
import Qs from 'qs'

export default {
    getNewsList: function () {
        return Axios.post('http://web7.umydata.com/API/NewsStockList',
            Qs.stringify({
                "symbol[]": "000027.sz",
                "filed[]": [
                    "name",
                    "symbol",
                    "releasedate",
                    "title",
                    "id",
                    "source",
                    "content",
                    "researchdate",
                    "level",
                    "type",
                    "researcher"
                ],
                "querydate[StartDate]": "20160722",
                "querydate[EndDate]": "20170722",
                "calccount": "1",
                "start": "0",
                "end": "20",
                "userid": "qiuyh2"
            }), )
    },
    getNewsDetail: function (id) {
        return Axios.post('http://web7.umydata.com/API/NewsStockDetail',
            Qs.stringify({
                "id": id,
                "filed[]": [
                    "name",
                    "symbol",
                    "link",
                    "releasedate",
                    "title",
                    "id",
                    "content"
                ]
            }), )
    }
}