import React,{useState,useEffect} from 'react'
import { ReactComponent as CardTool01 } from "../../Assets/assets/main/Акция-trade in.svg";
import { ReactComponent as CardTool02 } from "../../Assets/assets/main/Акция-IMEI.svg";
import { CardImageWrapper, CardTitle, CardToolOne, CardTools, CardToolSecond, CardWrapper, DiscountPrice, ProductAmount, ProductPrice, TitleInner } from './styles';
import { LinkHandler } from '../../hooks/Linker';
import { useNavigate } from "react-router-dom";


const CheckoutCard = ({posts}) => {
const navigate = useNavigate();

  return (
    <>
   {posts?.map((item)=>(
     <CardWrapper  
     key={item.id}
     onClick={() => { LinkHandler(navigate,`checkout`,item.id)}}
    >
     <CardImageWrapper>
       <CardTools>
         <CardToolOne>
           <CardTool01 />
         </CardToolOne>
         <CardToolSecond>
           <CardTool02 />
         </CardToolSecond>
       </CardTools>
       <img src={item.image}/>
     </CardImageWrapper>
     <CardTitle>
       <TitleInner>
       {item.title}
       </TitleInner>
     </CardTitle>
      <ProductPrice>{item.price}</ProductPrice>
      <DiscountPrice>
      <span className='main'>от {item.discount}сум</span>
      <ProductAmount>X 24</ProductAmount>
      </DiscountPrice>
   </CardWrapper>
   ))}
    </>
   )
  
}

export default CheckoutCard