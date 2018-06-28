import React from 'react';
import bannerr from '../img/bannerr.png'
import '../stylesheet/consty.css';

var bw = (document.documentElement.clientWidth/6.4)+"px";
var htmlTag = document.getElementsByTagName("html")[0];
htmlTag.style.fontSize=bw;

class Content extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<div>
				<div className="conbannerr"></div>
				<div className="connavmodeule">
					<div className="connav">
						<div className="concon"><p>限量抢购</p><p>丰盛晚餐9.9元起</p><p>2082人正在抢购</p><div className="conimg"></div></div>
						<div className="concon"><p>限量抢购</p><p>丰盛晚餐9.9元起</p><p>2082人正在抢购</p><div className="conimg"></div></div>
					</div>
					<div className="connav">
						<div className="concon concon1"><p>限量抢购</p><span className="concon2">丰盛晚餐9.9元起</span><div className="conimg"></div></div>
						<div className="concon concon1"><p>限量抢购</p><span className="concon2">丰盛晚餐9.9元起</span><div className="conimg"></div></div>
						<div className="concon concon1"><p>限量抢购</p><span className="concon2">丰盛晚餐9.9元起</span><div className="conimg"></div></div>
					</div>
				</div>
				<div className="conbanners"></div>
			</div>
		)
	}
}

export default Content;