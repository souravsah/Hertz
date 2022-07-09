import styled,{createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100&display=swap");

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Jost", sans-serif;
}

html{
  font-size:62.5%;
}

li{
  list-style:none;
}
::-webkit-scrollbar {
  width: 5px;
  height:5px
}
/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(156, 149, 149); 
  border-radius: 10px;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #6d6c6c; 
}
`
export default GlobalStyle