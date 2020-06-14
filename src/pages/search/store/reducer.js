import { fromJS } from 'immutable';
import * as constants from './constants';
import API from "../API";

const defaultState = fromJS( {
    name:[],
    search: ""
});

const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
    });
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return changeHomeData(state, action)
        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll', action.show)
        default:
            return state;
    }
}

