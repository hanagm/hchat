/**
 * Created by lihejia on 16/12/20.
 */
import {Mongo} from 'meteor/mongo';


/***
 *用户基本信息 :头像、昵称、出生年月日、创建时间，用户对应的ID
 * @type {*}
 */
const UserInfo=new Mongo.Collection('userInfo');


export  default UserInfo;