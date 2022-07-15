import React from 'react'
import { Commoncompcss ,Heading, Stylecss } from './Commoncom.style'
import Itembox from './../Itembox/Itembox'
const Commoncomp = ({data,text,index=20}) => {
console.log(text);
  return (
    <Heading>
      <Stylecss>
      <h1>
        {/* <span>~~~~~~~~</span> */}
        <span>{text}</span>
        {/* <span>~~~~~~~~</span> */}
        </h1>
      </Stylecss>
        
<Commoncompcss>
{data.filter((i,id)=>id<=index && id>=(index-20)).map((item,idx)=>
      // <img src={`${item.addImageLink}`} alt="" />
      <Itembox data={item} text={"ADD TO CART"}/>
     )}
    </Commoncompcss>
    </Heading>
    
  )
}

export default Commoncomp