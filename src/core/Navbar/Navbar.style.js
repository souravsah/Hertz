import styled from "styled-components"


export const Hamburger = styled.div`
display:none;
@media(max-width:964px){
    grid-column:2/3;
    display: block;
   padding-top:34px;
   padding-left:8px; 
   
    font-size: 2.5rem;
}

`
export const Bsearch = styled.div`
display:none;

`
export const Navbarcss = styled.nav`
width:100%;
height:104px;
display:grid;
grid-template-columns: 1rem 1fr 1fr 1fr 0rem;
box-shadow: 0px 10px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 0px 10px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 10px 5px 0px rgba(0,0,0,0.75);
@media(max-width:964px){
    grid-template-columns: 1rem 1fr 1fr 1fr 1rem;
    height:80px;
}


`
export const First =styled.div`
grid-column:2/3;

@media(max-width:964px){
    grid-column: 2/5;
    
        

}
`
export const List = styled.ul`
    font-size:1.5rem;
    height: 10rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li{
        padding:9px 11px;
        border-radius:10px 0 10px 0;
    }
    li:hover{
        cursor:pointer;
        background-color:#ccc;
    }
    @media(max-width:964px){
    height: 20rem;
    display: ${({toggle})=>toggle?"flex":"none"};;
    justify-content: space-around;
    flex-direction: column;
    align-items: start;

    li{
        border-bottom:1px solid black;
        padding:20px 10px;
        width:100%;
        background-color:#ccc;

        z-index:99;
    }
    // li:hover{
    //     background-color:#ccc;
    // }
    }
`

export const Searchbar = styled.div`
display: grid;
/* background-color: #3b5998; */
// grid-column: 3/4;

margin-right:10px;
// justify-content: start;
align-items: center;
input{
    width:260px;
    outline:none;
    border:none;
    background-color:#ccc;
    padding:5px 0;
}
@media(max-width:964px){
    grid-row: 1/2;

    grid-column:3/4;
    margin-left:5px;
    magrin-right:3px;
    input{
        width:160px;
    }
}
@media(max-width:444px){
    input{
        width:160px;
    }
}
`


export const Second = styled.div`
ul{
    font-size:2rem;
height: 10rem;
display: grid;
grid-template-columns: repeat(3, 1fr);
align-items: center;
justify-content: flex-end;
}
li{
    cursor:pointer;
}
@media(max-width:964px){
    grid-row: 1/2;
    grid-column:4/5;
}
`
