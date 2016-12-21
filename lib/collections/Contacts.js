/**
 * Created by lihejia on 16/12/20.
 * 联系人列表Collection
 */

import {Mongo} from 'meteor/mongo';



const Contacts=new Mongo.Collection('contacts');


export  default Contacts;