/**
 * Created by yangbingxun on 2016/11/25.
 */

import SingleTalker from './SingleTalker'

var React=require('react')

export default class TalkerMenu extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id="talkerMenuPane" className="TalkerMenuPane">
                {<SingleTalker imgUrl="material/img/headImg/hj.jpg" cname="软件工程四班" grade="2014级计算机学院" />}
                {<SingleTalker imgUrl="material/img/headImg/hj.jpg" cname="软件工程四班" grade="2014级计算机学院"/>}
                {<SingleTalker imgUrl="material/img/headImg/hj.jpg" cname="软件工程四班" grade="2014级计算机学院"/>}
                {<SingleTalker imgUrl="material/img/headImg/hj.jpg" cname="软件工程四班" grade="2014级计算机学院"/>}
            </div>
        )
    }
}