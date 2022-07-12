import styled from "styled-components";


export const Heading = styled.div`
text-align:center;

`
export const Stylecss = styled.div`
width:100vw;
height:40px;
background-color:#ccc;
h1{
    margin:30px 0;
    padding:10px;
}
`


export const Commoncompcss = styled.div`
width:100%;
// height:700px;
display:grid;
grid-template-columns: auto auto auto auto;
// background-color: #2196F3;
padding: 10px;
grid-gap:10px;
@media(max-width:950px){
    grid-template-columns: auto auto auto;
}
@media(max-width:660px){
    grid-template-columns: auto auto;
}
@media(max-width:462px){
    grid-template-columns: auto ;
}
`