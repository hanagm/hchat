/**
 * Created by lihejia on 16/12/21.
 */

import {Meteor} from 'meteor/meteor';
import React from 'react';
import Message from './Message';

class MessagePanel extends React.Component{

    // Scroll last message into view on component update e.g. on message received.
    componentDidUpdate() {
        var node = this.refs.messagesPanel;
        if (node) {
            node.scrollTop = node.scrollHeight;
        }
    }


    render(){
        let {messages,item}=this.props;

        var messageNodes = [];
        var myUid = Meteor.userId();
        var topic = item.userInfo._id;

        //userIdex 决定了接受到的内容的对话框的样式
        let userIndex = 0;
        var previousFrom = null;
        for (var i = 0; i < messages.length; i++) {
            var msg = messages[i];
            var nextFrom = (i + 1 < messages.length) ? messages[i + 1].from : null;
            var sequence = "single";
            if (msg.from === previousFrom) {
                if (msg.from === nextFrom) {
                    sequence = "middle";
                } else {
                    sequence = "last";
                }
            } else if (msg.from === nextFrom) {
                sequence = "first";
            }
            previousFrom = msg.from;
            let msgReceived = msg.status;
            var isReply = !(msg.from === myUid);


            messageNodes.push(
                <Message content={msg.content} timestamp={msg.ts } response={isReply}
                         userIndex={userIndex} sequence={sequence} received={msgReceived} key={msg._id}/>
            );
        }


        return (
            <div id="messages-panel" ref="messagesPanel">
                <ul className="chat-box">
                    {messageNodes}

                </ul>
            </div>
        )
    }
}

export  default  MessagePanel;