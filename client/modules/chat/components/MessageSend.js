/**
 * Created by lihejia on 16/12/21.
 */
import React from 'react';


class MessageSend extends  React.Component{

    constructor(props){
        super(props);
        this.state={
            message:''
        }
    }

    //发送按钮
    handleSend(e){
        if(e){
            e.preventDefault();
        }

        let message=this.state.message;
        if(_.isEmpty(message.trim())){
            return;
        }
        this.props.onSend(message);

        this.setState({message:''})
    }
    //键盘按下事件
     handleKeyPress(e) {
         if (e.key === 'Enter') {
             this.handleSend();
         }
    }

    //change
     handleMessageTyping(e) {
        let value=e.target.value;
       this.setState({message:value});
    }
    render(){
        return (
            <div id="send-message-panel">
                <input id="sendMessage" type="text" placeholder="New message"
                       value={this.state.message} onChange={(e)=>this.handleMessageTyping(e)} onKeyPress={(e)=>this.handleKeyPress(e)} />
                <a href="#" onClick={()=>this.handleSend(e)}>
                    <i className="material-icons">send</i>
                </a>
            </div>
        )
    }

}

export  default  MessageSend;