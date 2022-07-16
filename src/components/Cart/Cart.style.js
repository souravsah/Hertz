import styled from "styled-components";

export const Unique = styled.div`
padding:10px;
width:50vw;
background-color:#ccc;
div:nth-child(1){
}
@media(max-width:857px){
    width:100vw;
    padding:0;
}
`
export const Second = styled.div`
display:flex;
justify-content:space-between;
width:100vw;

@media(max-width:857px){
    flex-direction:column;
    width:100vw;
}
`
export const Paymentcss = styled.div`
width:50vw;
position:relative;
background-color:#ccc;
@media(max-width:857px){
    width:100vw;
position:unset;
transform:unset;
margin:10px;
}
ul{
    width:80%;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    padding:14px;
    margin:0 35px;
    background-color:white;
    li{
        display:flex;
        justify-content:space-between;
        margin:25px 0;
    }
}
`
export const Buttoncss=styled.li`
background-color:#ccc;
padding:9px;
font-size:1.2rem;
padding-left:200px;
@media(max-width:857px){
    padding:20px;
}
`