/**
 * Created by lihejia on 16/12/19.
 */
import React,{Component} from 'react';

import SidePanelView from './SidePanelView';
import MessagesView from './MessagesView';

const ChatMain =()=>{



    return (
        <div className="chat-container">

            <SidePanelView />

            <MessagesView />
        </div>
    )
}

export  default  ChatMain;
