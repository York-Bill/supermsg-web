/**
 * Created by yangbingxun on 2016/11/18.
 */
import TimeBar from './TimeBar'

import React from 'react'

export default class SingleMsg extends React.Component{
    constructor(props){
        super(props);
    }

    getContentHtml(content) {
        return {__html: content};
    };

    render(){
        var msgDiv;
        switch (this.props.forward){
            case 'send':
                // console.log(this.props.read)
                msgDiv=(
                    <div className="send singleMsg ">
                        <div className={this.props.read?"head_img":"head_img animate bounceInUp"}>
                            <img src={this.props.headImg}/>
                        </div>
                        <div className={this.props.read?"":"animate bounceInUp"}>
                            <div className="msg_content ">
                                <div className="content">
                                    <div  dangerouslySetInnerHTML={this.getContentHtml(this.props.content)} />
                                </div>
                                <TimeBar date={this.props.date} time={this.props.time}/>
                            </div>
                        </div>
                    </div>
                )
                break;
            case 'receive':
                msgDiv=(
                    <div className="receive singleMsg ">
                        <div className={this.props.read?"head_img":"head_img animate bounceInUp"}>
                            <img src={this.props.headImg}/>
                        </div>
                        <div className={this.props.read?"":"animate bounceInUp"}>
                            <div className="msg_content ">
                                <div className="content">
                                    <div  dangerouslySetInnerHTML={this.getContentHtml(this.props.content)} />
                                </div>
                                <TimeBar date={this.props.date} time={this.props.time}/>
                            </div>
                        </div>
                    </div>
                )
                break;
        }
        return msgDiv;
    }
}
