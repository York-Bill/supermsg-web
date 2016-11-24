/**
 * Created by yangbingxun on 2016/11/19.
 */

import {connect} from 'react-redux'
import {VIEW_CHAT} from '../../actions/types/chat/chatActionType'
import {sendMsgToG,sendMsgToP,showChatMsg,read} from '../../actions/chatActions/chatAction'


import ChatPane from './ChatPane/ChatPane'
import ChatGroup from './ChatGroup/ChatGroup'

var React = require('react');


class IMChatPane extends React.Component{
    constructor(props){
        super(props);
    }

    send(msg,viewChat,id,dispatch){
        let msg_={
            forward:'send',
            type:msg.type,
            content:msg.content,
            date:msg.date,
            time:msg.time,
            headImg:msg.headImg,
            timeStamp:msg.timeStamp,
            read:false
        }
        switch (viewChat){
            case VIEW_CHAT.GROUP_CHAT:
                msg_.groupid=id;
                msg_.view=VIEW_CHAT.GROUP_CHAT;
                dispatch(sendMsgToG(msg_))
                dispatch(showChatMsg({type:VIEW_CHAT.GROUP_CHAT,id:id}));
                setTimeout(()=>{
                    dispatch(read(VIEW_CHAT.GROUP_CHAT,id))
                    dispatch(showChatMsg({type:VIEW_CHAT.GROUP_CHAT,id:id}));
                },1000)
                break;
            case VIEW_CHAT.P2P_CHAT:
                msg_.userid=id;
                msg_.view=VIEW_CHAT.P2P_CHAT;
                dispatch(sendMsgToP(msg_))
                dispatch(showChatMsg({type:VIEW_CHAT.P2P_CHAT,id:id}));
                setTimeout(()=>{
                    dispatch(read(VIEW_CHAT.P2P_CHAT,id));
                    dispatch(showChatMsg({type:VIEW_CHAT.P2P_CHAT,id:id}));
                },1000)
                break;
        }


    }

    change1(dispatch){
        dispatch(showChatMsg({type:VIEW_CHAT.GROUP_CHAT,id:'000000'}));
    }
    change2(dispatch){
        dispatch(showChatMsg({type:VIEW_CHAT.GROUP_CHAT,id:'000001'}));
    }


    render(){

        const {dispatch,msgList,viewChat,id} = this.props;
        return(
            <div>
                <section id="ChatGroup" className="ChatGroup">
                    <ChatGroup test1={()=>this.change1(dispatch)} test2={()=>this.change2(dispatch)} />
                </section><section id="ChatPane" className="ChatPane">
                    {id?<ChatPane msgList={msgList}  send={msg=>this.send(msg,viewChat,id,dispatch)} id={id}/> :<div/>}
                    </section>
            </div>
        )
    }
}


/*
 viewChatMsg={
    type:
    id:
}
 */

function selectViewChatMsg(chatMsg,viewChatMsg){
    switch (viewChatMsg.type){
        case VIEW_CHAT.GROUP_CHAT:
            // console.log(chatMsg.group[viewChatMsg.id])
            return typeof chatMsg.group[viewChatMsg.id] !=='undefined'?chatMsg.group[viewChatMsg.id]:[];
            break;
        case VIEW_CHAT.P2P_CHAT:
            return typeof chatMsg.p2p[viewChatMsg.id] !=='undefined'?chatMsg.p2p[viewChatMsg.id]:[];
            break;
        default:
            return [];
            break;
    }
}

function select(state){
    return{
        msgList:selectViewChatMsg(state.chatMsg,state.viewChatMsg),
        viewChat:state.viewChatMsg.type,
        id:state.viewChatMsg.id
    }
}

export default connect(select)(IMChatPane);