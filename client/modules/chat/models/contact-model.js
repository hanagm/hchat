/**
 * Created by lihejia on 16/12/20.
 * 联系人列表model
 */


import {Meteor} from 'meteor/meteor';
module.exports={
    namespace:'contact',
    state:{
        //联系人列表
        contacts:[],
        //加载状态
        ready:false,
        //选中列表
        selectedItem:{}
    },
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(location => {
                if (location.pathname === '/') {

                   // console.log("subscriptions")

                }
            });
        },
    },
    effects:{

    },
    reducers:{
        //数据读取状态  payload:{ready:true||false}
        readyStatus(state,{payload}){
            return {...state,ready:payload.ready}
        },
        //数据读取完成
        readySuccess(state,{payload}){
            return {...state,...payload}
        },
        //选中
        onSelected(state,{payload}){
            return {...state,selectedItem:payload}
        }

    }
}