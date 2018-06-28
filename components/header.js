import React from 'react';
import '../stylesheet/header.css'

class Header extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div>
                <div id="header" >
                    <div className="top"><p>海威科技园</p></div>
                    <input type="text" id="search" placeholder="搜索商家、商品名称"/>
                    <p className="link"><a href="">麻辣香锅</a><a href="">小龙虾</a><a href="">烧烤</a><a href="">粽子</a><a href="">大盘鸡</a><a href="">黄焖鸡</a></p>
                </div>
                <img src="" alt="" className="bannerg"/>
                <div id="nav">
                    <figure>
                        <img src="" alt=""/>
                        <figcaption>美食</figcaption>
                    </figure>
                    <figure>
                        <img src="" alt=""/>
                        <figcaption>晚餐</figcaption>
                    </figure>
                    <figure>
                        <img src="" alt=""/>
                        <figcaption>商店遍历</figcaption>
                    </figure>
                    <figure>
                        <img src="" alt=""/>
                        <figcaption>果蔬生鲜</figcaption>
                    </figure>
                    <figure>
                        <img src="" alt=""/>
                        <figcaption>新店特惠</figcaption>
                    </figure>
                    <figure>
                        <img src="" alt=""/>
                        <figcaption>大牌简餐</figcaption>
                    </figure>
                    <figure>
                        <img src="" alt=""/>
                        <figcaption>医药健康</figcaption>
                    </figure>
                    <figure>
                        <img src="" alt=""/>
                        <figcaption>甜品饮品</figcaption>
                    </figure>
                </div>
            </div>
        )
    }
}


export default Header;