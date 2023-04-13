import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	background-color:#FAFAFB;
    font-family: 'SF Pro Display', sans-serif;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/*MY MODIFICATIONS*/
*{
    box-sizing: border-box;
	font-family: 'Montserrat', sans-serif;
}
button{
    border: none;
}
input:focus{
    outline: none;
}
.headCont{
	width:100%;
	display:flex;
	flex-direction:column;
	background: linear-gradient(to bottom, #740094, #d7baf2);
	justify-content:space-between;
	align-items:center;
	padding-block:15px;
	padding-inline:5%;
	img{
		width:20%;
		filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.3));
	}
	p{
		font-family:'Montserrat';
		font-weight: 700;
		font-size: 30px;
		text-align: center;
		line-height:35px;
		color:#fd3dab;
		padding-block:10px;
		width:80%;
	}
	button{
		width:30%;
		border-radius:50px;
		font-family:'Montserrat';
		font-weight: 700;
		font-size: 25px;
		text-align: center;
		line-height:30px;
		color:white;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		margin-block:25px;
		padding-block:15px;
		background-color: #fd3dab;
		cursor:pointer;
	}

}
.video-responsive{
	margin-block:20px;
}
.fourthCont{
	width:100%;
	display:flex;
	background: linear-gradient(to bottom, #00dfc8, #ffbd59);
	justify-content:space-between;
	align-items:center;
	padding:8%;
	img{
		width:35%;

	border-radius:50px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	}

}
.icon{
	margin-right:8px;
	margin-bottom:-5px;
}
.prints{
	background:#d7baf2;
	h1{
		font-family: 'Montserrat';
		font-weight: 700;
		font-size: 40px;
		line-height: 40px;
		text-align:center;
		color:black;
		padding-top:40px;
	}
}
.bonusbox{
	display:flex;
	justify-content:center;
	padding-block:30px;
	flex-wrap:wrap;
	padding-inline:5%;
	h1{
		font-family: 'Montserrat';
		font-weight: 700;
		font-size: 40px;
		line-height: 40px;
		text-align:center;
		color:white;
		padding-top:40px;
		display:block;
	}
}
.bonuscard{
	height:350px;
	display:flex;
	width:30%;
	border-radius:20px;
	align-items:center;
	background-color: #740094;
	box-shadow:(0 0 10px rgba(0, 0, 0, 0.3));
	margin:auto;
	margin-block:20px;
	img{
		height:100%;
	}
	p{

		font-family: 'Montserrat';
		font-weight: 400;
		font-size: 15px;
		line-height: 20px;
		color:white;
		padding:15px;

	}


}
.sectiona{
	display:flex;
	justify-content:center;
	width:100%;
	padding-block:30px;	
	img{
		width:40%;
	}
}
.sectionb{
	display:flex;
	justify-content:center;
	width:100%;

	padding-block:30px;
	img{
		width:40%;
		filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.3));
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 20px));
	}
}
.sectionc{
	display:flex;
	justify-content:center;
	width:100%;

	padding-block:30px;
	img{
		width:45%;
	}
}
.sectiond{
	display:flex;
	justify-content:center;
	width:100%;

	padding-block:30px;
	img{
		width:80%;
		box-shadow:(0 0 10px rgba(0, 0, 0, 0.3));
	}
}
.thirdCont{
	width:100%;
	display:flex;
	background: linear-gradient(to bottom, #00a1d7, #00dfc8);
	justify-content:space-between;
	align-items:center;
	padding-inline:10%;
	flex-wrap:wrap;
	h1{font-family:'Montserrat';
		font-weight: 800;
		font-size: 35px;
		text-align: center;
		line-height:40px;
		color:#740094;
		padding-bottom:30px;
		padding-top: 120px;
	}
	p{
		font-family:'Montserrat';
		font-weight: 600;
		font-size: 25px;
		text-align: center;
		line-height:28px;
		color:black;
		padding-block:40px;
		width:70%;
		margin:auto;
	}
	button{
		margin-inline:auto;
		width:40%;
		border-radius:50px;
		font-family:'Montserrat';
		font-weight: 700;
		font-size: 35px;
		text-align: center;
		line-height:43px;
		color:white;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		margin-block:25px;
		padding-block:15px;
		background-color: #fd3dab;
		cursor:default;
	}
}
.checkbox{
	margin-inline:auto;
		width:50%;
		border-radius:80px;
		h1{font-family:'Montserrat';
		font-weight: 400;
		font-size: 20px;
		text-align: center;
		line-height:24px;
		color:black;
		padding-block:20px;
		text-align:left;
	}
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		padding:15px;
		background-color: white;
		cursor:default;
		border: 3px solid #fd3dab;
}
.modCont{
	width:100%;
	display:flex;
	background: linear-gradient(to bottom, #d7baf2, #00a1d7);
	justify-content:space-between;
	align-items:center;
	padding-inline:10%;
	flex-wrap:wrap;
	p{
		font-family:'Montserrat';
		font-weight: 700;
		font-size: 35px;
		text-align: center;
		line-height:40px;
		color:black;
		padding-block:20px;
	}
	img{
		width:18%;
		border-radius:20px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 1);
		margin-block:20px;
	}
}
.fifCont{
	width:100%;
	background: linear-gradient(to bottom, #ffbd59, #fd3dab);
	h1{
		font-family:'Montserrat';
		font-weight: 800;
		font-size: 45px;
		text-align: center;
		line-height:50px;
		color:black;
		padding-block:20px;
		margin-bottom:20px;
	}
	padding-bottom:40px;
}
.bonusCont{

	background: linear-gradient(to bottom, black, #740094);
	h1{
		font-family:'Montserrat';
		font-weight: 800;
		font-size: 35px;
		text-align: center;
		line-height:40px;
		color:white;
		padding-bottom:20px;
		padding-top:50px;
	}
}
.checktwo{
	margin-inline:auto;
		width:40%;
		border-radius:80px;
		p{font-family:'Montserrat';
		font-weight: 400;
		font-size: 20px;
		text-align: center;
		line-height:22px;
		color:white;
		padding-block:20px;
		text-align:left;
	}
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		padding:35px;
		background-color: #740094;
		cursor:default;
		border: 3px solid #fd3dab;
}
.textboxb{
	width:60%;
	display:flex;
	flex-direction:column;
	
}
.questionBox{
	background-color:#740094;
	border-radius:15px;
	transition: height 0.5s ease;
	padding:15px;
	overflow:hidden;
	margin-block:10px;

	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	p{
		font-family:'Montserrat';
		font-weight: 500;
		font-size: 22px;
		line-height:28px;
		color:white;
		margin-block:10px;
	}
}
.question{
	display:flex;
	justify-content:space-between;
	width:100%;
	cursor:pointer;
	h1{
		font-family:'Montserrat';
		font-weight: 700;
		font-size: 25px;
		text-align: left;
		line-height:30px;
		color:white;
	}
	h2{
		font-family:'Montserrat';
		font-weight: 700;
		font-size: 35px;
		text-align: right;
		line-height:30px;
		color:white;
	}
}
.textboxa{
	width:47%;
	display:flex;
	flex-direction:column;
	align-items:center;
	img{
		width:100%;

		filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.3));
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 20px));
	}
	p{
		font-family:'Montserrat';
		font-weight: 700;
		font-size: 40px;
		text-align: center;
		line-height:48px;
		color:#ffbd59;
		padding-block:10px;
	}
	button{
		width:90%;
		border-radius:50px;
		font-family:'Montserrat';
		font-weight: 700;
		font-size: 35px;
		text-align: center;
		line-height:43px;
		color:white;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		margin-block:25px;
		padding-block:15px;
		background-color: #fd3dab;
		cursor:pointer;
	}

}
.fotoa{
	width:45%;
	border-radius:50px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

`


export default GlobalStyle
