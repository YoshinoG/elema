import React from 'react';
import Header from "./header";

var bw = (document.documentElement.clientWidth/6.4)+"px";
var htmlTag = document.getElementsByTagName("html")[0];
htmlTag.style.fontSize=bw;

class Content extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {
                    this.props.children.map(child=><div>{child}</div>)
                }
            </div>
        )
    }
}

export default Content;