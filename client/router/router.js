/**
 * Created by lihejia on 16/12/19.
 */


import React from 'react';
import {Router,Route,IndexRoute} from 'dva/router';
import AppView from '/client/modules/main-view/AppView';
import Chat from '../modules/chat/containers/Main';
import Login from '../modules/login/containers/Login';
import SignUp from '../modules/login/containers/SignUp'
import NotFound from '../modules/not-found/NotFound';
import UserInfo from '../modules/userinfo/containers/UserInfo';

/***
 * 权限校验，如果未登录，且不是登录或者注册，则跳转到登录
 * @param next
 * @param replace
 * @param callback
 */
const requireAuth =(next,replace,callback)=>{
    //console.log("validata",replace)
      let pathname=next.location.pathname;
        console.log(pathname)
        if(!Meteor.userId()&&pathname!='/login'){
            replace("/login");
        }


        callback();
}


//路由配置
const  routerConfig=[
    {
        path:"/",
        onEnter:requireAuth,
        component:AppView,
        indexRoute:{component:Chat},
        childRoutes:[
            {
                path:'login',
                component:Login,

            },
            {
                path:'sign-up',
                component:SignUp
            },
            {
                path:'user_info',
                component:UserInfo
            }
        ]

    },{
        path:'*',
        component:NotFound
    }

]


export  default function ({history}) {
    return (
        <Router history={history} routes={routerConfig}  />
    )
}