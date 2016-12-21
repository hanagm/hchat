/**
 * Created by lihejia on 16/12/20.
 *
 * 左侧面板
 */

import {Meteor} from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import React from 'react';
import SideNavBar from '../components/SideNavBar';
import ContactsView from '../components/ContactsView';
import {connect} from 'dva';
import Contacts from '/lib/collections/Contacts';
import UserInfo from '/lib/collections/UserInfo';
const SidePanelView =({dispatch,contactList,ready,contact})=>{



    let userInfo=_.findWhere(UserInfo.find().fetch(),{userId:Meteor.userId()})

    const nav={
            title: userInfo&&userInfo.nikename||"",
            avatar:userInfo&&userInfo.avatar||"",
    }

        const contactsProps={
            selectedItem:contact.selectedItem,
            contactList,
            //选中函数
            onSelected:function (item) {
                dispatch({
                    type:'contact/onSelected',
                    payload:item
                })
            }
        }
    return (
        <div className="side-panel">
        {/**顶部bar*/}
            <SideNavBar {...nav}  />
            <ContactsView {...contactsProps}/>

        </div>
    )
}

function mapStateToProps({contact}) {

    return {contact}
}


const MeteorContainer=createContainer((props)=>{

    const handle= Meteor.subscribe('contacts');
    let ready=handle.ready();

    let contactList=[];
    if(ready){
        Contacts.find().fetch().map((ele)=>{
            let userInfo=_.findWhere(UserInfo.find().fetch(),{userId:ele.friendId})
            let contact={
                _id:ele._id,
                userInfo,
            }
            contactList.push(contact);
        })
    }

    return {
        ...props,
        contactList,
        ready:ready,

    }


},SidePanelView);

export  default  connect(mapStateToProps)(MeteorContainer);