import React from "react";

import '../stylesheet/sty.css'
import a from '../img/a.jpg'

class App extends React.Component{
	constructor(props){
		super(props)
	}	
	render(){
		return(
			<div>
				<div className="pzyx">
					<div>品质套餐</div>
					<div>品质套餐</div>
					<div>品质套餐</div>
					<div>品质套餐</div>
				</div>
				<h4>-推荐商家-</h4>
				<div className="tjsj">
					<div className="leftimg"></div>
					<div className="rightcon">
						<p>德克士(京广路店)</p>
						<p>月售666单</p>
						<p>20起送</p>
						<p>口碑人气好店</p>
						<p>满35件22</p>
						<p>特价商品55元起</p>
					</div>
				</div>
			</div>
		)
	}
}

export default App;