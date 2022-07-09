import styled from "styled-components";

export const Forgot = styled.div`
text-align:center;
font-size:1.5rem;
width:40vw;
height:40vh;
position:relative;
top:50%;
left:50%;

transform:translate(-50%,-50%);
form{
    margin-top:5px;
    background-color:#ccc;
    padding:50px 10px;
    input{
        outline:0;
        border:0;
        width:100%;
        padding:8px 3px;
        margin:15px 0;
    }
    small{
        color:red;
    }
    button{
        width:50%;
        outline:none;
        border:none;
        padding:5px 0px;
        }
}
`
export const Parent = styled.div`
position:absolute;
width:100vw;
height:100vh;
padding:10px 5px;
`