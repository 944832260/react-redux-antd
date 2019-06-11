import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'


// 引入reducer函数
import headmsg from './user';

// 合并reducer函数
const rootReducer = combineReducers({
    headmsg,
    routing: routerReducer
});

export default rootReducer