/**
 * Created by lihejia on 16/12/21.
 */


import {Meteor} from 'meteor/meteor';
import React from 'react';

import Show from '../components/Show';
import { createContainer } from 'meteor/react-meteor-data';
import {connect} from 'dva';
import UserInfoCollection from '/lib/collections/UserInfo';
import Update from '../components/Update';

const UserInfo =({userInfo,userInfoState,dispatch,ready})=>{

    //console.log(userInfo,ready,userInfoState,dispatch)

    if(!ready){
        return <a>loading....</a>
    }else{

        const updateProps={
            ...userInfo,
            onSave(data){
                console.log(data)
                UserInfoCollection.update({_id:userInfo._id},{$set:data})
            }
        }
        const showProps={
            ...userInfo,
            onUpdate(){
                dispatch({
                    type:'userInfo/toUpdate'
                })
            }
        }
        return (
            <div className="user-info">
                {userInfoState.type==='show'?<Show {...showProps} />:<Update {...updateProps} />}
            </div>
        )

    }




}

const MeteorContainer=createContainer((props)=>{

    let userInfo
   let handle= Meteor.subscribe('userInfo');

    let ready=handle.ready();


    if(ready){
        userInfo=UserInfoCollection.find().fetch()[0];
    }

    return {
        ...props,
        userInfo,
        ready
    }

},UserInfo)


export  default connect(({userInfo})=>({userInfoState:userInfo}))(MeteorContainer);


