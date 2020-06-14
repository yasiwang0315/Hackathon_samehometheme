import styled from "styled-components";

export const HomeWrapper = styled.div`
	overflow: hidden;
	width: 960px;
	margin: 0 auto;
    text-align: center;
    line-height: 64px;
    font-size: 36px;
    font-family: Helvetica, "Trebuchet MS", Verdana, sans-serif;
`;

export const HomeLeft = styled.div`
	float: left;
	margin-left: 0;
	padding-top: 30px;
	width: 960px;

	.banner-img {
		width: 960px;
		height: 380px;
	}
`;


export const TopicWrapper = styled.div`
	overflow: hidden;
	padding: 40px 0 10px 0;
	margin-left: -42px;
	border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`

	float: left;
	height: 190px;
	width: 156px;
	line-height: 50px;
	margin-left: 42px;
	margin-bottom: 18px;
	background: #f7f7f7;
	font-size: 18px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 5px;
	font-style: oblique;
	text-align: center;
	color: #fff;
	background: black;
	cursor: pointer;
	
	.topic-pic {
		display: block;
		float: left;
		width: 156px;
		height: 120px;
		margin-right: 20px;
	}
`;


export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.pic {
		display: block;
		width: 125px;
		height: 100px;
		float: right;
		border-radius: 10px;
	}
`;

export const ListInfo =	styled.div`
	width: 500px;
	float: left;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}
`;






export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 80px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 14px;
`
