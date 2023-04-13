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
	font-family: 'MADE Evolve Sans','Arapey', sans-serif;
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
	background: linear-gradient(to bottom, #740094, #d7baf2);
	justify-content:space-between;
	align-items:center;
	padding:5%;

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
		filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.3));
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 20px));
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
	h1{font-family:'Arapey';
		font-weight: 700;
		font-size: 40px;
		text-align: center;
		line-height:48px;
		color:#740094;
		padding-block:40px;}
	p{
		font-family:'Arapey';
		font-weight: 700;
		font-size: 30px;
		text-align: center;
		line-height:40px;
		color:black;
		padding-block:40px;
	}
	button{
		margin-inline:auto;
		width:40%;
		border-radius:50px;
		font-family:'MADE Evolve Sans';
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
.modCont{
	width:100%;
	display:flex;
	background: linear-gradient(to bottom, #d7baf2, #00a1d7);
	justify-content:space-between;
	align-items:center;
	padding-inline:10%;
	flex-wrap:wrap;
	p{
		font-family:'Arapey';
		font-weight: 700;
		font-size: 40px;
		text-align: center;
		line-height:48px;
		color:black;
		padding-block:20px;
	}
	img{
		width:30%;
		border-radius:20px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 1);
		margin-block:20px;
	}
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
	height:60px;
	overflow:hidden;
	margin-block:10px;
	p{
		font-family:'Arapey';
		font-weight: 700;
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
		font-family:'MADE Evolve Sans';
		font-weight: 700;
		font-size: 25px;
		text-align: left;
		line-height:30px;
		color:white;
	}
	h2{
		font-family:'MADE Evolve Sans';
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
		font-family:'MADE Evolve Sans';
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
		font-family:'MADE Evolve Sans';
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
