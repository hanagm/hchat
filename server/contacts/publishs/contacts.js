/**
 * Created by lihejia on 16/12/20.
 */

import {Meteor} from 'meteor/meteor';

import Contacts from '/lib/collections/Contacts';
import UserInfo from '/lib/collections/UserInfo';

Meteor.publish('contacts',function (opts) {


    check(this.userId,String);
    let contacts=Contacts.find({userId:this.userId});


    //console.log("fetch",contacts.fetch());
    //获取联系人列表
    let contactsId=[];
    contactsId=_.pluck(contacts.fetch(),'friendId')

    contactsId.push(this.userId)
   // console.log(contactsId);


    let usersInfos=UserInfo.find({userId:{$in:contactsId}})

    return [
        contacts,
        usersInfos
    ]

})

/**联系人基本信息*/
Meteor.publish('contactsUser',function () {

})