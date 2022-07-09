import styled from "styled-components";

export const Login =styled.div`
small{
    color:red;
}
/* Created with https://www.css-gradient.com */
background: #27F0E1;
background: -webkit-linear-gradient(top left, #27F0E1, #C2D025);
background: -moz-linear-gradient(top left, #27F0E1, #C2D025);
background: linear-gradient(to bottom right, #27F0E1, #C2D025);
width:100vw;
height:100vh;
background-color:red;
position:relative;
`
export const Formcss = styled.form`

padding:20px;
border-radius:10px;
width:50%;
// height:500px;
background-color:white;
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
button{
    /* Created with https://www.css-gradient.com */
    background: #27F0E1;
    background: -webkit-linear-gradient(top left, #27F0E1, #C2D025);
    background: -moz-linear-gradient(top left, #27F0E1, #C2D025);
    background: linear-gradient(to bottom right, #27F0E1, #C2D025);
   font-size:1.2rem;
   outline:none;
   border:none;
   width:85%;
   margin-left:24px;
   margin-bottom:16px;
   margin-top:35px;
   padding:5px 0;
}
p{
    font-size:1.3rem;
    text-align:center;
    span{
        color:blue;
    }
}
@media(max-width:946px){
    width:70%;
    height:700px;
}
@media(max-width:423px){
    width:90%;
    height:700px;
}
`
export const Formbox=styled.div`
padding-left:18px;
padding-top:20px;
padding-bottom:20px;
input{
    width:90%;
    outline:none;
    border:none;
    border-bottom:1px solid #ccc;
}
`
export const Loginheader = styled.div`
height:200px;
text-align:center;
padding:40px 0;
font-size:2.4rem;
// background-color:green;
`