/**
 * Created by lihejia on 16/12/20.
 */

import React from 'react';
import {Meteor} from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Messages from '/lib/collections/Messages';
import {connect} from 'dva';
import moment from 'moment';
import MessageCollection from '/lib/collections/Messages';

import Dummy from '../components/Dummy';

import MessageTitle from '../components/MessageTitle';
import Send from '../components/MessageSend';
import MessagePanel from  '../components/MessageNodes'


class MessagesView extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {
        let {dispath, contact, messages, ready} =this.props;
        let {selectedItem} =contact;

        if (_.isEmpty(selectedItem)) {
            return <Dummy/>
        } else {
            const titleProps = {
                title: selectedItem.userInfo.nikename,
                lastSeen: `Last seen: ${moment().format("MMMM, h:mm:ss a")}`
            }

            const sendProps = {
                onSend(data){
                    let insert = {
                        //发送内容
                        content: data,
                        status:-1, //设置发送中
                        from:Meteor.userId(),
                        //发送至
                        to: selectedItem.userInfo.userId
                    }
                    MessageCollection.insert(insert)
                }
            }

            const messagesProps = {
                item: selectedItem,
                messages,
            }
            return (
                <div id="topic-view">
                    <MessageTitle  {...titleProps}/>
                    <MessagePanel {...messagesProps} />
                    <Send {...sendProps }/>
                </div>
            )
        }
    }
}


const MeteorContainer=createContainer((props)=>{



    let {selectedItem}=props.contact;

    //聊天内容集合
    let messages=[];
    let ready;
    if(!_.isEmpty(selectedItem)){
        //订阅和当前用户的聊天信息
        let chatUserId=selectedItem.userInfo.userId;
        const handle= Meteor.subscribe('messages',chatUserId);
        ready=handle.ready();
        if(ready){

            messages=Messages.find().fetch();
        }

    }



    return {
        ...props,
        messages,
        ready,

    }


},MessagesView);

export  default  connect(({contact})=>({contact}))(MeteorContainer);