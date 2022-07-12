import styled from "styled-components";

export const Item =styled.div`
width:230px;
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
`
export const Cart = styled.h3`
position:absolute;
bottom:16px;
padding:10px 12px;
background-color:#ccc;
// color:white
left:50%;
transform:translate(-50%,0);
z-index:1;
curser:pointer;
`
export const Item1 = styled.div`
    margin-top:10px;
    height:83%;
    width:100%;
    // background-color:red;
    position:relative;
`
