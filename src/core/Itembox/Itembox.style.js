import styled from "styled-components";

export const Item =styled.div`
width:230px;
margin:12px;
height:350px;
padding:0px 6px;
border:1px solid #ccc;
// background-color:blue;
// align-items:center;
div:nth-child(2){
    font-size:1.3rem;
        text-align:center;
    margin-top:3px;
    p{
        margin:3px 0px;
    }
}
&:hover{
    box-shadow: 0 0 5px rgba(15, 15, 15, 0.26);
    transform: translateY(-1vmax);
    cursor:pointer;
}
`
export const Cart = styled.h3`
position:absolute;
width:90px;
display:flex;
justify-content:space-between;
height:40px;
bottom:16px;
padding:10px 12px;
background-color:#ccc;
// color:white
left:50%;
transform:translate(-50%,0);
z-index:1;
span:hover{
    cursor:pointer;
    font-size:2rem;
}
`
export const Item1 = styled.div`
    margin-top:10px;
    height:83%;
    width:100%;
    // background-color:red;
    position:relative;
`
