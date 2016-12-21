/**
 * Created by lihejia on 16/12/19.
 * 登录model
 */

import {Meteor} from 'meteor/meteor';

import { routerRedux } from 'dva/router';
import MeteorPromise from '/client/util/MeteorPromise';
import { NotificationManager} from 'react-notifications';


module.exports={
    namespace:'login',
    state:{
        loading:false,
        error:null,
    },
    effects:{
        //登录
        *login({payload},{call,put,select}){


          let result= yield MeteorPromise("login",payload.username,payload.password)
            let {error,reason}=result;
            yield put({type:'loginSuccess'})
            if(error){
                console.log("error",reason);
                NotificationManager.error(reason);
                return;
            }


        },
        //sign up
        *signUp({payload},{call,put}){
            yield put({type:'loading'})

            let obj=yield MeteorPromise('createUser',payload);

            let {error,reason}=obj;
            yield put({type:'loginSuccess'})
            //如果存在错误，则进行错误提示
            if(error){
                console.log("error",reason);
                NotificationManager.error(reason);
                return;
            }

            console.log(obj);

            yield put(routerRedux.push("/"))
        }
    },
    reducers:{
        //错误提示信息
        error(state,{payload}){
            return {...state,...payload}
        },
        loading(state){
          return {...state,loading:true}
        },
        //登录成功
        loginSuccess(state){
            return {...state,loading:false}
        }
    }
}