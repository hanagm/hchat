/**
 * Created by lihejia on 16/12/20.
 */
import React from 'react';

const Contact =({item,selected,onSelected})=>{
      let  now=false;
        let comment;
        let unread=5;
        let tcomment="wow";

    //头像
    let avatar=item.userInfo.avatar;
    //昵称
    let title=item.userInfo.nikename;


    var selectClass = selected ? "selected" : null;
    let avatar_content=avatar?<img src={avatar} className="avatar" />:""


    //选中
    function onSelect() {
        if(!selected){
            onSelected(item)
        }
    }
    return (
        <li  className={selectClass} onClick={()=>onSelect()}>
            <div className="avatar-box">
                {avatar_content}
                {now ? <span className="online"></span> : null}
            </div>
            <div className="text-box">
                <div>
                    <span className="contact-title">{title}</span>
                </div>
                {tcomment ? <div>{comment}</div> : null}
            </div>

        </li>
    )
}


//显示数量图标
const  Unread =({count})=> {

        var showUnreadBadge = null;
        if (count > 0) {
            var count = count > 9 ? "9+" : count;
            showUnreadBadge = <span className="badge">{count}</span>;
        }
        return (
            <span>{showUnreadBadge}</span>
        );
};


export  default  Contact;