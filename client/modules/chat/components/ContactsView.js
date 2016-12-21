/**
 * Created by lihejia on 16/12/20.
 * 联系人列表
 */
import React from 'react';
import Contact from './Contact';

/***
 *
 * @param contacts 联系人列表
 * @returns {XML}
 * @constructor
 */
const ContactsView =({contactList=[],selectedItem,onSelected })=>{



    let contactNodes=[];

    contactNodes= contactList.map((item)=>{

        //列表选中状态,默认为不选中
        let selected=false;

        if(!_.isEmpty(selectedItem)&&selectedItem._id===item._id){
            selected=true;
        }

        let contactProps={
            key:item._id,
            //选中的联系人列表
            selected,
            //当前列表
            item,
            onSelected
        }



          return  <Contact {...contactProps} />

    })

    //console.log(contactNodes);

    return (
        <div className="contacts-panel">
            <ul className="contact-box">
                {contactNodes}
            </ul>
        </div>
    )
}

export  default  ContactsView;

