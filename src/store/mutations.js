import {
    DUMMY,
} from './mutation-types'

export default {
    [DUMMY](state,{dummy}){
        state.dummy={...dummy}
    },
}