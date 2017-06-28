import { fork, take, call, put, all } from 'redux-saga/effects'
//import Api from './api'
import { fetchErrorMessage } from './actions'

const SUCCESS_CODE = '10000';

/**
 * 请求处理函数
 * 统一处理所有接口请求的验证等
 * @param {function} fetchHandle 请求函数
 * @param {function} successHandle 验证code正确后执行的处理函数
 * @param {function} errorHandle 验证code不正确后执行的处理函数
 * @param {object} entity 请求体对象
 * @returns 无
 */
const resultHandle = function* (fetchHandle, successHandle, errorHandle, entity) {
    console.log(entity);
    const { error, json } = yield call(fetchHandle, entity);
    console.log(error, json);
    if(error) {
        //.error(error);
        return yield put(fetchErrorMessage(error));
    }
    if(json.code !== SUCCESS_CODE) {
        return yield put(errorHandle(json.msg));
    }
    return yield put(successHandle(json));
}
const alertErrorHandle = (info) => {
    //message.error(info);
    return fetchErrorMessage(info);
}

/******************************************************************************/
/***************************** Subroutines ************************************/
/******************************************************************************/
function* logHandle(entity) {
    yield fork(
        resultHandle,
        ()=>{},
        ()=>({type: 'log'}),
        alertErrorHandle,
        entity,
    )
}


/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/
function* watchAndLog() {
    while(true) {
        const action = yield take('*');
        fork(logHandle, action);
        console.log('action', action);
        console.log('state after');
    }
}

/******************************************************************************/
export default function* root() {
    yield all([
        fork(watchAndLog),
    ])
}