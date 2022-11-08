import React, {useState } from "react";
import { PageTitle } from "../../Components/styles/styles";
import {
  CheckoutOrdersWrapper,
  CheckoutTitle,
  Input,
  ProductTitle,
  ProductWrapper,
  SearchButton,
  SearchWrapper,
} from "./styles";
import { ReactComponent as ArrowRight } from "../../Assets/assets/main/Arrow - Right.svg";
import { ReactComponent as SearchSvg } from "../../Assets/assets/main/Search.svg";
import Pagination from "../../Components/Pagination";
import { data } from "../../data";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import CheckoutCard from "../../Components/ChechoutCards";
import SearchCards from "../../Components/SearchTable";

const CheckoutOrders = () => {
  const posts = data;
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [state, setState] = useState({word:""})
  const navigate = useNavigate();
  const {pathname} = useLocation()

  if (loading && posts.length === 0) {
    return <h2>Loading...</h2>;
  }
   
  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const howManyPages = Math.ceil(posts.length / postsPerPage);
  // const searchHandler = () => {
  //     const {word} = e.target.value
  //     const state  = {
  //       word:word
  //     }
  //     console.log(state.word);
  // }

  return (
    <>
      {
        pathname !== '/checkout' ?
         <Outlet /> :
        <CheckoutOrdersWrapper>
        <CheckoutTitle>
          <div className="starter">
            Заявки <ArrowRight />{" "}
          </div>
          Оформитъ заказ
        </CheckoutTitle>
        <PageTitle>Оформит заказ</PageTitle>
        <SearchWrapper>
          <Input 
          onChange={(e) => setState({...state,word:e.target.value})}
            type={"search"} 
          placeholder={"Поиск по називанию товара"} />
          <SearchButton onClick={() => searchHandler }>
            <SearchSvg />
          </SearchButton>
        </SearchWrapper>
        <ProductTitle>Все товары ({data.length})</ProductTitle>
        <ProductWrapper >
         {state.word !== "" ?
         (
           <>
           <SearchCards pages={howManyPages} setCurrentPage={setCurrentPage}  state={state}/> 
           </>
         ):
         (
          <>
          <CheckoutCard posts={currentPosts}/>
          <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} />
          </>
         )
          }
        </ProductWrapper>
       </CheckoutOrdersWrapper>
      }
     
    </>
  );
};

export default CheckoutOrders;
