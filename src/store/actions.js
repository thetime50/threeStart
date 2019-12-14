// (异步)获取 设置数据
// import {
//     //getDummy
// } from '../api'
import {
    DUMMY,
} from './mutation-types.js'

export default{
    recordDummy({commit},dummy){
        commit(DUMMY,{dummy})
    }
}