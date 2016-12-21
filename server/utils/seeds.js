/**
 * Created by lihejia on 16/12/20.
 */

import {Meteor} from 'meteor/meteor';

import { Accounts } from 'meteor/accounts-base'

import Contacts from '/lib/collections/Contacts';
import UserInfo from '/lib/collections/UserInfo';

/***
 * 初始化联系人列表
 */
if(Contacts.find().count()==0){
    let datas=[];
    //生成用户测试数据
    for(let i=0;i<10;i++){
        let data={
            username:'user'+i,
            password:'111111'
        }

        let userId=Accounts.createUser(data);

        //添加到数据中
        datas.push(
            _.extend(data,{
            _id:userId
            })
        )
    }

    //添加彼此好友
    for(let i=0;i<datas.length;i++){
        let userId=datas[i]._id;
        for(let j=0;j<datas.length;j++){
            let _id=datas[j]._id;
            if(_id!==userId){
                let contact={
                    //用户ID
                    userId:userId,
                    //好友的ID
                    friendId:_id,
                    //添加好友时间
                    time:new Date(),
                }
                Contacts.insert(contact);

            }
        }

        //创建用户资料
        let avatarUrl='http://img2.imgtn.bdimg.com/it/u=48304837,1947065107&fm=21&gp=0.jpg';
        let userInfo={
            nikename:`昵称${i}`,
            avatar:avatarUrl,
            userId,
        }

        UserInfo.insert(userInfo);

    }



}


