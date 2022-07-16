import styled from "styled-components";

export const Cartcss = styled.div`
display:flex;
background-color:#ccc;
width:45vw;
// @media(max-width:875px){
    // width:100vw;
    // display:flex;
    // flex-direction:column;
    // background-color:red;
// }
div:nth-child(1){
    background-color:white;
    margin:5px;
    padding:5px;
img{
    width:100px;
    height:120px;
}

}
div:nth-child(2){
    background-color:white;
    margin:5px;
    padding:5px;
    width:80%;
}
p{
    
    margin:5px 0;
}

h3{
    margin:9px 0;
}
`

export const Crosscss = styled.span`
cursor:pointer;
`