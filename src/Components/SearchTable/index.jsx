import React, {useState,useEffect} from 'react';
import CheckoutCard from '../ChechoutCards';
import {data} from "../../data"
import Pagination from '../Pagination';
const SearchCards = (state) => {
  const foundedItems = data?.filter((item) => item?.title.toLowerCase().trim().includes(state.state.word?.toLowerCase().trim()))

  const posts = foundedItems;
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const howManyPages = Math.ceil(posts.length / postsPerPage);

    return (
        <>
            {foundedItems?.length === 0 ? <div><h1>nothing found</h1> </div>: ""}
            <CheckoutCard  posts={currentPosts}/>
            <Pagination  pages={howManyPages} setCurrentPage={setCurrentPage}/>
        </>
    );
};

export default SearchCards;


