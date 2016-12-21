/**
 * Created by lihejia on 16/12/21.
 */

module.exports={
    namespace:'userInfo',
    state:{
        type:'show'
    },
    effects:{

    },
    reducers:{
        toUpdate(state){
            return {...state,type:'update'}
        }
    }
}