import axios from "axios";
import * as constants from './constants';
import API from "../API";

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})

export const getRandomUser = () => {
    return (dispatch) => {
        axios.get('/api/search.json').then((res) => {
            const result = res.data.data;
            dispatch(getRandomUser(result));
        })
    }
}


