import styled from 'styled-components'

export const Wishlistcss = styled.div`
// width:100vw;
height:100vh;
position:relative;
text-align:center;
div{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    margin-top:7.3rem;
    h1{
        font-size:1.8rem;
    }
    h3{
        color:#ccc;
        font-size:1.8rem;
    }
    img{
        width:100px;
        height:120px;
        margin:10px 0;
    }
    button{
        outline:0;
        border:0;
        padding:10px 14px;
        font-size:1.8rem;
    }
}
`