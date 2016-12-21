/**
 * Created by lihejia on 16/12/21.
 */


import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import UserInfo from '/lib/collections/UserInfo';

/***
 * 获取当前用户基本信息
 */
Meteor.publish('userInfo',function () {

    check(this.userId,String);

    return UserInfo.find({userId:this.userId})

})