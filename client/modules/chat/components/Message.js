/**
 * Created by lihejia on 16/12/21.
 * 聊天内容集合
 */
import React from 'react';
import moment from 'moment';

/* BEGIN Conversation panel */
var Received = {
    UNDEF: -2,
    SENDING: -1,
    SERVER: 0,
    CLIENT: 1,
    READ: 2
};


// Short representation of time in the past.
function shortDateFormat(time) {

    let then=moment(time);

    var now = moment();
    if (then.year() == now.year()) {
        if (then.month() == now.month() && then.day() == now.day()) {
            return then.format("HH:mm");
        } else {
            return then.format("MM-DD HH:mm");
        }
    }
    return then.format("YYYY-MM-DD HH:mm");
}

// Material colors, shade #200; 16 colors.
var messageColors = [
    {bgColor: "#c5e1a5", color: "#212121"}, {bgColor: "#ef9a9a", color: "#212121"},
    {bgColor: "#90caf9", color: "#212121"}, {bgColor: "#fff59d", color: "#212121"},
    {bgColor: "#b0bec5", color: "#212121"}, {bgColor: "#f48fb1", color: "#212121"},
    {bgColor: "#b39ddb", color: "#212121"}, {bgColor: "#9fa8da", color: "#212121"},
    {bgColor: "#ffab91", color: "#212121"}, {bgColor: "#ffe082", color: "#212121"},
    {bgColor: "#a5d6a7", color: "#212121"}, {bgColor: "#bcaaa4", color: "#212121"},
    {bgColor: "#eeeeee", color: "#212121"}, {bgColor: "#80deea", color: "#212121"},
    {bgColor: "#e6ee9c", color: "#212121"}, {bgColor: "#ce93d8", color: "#212121"}
];
// Colors for user's own messages
var selfColor = {bgColor: "#fafafa", color: "#212121"};

const Message =(props)=>{

    var liClass = (props.response ? "left" : "right") + " " + props.sequence;
    var colors;
    colors = props.response ? {
            backgroundColor: messageColors[props.userIndex].bgColor,
            borderColor: messageColors[props.userIndex].bgColor,
            color: messageColors[props.userIndex].color
        } : {
            backgroundColor: selfColor.bgColor,
            borderColor: selfColor.bgColor,
            color: selfColor.color
        };
    var bubbleClass = (props.sequence === "single" || props.sequence === "last") ?
        "bubble tip" : "bubble";
    return (
        <li className={liClass}>
            <div className={bubbleClass} style={colors}>
                <p>{props.content}
                    <Message.ReceivedMarker response={props.response}
                                            timestamp={props.timestamp} received={props.received} />
                </p>
            </div>
        </li>
    );
}


/* Received/read indicator */
Message.ReceivedMarker = React.createClass({
    render: function() {
        var timestamp = (this.props.received === Received.SENDING) ?
            "sending ..." : shortDateFormat(this.props.timestamp);
        var marker = null;

        if (this.props.received === Received.SENDING) {
            marker = (<i className="material-icons small">access_time</i>); // watch face
        } else if (this.props.received === Received.SERVER) {
            marker = (<i className="material-icons small">done</i>); // checkmark
        } else if (this.props.received === Received.CLIENT) {
            marker = (<i className="material-icons small">done_all</i>); // double checkmark
        } else if (this.props.received === Received.READ) {
            marker = (<i className="material-icons small blue">done_all</i>); // open eye
        }

        return (
            <span className="pull-right timestamp">
            {timestamp}{'\u00a0'}{null}
          </span>
        );
    }
});


export  default Message;