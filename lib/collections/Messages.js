/**
 * Created by lihejia on 16/12/20.
 */


import {Mongo} from 'meteor/mongo';


/***
 *用户聊天记录
 * @type {*}
 */
const Messages=new Mongo.Collection('messages');


/***
 *   //发送时间
 *  ts:,
 *   //发送者
 *  from:,
 *  status 消息状态:0,未读，1，已读
 */
Messages.allow({
    insert:function (userId,doc) {

        if(!userId){
            return false
        }

        _.extend(doc,{
            from:userId,
            ts:new Date(),
            users:[userId,doc.to],
            status:0,
        })

        return true;
    }
})


export  default Messages;