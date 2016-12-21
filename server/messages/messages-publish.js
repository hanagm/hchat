/**
 * Created by lihejia on 16/12/20.
 */

import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';


import Messages from '/lib/collections/Messages';



Meteor.publish('messages',function (friendId) {

    console.log(friendId,this.userId);
    check(friendId,String);


    let selector={
       "users":{$all:[this.userId,friendId] }
    }

    console.log(selector)


    let result=Messages.find(selector);
    console.log(result.fetch())
    return result;

})